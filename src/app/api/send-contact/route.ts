import { NextResponse } from "next/server";
import { contacts } from "../../../lib/contacts";

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export async function POST(request: Request) {
  const body = await request.json().catch(() => null) as {
    name?: string;
    phone?: string;
    comment?: string;
  } | null;

  if (!body?.phone?.trim()) {
    return NextResponse.json({ message: "Не указан телефон." }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.ORDER_EMAIL_TO || contacts.email;
  const from = process.env.ORDER_EMAIL_FROM || "ZABORIO <onboarding@resend.dev>";

  if (!apiKey) {
    return NextResponse.json({ message: "Отправка не настроена." }, { status: 500 });
  }

  const lines = [
    `Имя: ${body.name || "не указано"}`,
    `Телефон: ${body.phone}`,
    `Комментарий: ${body.comment || "—"}`,
  ].join("\n");

  const html = `
    <h2 style="font-family:Arial,sans-serif">Новая заявка с сайта ${contacts.companyName}</h2>
    <table style="font-family:Arial,sans-serif;font-size:14px;border-collapse:collapse">
      <tr><td style="padding:6px 12px;color:#555">Имя</td><td style="padding:6px 12px;font-weight:bold">${escapeHtml(body.name || "не указано")}</td></tr>
      <tr><td style="padding:6px 12px;color:#555">Телефон</td><td style="padding:6px 12px;font-weight:bold">${escapeHtml(body.phone)}</td></tr>
      <tr><td style="padding:6px 12px;color:#555">Комментарий</td><td style="padding:6px 12px">${escapeHtml(body.comment || "—")}</td></tr>
    </table>
  `;

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to,
      subject: `Заявка с сайта — ${body.name || body.phone}`,
      text: lines,
      html,
    }),
  });

  if (!res.ok) {
    const details = await res.text().catch(() => "");
    return NextResponse.json({ message: "Ошибка отправки.", details }, { status: 502 });
  }

  return NextResponse.json({ message: "Заявка отправлена." });
}
