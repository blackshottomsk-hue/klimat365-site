"use client";

import { useMemo, useState } from "react";
import { contacts } from "../../lib/contacts";

type FenceType = { label: string; price: number };
type GateType = "none" | "swing" | "sliding3" | "sliding4" | "sliding5";
type WicketType = "none" | "in_gate" | "near_gate" | "standalone";
type AutomationType = "none" | "rd400" | "rb1000";

type Segment = {
  id: string;
  type: FenceType;
  height: number;
  color: string;
  length: number;
  customPricePerMeter?: number;
  gate: GateType;
  wicket: WicketType;
  onlyWicket: boolean;
  automation: AutomationType;
  rack: boolean;
};

type EstimateLine = {
  label: string;
  unit: string;
  qty: number;
  price: number;
  amount: number;
};

const fenceTypes: FenceType[] = [
  { label: "Каркас без зашивки", price: 1650 },
  { label: "Профлист 0.40 мм односторонний", price: 2600 },
  { label: "Профлист 0.45 мм односторонний", price: 2900 },
  { label: "Профлист 0.40 мм двусторонний", price: 2800 },
  { label: "Профлист 0.45 мм двусторонний", price: 3150 },
  { label: "Штакетник 1 ряд, зазор 2 см", price: 3150 },
  { label: "Штакетник 1 ряд, зазор 3 см", price: 3050 },
  { label: "Штакетник 1 ряд, зазор 4 см", price: 3000 },
  { label: "Штакетник 2 ряда, шахматка 7 см", price: 3900 },
  { label: "Штакетник 2 ряда, шахматка 9 см", price: 3850 },
  { label: "3D Гиттер Эконом", price: 1950 },
  { label: "3D Гиттер Стандарт", price: 2100 },
  { label: "3D Гиттер Премиум", price: 2850 },
  { label: "Сетка рабица без протяжки", price: 1400 },
  { label: "Сетка рабица с протяжкой", price: 1600 },
];

const colors = [
  "Графит RAL 7024",
  "Чёрный RAL 9005",
  "Коричневый RAL 8017",
  "Зелёный RAL 6005",
  "Белый RAL 9010",
];

const gatePrices: Record<GateType, number> = {
  none: 0,
  swing: 25000,
  sliding3: 65000,
  sliding4: 70000,
  sliding5: 75000,
};

const wicketPrices: Record<WicketType, number> = {
  none: 0,
  in_gate: 14500,
  near_gate: 16500,
  standalone: 18500,
};

const automationPrices: Record<AutomationType, number> = {
  none: 0,
  rd400: 42000,
  rb1000: 70000,
};

const automationLabels: Record<AutomationType, string> = {
  none: "Без автоматики",
  rd400: "Nice RD400",
  rb1000: "Nice RB1000",
};

const gateLabels: Record<GateType, string> = {
  none: "Без ворот",
  swing: "Распашные ворота",
  sliding3: "Откатные 3 м",
  sliding4: "Откатные 4 м",
  sliding5: "Откатные 5 м",
};

const wicketLabels: Record<WicketType, string> = {
  none: "Без калитки",
  in_gate: "Калитка встроенная",
  near_gate: "Калитка рядом с воротами",
  standalone: "Калитка отдельно стоящая",
};

function fmt(value: number) {
  return value.toLocaleString("ru-RU");
}

function makeSegment(): Segment {
  return {
    id: crypto.randomUUID(),
    type: fenceTypes[1],
    height: 2.0,
    color: colors[0],
    length: 20,
    gate: "none",
    wicket: "none",
    onlyWicket: false,
    automation: "none",
    rack: false,
  };
}

