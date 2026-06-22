import { NextResponse } from "next/server";
import { contacts } from "../../../lib/contacts";

type OrderPayload = {
  orderText?: string;
  customer?: string;
  customerPhone?: string;
  siteAddress?: string;
  total?: number;
};

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export async function POST(request: Request) {
  const payload = (await request.json().catch(() => null)) as OrderPayload | null;

  if (!payload?.orderText?.trim()) {
    return NextResponse.json({ message: "Нет данных расчета для отправки." }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.ORDER_EMAIL_TO || contacts.email;
  const from = process.env.ORDER_EMAIL_FROM || "Климат 365 <onboarding@resend.dev>";

  if (!apiKey) {
    return NextResponse.json(
      {
        message:
          "Отправка писем не настроена. Добавьте RESEND_API_KEY в .env.local или на хостинге.",
      },
      { status: 500 },
    );
  }

  const subjectParts = ["Заявка по расчету — Климат 365"];
  if (payload.customer) subjectParts.push(payload.customer);
  if (payload.customerPhone) subjectParts.push(payload.customerPhone);

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to,
      subject: subjectParts.join(" — "),
      text: payload.orderText,
      html: `<pre style="font-family: Arial, sans-serif; white-space: pre-wrap; line-height: 1.5">${escapeHtml(
        payload.orderText,
      )}</pre>`,
    }),
  });

  if (!response.ok) {
    const details = await response.text().catch(() => "");
    return NextResponse.json(
      { message: "Почтовый сервис не принял заявку.", details },
      { status: 502 },
    );
  }

  return NextResponse.json({ message: "Заявка отправлена." });
}
