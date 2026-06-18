"use client";

import { useMemo, useState } from "react";
import Button from "../ui/Button";

type FenceOption = {
  id: string;
  label: string;
  pricePerMeter: number;
};
type HeightOption = { id: string; label: string; multiplier: number };
type ColorOption = { id: string; label: string; extraPerMeter: number };
type GateOption = { id: string; label: string; price: number };
type AutomationOption = { id: string; label: string; price: number; forGate: "none" | "swing" | "sliding" | "all" };
type WicketOption = { id: string; label: string; price: number };

const fenceOptions: FenceOption[] = [
  { id: "evroshtaketnik", label: "Евроштакетник", pricePerMeter: 3200 },
  { id: "profnastil", label: "Профнастил", pricePerMeter: 2700 },
  { id: "setka-3d", label: "3D сетка", pricePerMeter: 2100 },
  { id: "rabica", label: "Сетка рабица", pricePerMeter: 1600 },
];
const heightOptions: HeightOption[] = [
  { id: "1_5", label: "1.5 м", multiplier: 0.9 },
  { id: "1_8", label: "1.8 м", multiplier: 1 },
  { id: "2_0", label: "2.0 м", multiplier: 1.12 },
  { id: "2_2", label: "2.2 м", multiplier: 1.25 },
];
const colorOptions: ColorOption[] = [
  { id: "r7024", label: "Графит RAL 7024", extraPerMeter: 0 },
  { id: "r8017", label: "Коричневый RAL 8017", extraPerMeter: 0 },
  { id: "r6005", label: "Зеленый RAL 6005", extraPerMeter: 0 },
  { id: "r9005", label: "Черный RAL 9005", extraPerMeter: 120 },
  { id: "custom", label: "Нестандартный цвет", extraPerMeter: 240 },
];
const gateOptions: GateOption[] = [
  { id: "none", label: "Без ворот", price: 0 },
  { id: "swing", label: "Распашные ворота", price: 35000 },
  { id: "sliding", label: "Откатные ворота", price: 75000 },
];
const automationOptions: AutomationOption[] = [
  { id: "none", label: "Без автоматики", price: 0, forGate: "none" },
  { id: "swing_basic", label: "Автоматика для распашных", price: 32000, forGate: "swing" },
  { id: "sliding_basic", label: "Автоматика для откатных", price: 42000, forGate: "sliding" },
  { id: "premium", label: "Автоматика премиум", price: 65000, forGate: "all" },
];
const wicketOptions: WicketOption[] = [
  { id: "none", label: "Без калитки", price: 0 },
  { id: "metal", label: "Калитка металлическая", price: 16500 },
  { id: "reinforced", label: "Калитка усиленная", price: 22500 },
];

type Side = {
  id: string;
  length: number;
};

function makeSide(): Side {
  return { id: crypto.randomUUID(), length: 10 };
}

function formatRub(value: number) {
  return `${value.toLocaleString("ru-RU")} ₽`;
}