function segmentLines(segment: Segment): EstimateLine[] {
  const lines: EstimateLine[] = [];
  const perMeter = segment.customPricePerMeter || segment.type.price;

  if (!segment.onlyWicket) {
    lines.push({
      label: `Забор (${segment.type.label}, h=${segment.height} м, ${segment.color})`,
      unit: "п.м.",
      qty: segment.length,
      price: perMeter,
      amount: Math.round(segment.length * perMeter),
    });
  }

  if (!segment.onlyWicket && segment.gate !== "none") {
    lines.push({
      label: gateLabels[segment.gate],
      unit: "шт.",
      qty: 1,
      price: gatePrices[segment.gate],
      amount: gatePrices[segment.gate],
    });
  }

  if (segment.wicket !== "none") {
    lines.push({
      label: wicketLabels[segment.wicket],
      unit: "шт.",
      qty: 1,
      price: wicketPrices[segment.wicket],
      amount: wicketPrices[segment.wicket],
    });
  }

  const hasSlidingGate =
    !segment.onlyWicket &&
    (segment.gate === "sliding3" ||
      segment.gate === "sliding4" ||
      segment.gate === "sliding5");

  if (hasSlidingGate && segment.automation !== "none") {
    lines.push({
      label: `Автоматика ${automationLabels[segment.automation]}`,
      unit: "компл.",
      qty: 1,
      price: automationPrices[segment.automation],
      amount: automationPrices[segment.automation],
    });
  }

  if (hasSlidingGate && segment.rack) {
    const rackPrice = segment.gate === "sliding5" ? 6500 : 5500;
    lines.push({
      label: "Зубчатая рейка",
      unit: "компл.",
      qty: 1,
      price: rackPrice,
      amount: rackPrice,
    });
  }

  return lines;
}

export default function FenceProposalCalculator() {
  const [customer, setCustomer] = useState("");
  const [customerPhone, setCustomerPhone] = useState("");
  const [siteAddress, setSiteAddress] = useState("");
  const [distance, setDistance] = useState(20);
  const [comment, setComment] = useState("");
  const [emailStatus, setEmailStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [emailMessage, setEmailMessage] = useState("");
  const [consent, setConsent] = useState(false);
  const [segments, setSegments] = useState<Segment[]>([makeSegment()]);

  const calc = useMemo(() => {
    const segmentRows = segments.map((segment, idx) => ({
      idx,
      lines: segmentLines(segment),
      title: segment.onlyWicket
        ? `Участок #${idx + 1}: только калитка`
        : `Участок #${idx + 1}: ${segment.type.label}, ${segment.length} м`,
      hasSliding:
        !segment.onlyWicket &&
        (segment.gate === "sliding3" ||
          segment.gate === "sliding4" ||
          segment.gate === "sliding5"),
      length: segment.onlyWicket ? 0 : segment.length,
    }));

    const subtotal = segmentRows
      .flatMap((x) => x.lines)
      .reduce((sum, line) => sum + line.amount, 0);

    const totalLength = segmentRows.reduce((sum, row) => sum + row.length, 0);
    const deliveries = Math.max(1, Math.ceil(totalLength / 70));
    const hasSliding = segmentRows.some((x) => x.hasSliding);
    const extraKm = Math.max(0, distance - 50);
    const deliveryPerTrip = 4000 + (hasSliding ? 1500 : 0) + extraKm * 70;
    const deliveryTotal = totalLength > 0 ? deliveryPerTrip * deliveries : 0;

    const total = subtotal + deliveryTotal;

    return {
      segmentRows,
      subtotal,
      totalLength,
      deliveries,
      deliveryPerTrip,
      deliveryTotal,
      total,
    };
  }, [segments, distance]);

  function updateSegment(id: string, patch: Partial<Segment>) {
    setSegments((prev) =>
      prev.map((segment) => (segment.id === id ? { ...segment, ...patch } : segment)),
    );
  }

  function duplicateSegment(id: string) {
    setSegments((prev) => {
      const target = prev.find((segment) => segment.id === id);
      if (!target) return prev;
      return [...prev, { ...target, id: crypto.randomUUID() }];
    });
  }

  function removeSegment(id: string) {
    setSegments((prev) => (prev.length > 1 ? prev.filter((segment) => segment.id !== id) : prev));
  }

  function buildProposalText() {
    const rows: string[] = [];
    rows.push("Заявка по расчету забора с сайта ZABORIO");
    rows.push(`Заказчик: ${customer || "—"}`);
    rows.push(`Телефон: ${customerPhone || "—"}`);
    rows.push(`Адрес: ${siteAddress || "—"}`);
    rows.push("");

    calc.segmentRows.forEach((row) => {
      rows.push(row.title);
      row.lines.forEach((line) => rows.push(`- ${line.label}: ${fmt(line.amount)} ₽`));
      rows.push("");
    });

    if (calc.deliveryTotal > 0) {
      rows.push(`Доставка: ${fmt(calc.deliveryTotal)} ₽`);
    }
    rows.push(`ИТОГО: ${fmt(calc.total)} ₽`);
    rows.push("");
    rows.push(`Исполнитель: ${contacts.companyName} (${contacts.legalName})`);
    rows.push(`Контакты: ${contacts.phone}, ${contacts.email}`);
    if (comment.trim()) rows.push(`Комментарий: ${comment.trim()}`);

    return rows.join("\n");
  }

  async function sendEmailOrder() {
    setEmailStatus("sending");
    setEmailMessage("");

    try {
      const response = await fetch("/api/send-calculator-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          orderText: buildProposalText(),
          customer,
          customerPhone,
          siteAddress,
          total: calc.total,
        }),
      });
      const result = (await response.json().catch(() => null)) as { message?: string } | null;

      if (!response.ok) {
        throw new Error(result?.message || "Не удалось отправить заявку.");
      }

      setEmailStatus("success");
      const message = result?.message || "Заявка отправлена на почту.";
      setEmailMessage(message);
      alert(message);
    } catch (error) {
      const message = error instanceof Error ? error.message : "Не удалось отправить заявку.";
      setEmailStatus("error");
      setEmailMessage(message);
      alert(message);
    }
  }

  function printProposal() {
    const printArea = document.querySelector(".kp-print");
    if (!printArea) {
      window.print();
      return;
    }

    window.sessionStorage.setItem("zaborio_print_proposal", printArea.outerHTML);
    const printWindow = window.open("/print-proposal", "_blank");
    if (!printWindow) window.location.href = "/print-proposal";
  }

  function sendWhatsAppOrder() {
    const phone = contacts.phone.replace(/\D/g, "");
    const message = `Здравствуйте! Отправляю расчет забора с сайта.\n\n${buildProposalText()}`;
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
  }

  return (
    <main className="mx-auto max-w-7xl px-4 py-10 print:px-0 print:py-0">
      <style jsx global>{`
        @media print {
          body * {
            visibility: hidden;
          }
          .kp-print,
          .kp-print * {
            visibility: visible;
          }
          .kp-print {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
          }
        }
      `}</style>

      <section className="rounded-2xl border border-white/15 bg-brand-dark p-6 print:hidden">
        <h1 className="text-3xl font-bold text-white">Калькулятор КП — ZABORIO</h1>
        <p className="mt-2 text-white/65">
          Расчёт сметы по участкам, генерация коммерческого предложения и отправка заявки.
        </p>

        <details className="mt-4 rounded-xl border border-white/15 bg-white/5">
          <summary className="cursor-pointer select-none px-4 py-3 text-sm font-semibold text-white/90 hover:text-white">
            📋 Как пользоваться калькулятором
          </summary>
          <div className="grid gap-4 px-4 pb-4 pt-2 text-sm text-white/75 md:grid-cols-2">
            <div>
              <p className="font-semibold text-white/90 mb-1">Шаг 1 — Данные заказчика</p>
              <p>Заполните телефон, имя заказчика и адрес объекта. Укажите удалённость в км от СПб — это влияет на стоимость доставки.</p>
            </div>
            <div>
              <p className="font-semibold text-white/90 mb-1">Шаг 2 — Участки забора</p>
              <p>Каждый участок — отдельная секция. Выберите тип материала, высоту (м), цвет и длину (п.м.). Если на участке нужны ворота или калитка — выберите их в том же блоке.</p>
            </div>
            <div>
              <p className="font-semibold text-white/90 mb-1">Шаг 3 — Несколько участков</p>
              <p>Если забор состоит из разных материалов (например, профлист + штакетник) — нажмите «+ Добавить участок» и настройте каждый отдельно. Итог суммируется автоматически.</p>
            </div>
            <div>
              <p className="font-semibold text-white/90 mb-1">Шаг 4 — Ворота и автоматика</p>
              <p>Для откатных ворот можно добавить автоматику (Nice RD400 / RB1000) и зубчатую рейку. Для распашных — только тип ворот. Калитку можно добавить к любому участку.</p>
            </div>
            <div>
              <p className="font-semibold text-white/90 mb-1">Шаг 5 — Результат</p>
              <p>Готовое КП отображается ниже в виде таблицы. Его можно распечатать / сохранить как PDF, отправить на почту или переслать в WhatsApp.</p>
            </div>
            <div>
              <p className="font-semibold text-white/90 mb-1">Подсказки</p>
              <ul className="grid gap-1">
                <li>• «Только калитка» — если на участке нет забора, только калитка</li>
                <li>• «Цена вручную» — для ввода индивидуальной цены за м.п.</li>
                <li>• Доставка рассчитывается автоматически по длине и удалённости</li>
              </ul>
            </div>
          </div>
        </details>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <input
            value={customerPhone}
            onChange={(e) => setCustomerPhone(e.target.value)}
            placeholder="Телефон заказчика"
            className="rounded-lg border border-white/20 bg-brand/40 px-3 py-2 text-white"
          />
          <input
            value={customer}
            onChange={(e) => setCustomer(e.target.value)}
            placeholder="Заказчик"
            className="rounded-lg border border-white/20 bg-brand/40 px-3 py-2 text-white"
          />
          <input
            value={siteAddress}
            onChange={(e) => setSiteAddress(e.target.value)}
            placeholder="Адрес объекта"
            className="rounded-lg border border-white/20 bg-brand/40 px-3 py-2 text-white md:col-span-2"
          />
          <div className="flex flex-col gap-1">
            <label className="text-xs text-white/60">Удалённость от КАД, км</label>
            <input
              type="number"
              value={distance}
              onChange={(e) => setDistance(Number(e.target.value))}
              className="rounded-lg border border-white/20 bg-brand/40 px-3 py-2 text-white"
            />
          </div>
        </div>

        <div className="mt-4 grid gap-4 md:grid-cols-3">
          <input
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Комментарий для КП"
            className="rounded-lg border border-white/20 bg-brand/40 px-3 py-2 text-white md:col-span-3"
          />
        </div>

        <div className="mt-6 space-y-4">
          {segments.map((segment, idx) => (
            <div key={segment.id} className="rounded-xl border border-white/15 bg-brand/35 p-4">
              <div className="mb-3 flex items-center justify-between">
                <h3 className="font-semibold text-white">Участок #{idx + 1}</h3>
                <div className="flex gap-2">
                  <button
                    onClick={() => duplicateSegment(segment.id)}
                    className="rounded-md border border-white/25 px-2 py-1 text-sm text-white/85"
                  >
                    Дублировать
                  </button>
                  <button
                    onClick={() => removeSegment(segment.id)}
                    className="rounded-md border border-white/25 px-2 py-1 text-sm text-white/85"
                  >
                    Удалить
                  </button>
                </div>
              </div>

              <div className="grid gap-3 md:grid-cols-4">
                <select
                  value={segment.type.label}
                  onChange={(e) => {
                    const found = fenceTypes.find((type) => type.label === e.target.value);
                    if (found) updateSegment(segment.id, { type: found });
                  }}
                  className="rounded-lg border border-white/20 bg-brand-dark px-3 py-2 text-white"
                  disabled={segment.onlyWicket}
                >
                  {fenceTypes.map((type) => (
                    <option key={type.label} value={type.label}>
                      {type.label} — {fmt(type.price)} ₽/м
                    </option>
                  ))}
                </select>
                <select
                  value={segment.height}
                  onChange={(e) => updateSegment(segment.id, { height: Number(e.target.value) })}
                  className="rounded-lg border border-white/20 bg-brand-dark px-3 py-2 text-white"
                  disabled={segment.onlyWicket}
                >
                  <option value={1.5}>Высота 1,5 м</option>
                  <option value={1.7}>Высота 1,7 м</option>
                  <option value={1.8}>Высота 1,8 м</option>
                  <option value={2.0}>Высота 2,0 м</option>
                  <option value={2.5}>Высота 2,5 м</option>
                  <option value={3.0}>Высота 3,0 м</option>
                </select>
                <select
                  value={segment.color}
                  onChange={(e) => updateSegment(segment.id, { color: e.target.value })}
                  className="rounded-lg border border-white/20 bg-brand-dark px-3 py-2 text-white"
                  disabled={segment.onlyWicket}
                >
                  {colors.map((color) => (
                    <option key={color}>{color}</option>
                  ))}
                </select>
                <div className="flex flex-col gap-1">
                  <label className="text-xs text-white/60">Длина забора, п.м.</label>
                  <input
                    type="number"
                    value={segment.length}
                    onChange={(e) => updateSegment(segment.id, { length: Number(e.target.value) })}
                    className="rounded-lg border border-white/20 bg-brand-dark px-3 py-2 text-white"
                    disabled={segment.onlyWicket}
                  />
                </div>
                <input
                  type="number"
                  value={segment.customPricePerMeter || ""}
                  onChange={(e) =>
                    updateSegment(segment.id, {
                      customPricePerMeter: e.target.value ? Number(e.target.value) : undefined,
                    })
                  }
                  className="rounded-lg border border-white/20 bg-brand-dark px-3 py-2 text-white"
                  disabled={segment.onlyWicket}
                  placeholder="Цена вручную, ₽/м"
                />
                <select
                  value={segment.gate}
                  onChange={(e) => updateSegment(segment.id, { gate: e.target.value as GateType })}
                  className="rounded-lg border border-white/20 bg-brand-dark px-3 py-2 text-white"
                  disabled={segment.onlyWicket}
                >
                  {Object.entries(gateLabels).map(([key, label]) => (
                    <option key={key} value={key}>
                      {label}
                    </option>
                  ))}
                </select>
                <select
                  value={segment.wicket}
                  onChange={(e) =>
                    updateSegment(segment.id, { wicket: e.target.value as WicketType })
                  }
                  className="rounded-lg border border-white/20 bg-brand-dark px-3 py-2 text-white"
                >
                  {Object.entries(wicketLabels).map(([key, label]) => (
                    <option key={key} value={key}>
                      {label}
                    </option>
                  ))}
                </select>
                <select
                  value={segment.automation}
                  onChange={(e) =>
                    updateSegment(segment.id, {
                      automation: e.target.value as AutomationType,
                    })
                  }
                  className="rounded-lg border border-white/20 bg-brand-dark px-3 py-2 text-white"
                  disabled={segment.gate === "none" || segment.gate === "swing" || segment.onlyWicket}
                >
                  {Object.entries(automationLabels).map(([key, label]) => (
                    <option key={key} value={key}>
                      {label}
                    </option>
                  ))}
                </select>
              </div>

              <div className="mt-3 flex flex-wrap gap-5 text-white/85">
                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={segment.onlyWicket}
                    onChange={(e) => updateSegment(segment.id, { onlyWicket: e.target.checked })}
                  />
                  Только калитка
                </label>
                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={segment.rack}
                    onChange={(e) => updateSegment(segment.id, { rack: e.target.checked })}
                    disabled={
                      segment.onlyWicket ||
                      (segment.gate !== "sliding3" &&
                        segment.gate !== "sliding4" &&
                        segment.gate !== "sliding5")
                    }
                  />
                  Зубчатая рейка
                </label>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-5 flex flex-wrap gap-3">
          <button
            onClick={() => setSegments((prev) => [...prev, makeSegment()])}
            className="rounded-lg bg-brand-light px-4 py-2 text-white transition hover:bg-brand"
          >
            + Добавить участок
          </button>
          <button onClick={printProposal} className="rounded-lg bg-white px-4 py-2 text-black">
            Печать / PDF
          </button>
          <button
            onClick={sendEmailOrder}
            disabled={emailStatus === "sending" || !consent}
            className="rounded-lg bg-white px-4 py-2 text-black disabled:cursor-not-allowed disabled:opacity-50"
            title={!consent ? "Подтвердите согласие на обработку данных" : undefined}
          >
            {emailStatus === "sending" ? "Отправляем..." : "Отправить заявку на почту"}
          </button>
          <button
            onClick={sendWhatsAppOrder}
            disabled={!consent}
            className="rounded-lg bg-green-500 px-4 py-2 text-white disabled:cursor-not-allowed disabled:opacity-50"
            title={!consent ? "Подтвердите согласие на обработку данных" : undefined}
          >
            Отправить в WhatsApp
          </button>
        </div>

        <label className="mt-4 flex items-start gap-3 cursor-pointer">
          <input
            type="checkbox"
            checked={consent}
            onChange={(e) => setConsent(e.target.checked)}
            className="mt-0.5 h-4 w-4 shrink-0 accent-brand"
          />
          <span className="text-sm text-white/70">
            Я согласен(-на) на обработку персональных данных в соответствии с{" "}
            <a
              href="/politika-konfidencialnosti"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-white/90 hover:text-white"
            >
              политикой конфиденциальности
            </a>
          </span>
        </label>

        {emailMessage ? (
          <p
            className={`mt-3 text-sm font-medium ${
              emailStatus === "success" ? "text-green-200" : "text-red-200"
            }`}
          >
            {emailMessage}
          </p>
        ) : null}
      </section>

      <section className="kp-print mt-6 rounded-2xl border border-border bg-white p-6 text-text-dark">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b pb-4">
          <div>
            <h2 className="text-2xl font-bold">{contacts.companyName}</h2>
            <p className="text-sm text-text-secondary">Коммерческое предложение</p>
            <p className="text-sm text-text-secondary">{contacts.legalName}</p>
          </div>
          <div className="text-right text-sm">
            <div>{new Date().toLocaleDateString("ru-RU")}</div>
            <div>{contacts.phone}</div>
            <div>{contacts.email}</div>
          </div>
        </div>

        <div className="mt-4 grid gap-2 text-sm md:grid-cols-3">
          <div>
            <strong>Заказчик:</strong> {customer || "—"}
          </div>
          <div>
            <strong>Телефон:</strong> {customerPhone || "—"}
          </div>
          <div>
            <strong>Адрес:</strong> {siteAddress || "—"}
          </div>
        </div>

        <div className="mt-6 overflow-x-auto">
          <table className="w-full min-w-[760px] border-collapse text-sm">
            <thead>
              <tr className="bg-background-light">
                <th className="border px-2 py-2 text-left">№</th>
                <th className="border px-2 py-2 text-left">Позиция</th>
                <th className="border px-2 py-2 text-left">Ед.</th>
                <th className="border px-2 py-2 text-right">Кол-во</th>
                <th className="border px-2 py-2 text-right">Цена, ₽</th>
                <th className="border px-2 py-2 text-right">Сумма, ₽</th>
              </tr>
            </thead>
            <tbody>
              {calc.segmentRows.map((row) => (
                <FragmentRow key={row.idx} row={row} />
              ))}

              {calc.deliveryTotal > 0 && (
                <tr>
                  <td className="border px-2 py-2">—</td>
                  <td className="border px-2 py-2">Доставка ({calc.deliveries} рейс.)</td>
                  <td className="border px-2 py-2">усл.</td>
                  <td className="border px-2 py-2 text-right">1</td>
                  <td className="border px-2 py-2 text-right">{fmt(calc.deliveryPerTrip)}</td>
                  <td className="border px-2 py-2 text-right">{fmt(calc.deliveryTotal)}</td>
                </tr>
              )}

            </tbody>
            <tfoot>
              <tr className="bg-background-light font-semibold">
                <td className="border px-2 py-2" colSpan={5}>
                  ИТОГО
                </td>
                <td className="border px-2 py-2 text-right">{fmt(calc.total)}</td>
              </tr>
            </tfoot>
          </table>
        </div>

        {comment.trim() && (
          <div className="mt-4 rounded-lg border border-border bg-background-light p-3 text-sm">
            <strong>Комментарий:</strong> {comment}
          </div>
        )}
      </section>
    </main>
  );
}

function FragmentRow({
  row,
}: {
  row: { idx: number; title: string; lines: EstimateLine[] };
}) {
  return (
    <>
      <tr className="bg-background-light">
        <td className="border px-2 py-2 font-semibold" colSpan={6}>
          {row.title}
        </td>
      </tr>
      {row.lines.map((line, i) => (
        <tr key={`${row.idx}-${i}`}>
          <td className="border px-2 py-2">{i + 1}</td>
          <td className="border px-2 py-2">{line.label}</td>
          <td className="border px-2 py-2">{line.unit}</td>
          <td className="border px-2 py-2 text-right">{fmt(line.qty)}</td>
          <td className="border px-2 py-2 text-right">{fmt(line.price)}</td>
          <td className="border px-2 py-2 text-right">{fmt(line.amount)}</td>
        </tr>
      ))}
    </>
  );
}