export default function Calculator() {
  const [fenceType, setFenceType] = useState<FenceOption>(fenceOptions[0]);
  const [height, setHeight] = useState<HeightOption>(heightOptions[1]);
  const [color, setColor] = useState<ColorOption>(colorOptions[0]);
  const [gate, setGate] = useState<GateOption>(gateOptions[0]);
  const [automation, setAutomation] = useState<AutomationOption>(automationOptions[0]);
  const [wicket, setWicket] = useState<WicketOption>(wicketOptions[0]);
  const [deliveryKm, setDeliveryKm] = useState(20);
  const [sides, setSides] = useState<Side[]>([makeSide()]);
  const [copied, setCopied] = useState(false);

  const totalLength = useMemo(
    () => sides.reduce((sum, side) => sum + Math.max(0, Number(side.length) || 0), 0),
    [sides],
  );
  const fencePerMeter = Math.round(fenceType.pricePerMeter * height.multiplier + color.extraPerMeter);
  const fenceTotal = totalLength * fencePerMeter;
  const deliveryBase = 4000;
  const deliveryExtra = Math.max(0, deliveryKm - 30) * 70;
  const deliveryPrice = deliveryBase + deliveryExtra;
  const totalPrice = fenceTotal + gate.price + automation.price + wicket.price + deliveryPrice;
  const estimateRows = [
    { label: "Забор", value: fenceTotal },
    { label: "Ворота", value: gate.price },
    { label: "Автоматика", value: automation.price },
    { label: "Калитка", value: wicket.price },
    { label: "Доставка", value: deliveryPrice },
  ];

  function updateSide(id: string, value: number) {
    setSides((prev) => prev.map((side) => (side.id === id ? { ...side, length: value } : side)));
  }

  function addSide() {
    setSides((prev) => [...prev, makeSide()]);
  }

  function removeSide(id: string) {
    setSides((prev) => (prev.length > 1 ? prev.filter((side) => side.id !== id) : prev));
  }

  async function copyEstimate() {
    const sideRows = sides.map((side, index) => `Сторона ${index + 1}: ${side.length} м`).join("\n");
    const text = [
      "Заявка на расчет забора",
      `Тип забора: ${fenceType.label}`,
      `Высота: ${height.label}`,
      `Цвет: ${color.label}`,
      `Ворота: ${gate.label}`,
      `Автоматика: ${automation.label}`,
      `Калитка: ${wicket.label}`,
      `Доставка: ${deliveryKm} км (${formatRub(deliveryPrice)})`,
      sideRows,
      `Общая длина: ${totalLength} м`,
      `Предварительная стоимость: ${formatRub(totalPrice)}`,
      "Расчет предварительный, точная смета после замера участка.",
    ].join("\n");

    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  }

  function handleGateChange(gateId: string) {
    const selected = gateOptions.find((item) => item.id === gateId);
    if (!selected) return;
    setGate(selected);

    const isAutomationValid =
      automation.forGate === "all" ||
      automation.forGate === "none" ||
      automation.forGate === selected.id;

    if (!isAutomationValid || selected.id === "none") {
      setAutomation(automationOptions[0]);
    }
  }

  const availableAutomation = automationOptions.filter(
    (item) => item.forGate === "none" || item.forGate === "all" || item.forGate === gate.id,
  );

  return (
    <section className="bg-brand-dark py-16 text-white sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white sm:text-4xl">Стоимость забора</h2>
        <p className="mt-4 max-w-3xl text-white/80">
          Примитивный расчет для понимания бюджета. Добавьте стороны участка,
          выберите тип забора и получите ориентир по стоимости.
        </p>
        <div className="mt-8 rounded-2xl border border-white/15 bg-brand/25 p-6 backdrop-blur-sm lg:p-8">
          <div className="mb-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-xl border border-white/15 bg-white/5 px-4 py-3">
              <p className="text-xs uppercase tracking-wide text-white/65">Тип</p>
              <p className="mt-1 font-semibold text-white">{fenceType.label}</p>
            </div>
            <div className="rounded-xl border border-white/15 bg-white/5 px-4 py-3">
              <p className="text-xs uppercase tracking-wide text-white/65">Периметр</p>
              <p className="mt-1 font-semibold text-white">{totalLength} м</p>
            </div>
            <div className="rounded-xl border border-white/15 bg-white/5 px-4 py-3">
              <p className="text-xs uppercase tracking-wide text-white/65">Цена за метр</p>
              <p className="mt-1 font-semibold text-white">{formatRub(fencePerMeter)}</p>
            </div>
            <div className="rounded-xl border border-white/15 bg-white/5 px-4 py-3">
              <p className="text-xs uppercase tracking-wide text-white/65">Итого</p>
              <p className="mt-1 font-semibold text-brand-accent">{formatRub(totalPrice)}</p>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <select
              value={fenceType.id}
              onChange={(e) => {
                const selected = fenceOptions.find((option) => option.id === e.target.value);
                if (selected) setFenceType(selected);
              }}
              className="rounded-xl border border-white/20 bg-brand-dark px-4 py-3 text-sm text-white"
            >
              {fenceOptions.map((option) => (
                <option key={option.id} value={option.id}>
                  {option.label} - {formatRub(option.pricePerMeter)}/м
                </option>
              ))}
            </select>
            <select
              value={height.id}
              onChange={(e) => {
                const selected = heightOptions.find((option) => option.id === e.target.value);
                if (selected) setHeight(selected);
              }}
              className="rounded-xl border border-white/20 bg-brand-dark px-4 py-3 text-sm text-white"
            >
              {heightOptions.map((option) => (
                <option key={option.id} value={option.id}>
                  Высота: {option.label}
                </option>
              ))}
            </select>
            <select
              value={color.id}
              onChange={(e) => {
                const selected = colorOptions.find((option) => option.id === e.target.value);
                if (selected) setColor(selected);
              }}
              className="rounded-xl border border-white/20 bg-brand-dark px-4 py-3 text-sm text-white"
            >
              {colorOptions.map((option) => (
                <option key={option.id} value={option.id}>
                  Цвет: {option.label}
                  {option.extraPerMeter > 0 ? ` (+${formatRub(option.extraPerMeter)}/м)` : ""}
                </option>
              ))}
            </select>
            <select
              value={gate.id}
              onChange={(e) => handleGateChange(e.target.value)}
              className="rounded-xl border border-white/20 bg-brand-dark px-4 py-3 text-sm text-white"
            >
              {gateOptions.map((option) => (
                <option key={option.id} value={option.id}>
                  {option.label}
                  {option.price > 0 ? ` (+${formatRub(option.price)})` : ""}
                </option>
              ))}
            </select>
            <select
              value={automation.id}
              onChange={(e) => {
                const selected = automationOptions.find((option) => option.id === e.target.value);
                if (selected) setAutomation(selected);
              }}
              className="rounded-xl border border-white/20 bg-brand-dark px-4 py-3 text-sm text-white"
              disabled={gate.id === "none"}
            >
              {availableAutomation.map((option) => (
                <option key={option.id} value={option.id}>
                  {option.label}
                  {option.price > 0 ? ` (+${formatRub(option.price)})` : ""}
                </option>
              ))}
            </select>
            <select
              value={wicket.id}
              onChange={(e) => {
                const selected = wicketOptions.find((option) => option.id === e.target.value);
                if (selected) setWicket(selected);
              }}
              className="rounded-xl border border-white/20 bg-brand-dark px-4 py-3 text-sm text-white"
            >
              {wicketOptions.map((option) => (
                <option key={option.id} value={option.id}>
                  {option.label}
                  {option.price > 0 ? ` (+${formatRub(option.price)})` : ""}
                </option>
              ))}
            </select>
            <label className="rounded-xl border border-white/20 bg-brand-dark px-4 py-3 text-sm text-white">
              Доставка (км)
              <input
                type="number"
                min={0}
                value={deliveryKm}
                onChange={(e) => setDeliveryKm(Number(e.target.value) || 0)}
                className="mt-2 w-full bg-transparent text-white outline-none"
              />
            </label>
            <div className="rounded-xl border border-white/20 bg-brand-dark/80 px-4 py-3 text-sm text-white/85">
              Цена за 1 м: <span className="font-semibold text-white">{formatRub(fencePerMeter)}</span>
            </div>
          </div>

          <div className="mt-5 space-y-3">
            {sides.map((side, index) => (
              <div key={side.id} className="grid gap-3 md:grid-cols-[1fr_auto] md:items-center">
                <label className="text-sm text-white/80">
                  Сторона {index + 1}
                  <input
                    type="number"
                    min={0}
                    value={side.length}
                    onChange={(e) => updateSide(side.id, Number(e.target.value))}
                    className="mt-2 w-full rounded-xl border border-white/20 bg-brand-dark px-4 py-3 text-sm text-white placeholder:text-white/50"
                    placeholder="Длина (м)"
                  />
                </label>
                <button
                  type="button"
                  onClick={() => removeSide(side.id)}
                  className="rounded-xl border border-white/30 px-4 py-3 text-sm text-white/85 transition hover:bg-white/10"
                >
                  Удалить
                </button>
              </div>
            ))}
          </div>

          <div className="mt-4">
            <button
              type="button"
              onClick={addSide}
              className="rounded-xl border border-white/30 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              + Добавить сторону
            </button>
          </div>

          <div className="mt-6 grid gap-4 lg:grid-cols-[1.2fr_1fr]">
            <div className="rounded-xl border border-white/20 bg-white/5 p-5">
              <p className="text-sm font-semibold text-white">Структура предварительного расчета</p>
              <div className="mt-4 space-y-2 text-sm">
                {estimateRows.map((row) => (
                  <div key={row.label} className="flex items-center justify-between border-b border-white/10 pb-2">
                    <span className="text-white/80">{row.label}</span>
                    <span className="font-semibold text-white">{formatRub(row.value)}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col justify-between rounded-xl border border-brand/35 bg-brand/15 p-5">
              <div>
                <p className="text-lg text-white">
                  Общая длина: <span className="font-bold text-brand-accent">{totalLength} м</span>
                </p>
                <p className="mt-2 text-lg text-white">
                  Предварительная стоимость:{" "}
                  <span className="font-bold text-brand-accent">{formatRub(totalPrice)}</span>
                </p>
              </div>
              <p className="mt-4 text-sm text-white/75">
                * Расчет предварительный. Точная смета формируется после выезда и замера участка.
              </p>
            </div>
          </div>

          <div className="mt-4 flex flex-wrap gap-3">
            <Button className="px-6 py-3">Оставить заявку на точный расчет</Button>
            <button
              type="button"
              onClick={copyEstimate}
              className="rounded-xl border border-white/35 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              {copied ? "Скопировано" : "Скопировать расчет"}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
