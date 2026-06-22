"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

type RoomType = "apartment" | "house" | "office" | "server";
type BlockType = "wall-standard" | "wall-inverter" | "cassette" | "duct";
type ServiceType = "install" | "service" | "repair";

const ROOM_TYPES: { id: RoomType; label: string; icon: string }[] = [
  { id: "apartment", label: "Квартира", icon: "🏠" },
  { id: "house", label: "Частный дом", icon: "🏡" },
  { id: "office", label: "Офис", icon: "🏢" },
  { id: "server", label: "Серверная", icon: "🖥️" },
];

const BLOCK_TYPES: { id: BlockType; label: string; desc: string; extra: number }[] = [
  { id: "wall-standard", label: "Настенный стандарт", desc: "Обычный On/Off", extra: 0 },
  { id: "wall-inverter", label: "Настенный инвертор", desc: "Экономичный, тихий", extra: 2000 },
  { id: "cassette", label: "Кассетный", desc: "Встраивается в потолок", extra: 7000 },
  { id: "duct", label: "Канальный", desc: "Скрытый монтаж", extra: 12000 },
];

const SERVICE_TYPES: { id: ServiceType; label: string; icon: string }[] = [
  { id: "install", label: "Монтаж", icon: "🔧" },
  { id: "service", label: "Обслуживание", icon: "🧹" },
  { id: "repair", label: "Ремонт", icon: "⚙️" },
];

function getBasePrice(area: number, service: ServiceType): number {
  if (service === "service") {
    if (area <= 25) return 2500;
    if (area <= 40) return 3500;
    return 4500;
  }
  if (service === "repair") {
    return 1500;
  }
  if (area <= 20) return 17000;
  if (area <= 30) return 19000;
  if (area <= 45) return 22000;
  if (area <= 60) return 26000;
  return 30000;
}

function getRecommendedPower(area: number): string {
  if (area <= 20) return "2,0–2,5 кВт (серия «07»)";
  if (area <= 30) return "2,5–3,5 кВт (серия «09»–«12»)";
  if (area <= 45) return "3,5–5,0 кВт (серия «12»–«18»)";
  if (area <= 60) return "5,0–6,0 кВт (серия «18»–«24»)";
  return "7,0+ кВт (серия «24»+)";
}

export default function KalkulyatorPage() {
  const [step, setStep] = useState(1);
  const [service, setService] = useState<ServiceType>("install");
  const [room, setRoom] = useState<RoomType>("apartment");
  const [area, setArea] = useState(30);
  const [trass, setTrass] = useState(3);
  const [blockType, setBlockType] = useState<BlockType>("wall-inverter");
  const [options, setOptions] = useState({
    cableCanal: false,
    highAltitude: false,
    dismount: false,
    protection: false,
    interFloor: false,
  });
  const [total, setTotal] = useState(0);
  const [animating, setAnimating] = useState(false);

  const toggleOption = (key: keyof typeof options) =>
    setOptions((prev) => ({ ...prev, [key]: !prev[key] }));

  useEffect(() => {
    let price = getBasePrice(area, service);
    if (service === "install") {
      const block = BLOCK_TYPES.find((b) => b.id === blockType);
      price += block?.extra ?? 0;
      if (trass > 3) price += (trass - 3) * 800;
      if (options.cableCanal) price += trass * 300;
      if (options.highAltitude) price += 3000;
      if (options.dismount) price += 3500;
      if (options.protection) price += 2500;
      if (options.interFloor) price += 3500;
    }
    setAnimating(true);
    setTimeout(() => { setTotal(price); setAnimating(false); }, 150);
  }, [service, area, trass, blockType, options]);

  const fmt = (n: number) => n.toLocaleString("ru-RU");

  const nextStep = () => setStep((s) => Math.min(s + 1, 4));
  const prevStep = () => setStep((s) => Math.max(s - 1, 1));

  return (
    <main className="min-h-screen bg-background-light">
      <section className="bg-brand-dark py-14">
        <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8">
          <nav className="mb-4 text-sm text-white/50">
            <Link href="/" className="hover:text-white">Главная</Link>
            <span className="mx-2">/</span>
            <span className="text-white/80">Калькулятор</span>
          </nav>
          <h1 className="text-3xl font-bold text-white sm:text-4xl">
            Калькулятор стоимости
          </h1>
          <p className="mt-3 max-w-2xl text-white/70">
            Рассчитайте предварительную стоимость за 4 шага. Точная цена — после бесплатного выезда мастера.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-8xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2">
            {/* Progress */}
            <div className="mb-8">
              <div className="flex items-center gap-2">
                {[1, 2, 3, 4].map((s) => (
                  <div key={s} className="flex items-center gap-2">
                    <button
                      onClick={() => s < step && setStep(s)}
                      className={`flex h-9 w-9 items-center justify-center rounded-full text-sm font-bold transition-all ${
                        s <= step
                          ? "bg-brand text-white shadow-md"
                          : "bg-white border border-border text-text-secondary"
                      } ${s < step ? "cursor-pointer hover:opacity-80" : "cursor-default"}`}
                    >
                      {s < step ? "✓" : s}
                    </button>
                    {s < 4 && (
                      <div className={`h-1 w-12 rounded-full transition-all sm:w-20 ${s < step ? "bg-brand" : "bg-border"}`} />
                    )}
                  </div>
                ))}
              </div>
              <div className="mt-3 flex gap-2 text-xs text-text-secondary">
                <span className="w-9 text-center">Услуга</span>
                <span className="w-12 sm:w-20" />
                <span className="w-9 text-center">Объект</span>
                <span className="w-12 sm:w-20" />
                <span className="w-9 text-center">Детали</span>
                <span className="w-12 sm:w-20" />
                <span className="w-9 text-center">Итог</span>
              </div>
            </div>

            {/* Step 1: Service type */}
            {step === 1 && (
              <div className="rounded-2xl border border-border bg-white p-6 shadow-card">
                <h2 className="text-xl font-bold text-text-dark">Что нужно сделать?</h2>
                <div className="mt-6 grid gap-3 sm:grid-cols-3">
                  {SERVICE_TYPES.map((s) => (
                    <button
                      key={s.id}
                      onClick={() => setService(s.id)}
                      className={`rounded-xl border-2 p-5 text-left transition-all card-hover ${
                        service === s.id
                          ? "border-brand bg-brand/5 shadow-md"
                          : "border-border hover:border-brand/40"
                      }`}
                    >
                      <div className="text-3xl">{s.icon}</div>
                      <div className="mt-3 font-semibold text-text-dark">{s.label}</div>
                    </button>
                  ))}
                </div>
                <button
                  onClick={nextStep}
                  className="btn-glow mt-8 rounded-xl bg-brand px-8 py-3 font-semibold text-white"
                >
                  Далее →
                </button>
              </div>
            )}

            {/* Step 2: Room + area */}
            {step === 2 && (
              <div className="rounded-2xl border border-border bg-white p-6 shadow-card">
                <h2 className="text-xl font-bold text-text-dark">Тип помещения и площадь</h2>
                <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
                  {ROOM_TYPES.map((r) => (
                    <button
                      key={r.id}
                      onClick={() => setRoom(r.id)}
                      className={`rounded-xl border-2 p-4 text-center transition-all card-hover ${
                        room === r.id
                          ? "border-brand bg-brand/5 shadow-md"
                          : "border-border hover:border-brand/40"
                      }`}
                    >
                      <div className="text-2xl">{r.icon}</div>
                      <div className="mt-2 text-sm font-semibold text-text-dark">{r.label}</div>
                    </button>
                  ))}
                </div>

                <div className="mt-8">
                  <div className="flex items-center justify-between">
                    <label className="font-semibold text-text-dark">Площадь помещения</label>
                    <span className="text-2xl font-bold text-brand">{area} м²</span>
                  </div>
                  <input
                    type="range" min={10} max={150} step={5}
                    value={area}
                    onChange={(e) => setArea(Number(e.target.value))}
                    className="mt-3 w-full"
                  />
                  <div className="mt-1 flex justify-between text-xs text-text-secondary">
                    <span>10 м²</span><span>150 м²</span>
                  </div>
                  {service === "install" && (
                    <div className="mt-4 rounded-xl bg-background-light p-4">
                      <p className="text-sm text-text-secondary">
                        💡 <strong>Рекомендуемая мощность:</strong> {getRecommendedPower(area)}
                      </p>
                    </div>
                  )}
                </div>

                <div className="mt-6 flex gap-3">
                  <button onClick={prevStep} className="rounded-xl border border-border px-6 py-3 font-semibold text-text-dark hover:border-brand hover:text-brand transition">
                    ← Назад
                  </button>
                  <button onClick={nextStep} className="btn-glow rounded-xl bg-brand px-8 py-3 font-semibold text-white">
                    Далее →
                  </button>
                </div>
              </div>
            )}

            {/* Step 3: Details */}
            {step === 3 && (
              <div className="rounded-2xl border border-border bg-white p-6 shadow-card">
                <h2 className="text-xl font-bold text-text-dark">Детали и опции</h2>

                {service === "install" && (
                  <>
                    <div className="mt-6">
                      <p className="font-semibold text-text-dark">Тип внутреннего блока</p>
                      <div className="mt-3 grid gap-3 sm:grid-cols-2">
                        {BLOCK_TYPES.map((b) => (
                          <button
                            key={b.id}
                            onClick={() => setBlockType(b.id)}
                            className={`rounded-xl border-2 p-4 text-left transition-all card-hover ${
                              blockType === b.id
                                ? "border-brand bg-brand/5"
                                : "border-border hover:border-brand/40"
                            }`}
                          >
                            <div className="font-semibold text-text-dark">{b.label}</div>
                            <div className="mt-1 text-sm text-text-secondary">{b.desc}</div>
                            {b.extra > 0 && (
                              <div className="mt-2 text-sm font-semibold text-brand">+{fmt(b.extra)} ₽</div>
                            )}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="mt-8">
                      <div className="flex items-center justify-between">
                        <label className="font-semibold text-text-dark">Длина трассы</label>
                        <span className="text-2xl font-bold text-brand">{trass} м</span>
                      </div>
                      <input
                        type="range" min={1} max={20} step={1}
                        value={trass}
                        onChange={(e) => setTrass(Number(e.target.value))}
                        className="mt-3 w-full"
                      />
                      <div className="mt-1 flex justify-between text-xs text-text-secondary">
                        <span>1 м</span><span>20 м</span>
                      </div>
                      {trass > 3 && (
                        <p className="mt-2 text-sm text-text-secondary">
                          💡 В базовую стоимость входит 3 м трассы. Доплата за {trass - 3} м: +{fmt((trass - 3) * 800)} ₽
                        </p>
                      )}
                    </div>

                    <div className="mt-8">
                      <p className="font-semibold text-text-dark">Дополнительные работы</p>
                      <div className="mt-3 space-y-3">
                        {[
                          { key: "cableCanal" as const, label: "Кабель-канал для трассы", price: `+${fmt(trass * 300)} ₽` },
                          { key: "highAltitude" as const, label: "Высотные работы (верхние этажи)", price: "+3 000 ₽" },
                          { key: "dismount" as const, label: "Демонтаж старого кондиционера", price: "+3 500 ₽" },
                          { key: "protection" as const, label: "Защитный кожух наружного блока", price: "+2 500 ₽" },
                          { key: "interFloor" as const, label: "Межэтажный проход (сквозь перекрытие)", price: "+3 500 ₽" },
                        ].map((opt) => (
                          <label
                            key={opt.key}
                            className={`flex cursor-pointer items-center justify-between rounded-xl border-2 p-4 transition-all ${
                              options[opt.key] ? "border-brand bg-brand/5" : "border-border hover:border-brand/30"
                            }`}
                          >
                            <div className="flex items-center gap-3">
                              <div className={`flex h-5 w-5 items-center justify-center rounded border-2 transition-all ${
                                options[opt.key] ? "border-brand bg-brand" : "border-border"
                              }`}>
                                {options[opt.key] && <span className="text-xs text-white font-bold">✓</span>}
                              </div>
                              <span className="text-sm text-text-dark">{opt.label}</span>
                            </div>
                            <span className="text-sm font-semibold text-brand">{opt.price}</span>
                            <input type="checkbox" className="sr-only" checked={options[opt.key]} onChange={() => toggleOption(opt.key)} />
                          </label>
                        ))}
                      </div>
                    </div>
                  </>
                )}

                {service === "service" && (
                  <div className="mt-6 rounded-xl bg-background-light p-5">
                    <p className="text-text-secondary">
                      Стоимость технического обслуживания зависит от площади обслуживаемого помещения и типа оборудования. Мастер уточнит детали при выезде.
                    </p>
                    <ul className="mt-4 space-y-2 text-sm text-text-secondary">
                      <li className="flex gap-2"><span className="text-brand">✓</span> Чистка фильтров и теплообменника</li>
                      <li className="flex gap-2"><span className="text-brand">✓</span> Промывка дренажной системы</li>
                      <li className="flex gap-2"><span className="text-brand">✓</span> Проверка давления фреона</li>
                      <li className="flex gap-2"><span className="text-brand">✓</span> Дезинфекция внутреннего блока</li>
                    </ul>
                  </div>
                )}

                {service === "repair" && (
                  <div className="mt-6 rounded-xl bg-background-light p-5">
                    <p className="text-text-secondary">
                      Выезд мастера и диагностика — 1 500 ₽. Стоимость засчитывается в цену ремонта. Точную стоимость ремонта можно определить только после диагностики.
                    </p>
                    <ul className="mt-4 space-y-2 text-sm text-text-secondary">
                      <li className="flex gap-2"><span className="text-brand">✓</span> Не охлаждает / не греет</li>
                      <li className="flex gap-2"><span className="text-brand">✓</span> Течёт вода из внутреннего блока</li>
                      <li className="flex gap-2"><span className="text-brand">✓</span> Шумит, вибрирует</li>
                      <li className="flex gap-2"><span className="text-brand">✓</span> Не включается</li>
                      <li className="flex gap-2"><span className="text-brand">✓</span> Ошибки на дисплее</li>
                    </ul>
                  </div>
                )}

                <div className="mt-6 flex gap-3">
                  <button onClick={prevStep} className="rounded-xl border border-border px-6 py-3 font-semibold text-text-dark hover:border-brand hover:text-brand transition">
                    ← Назад
                  </button>
                  <button onClick={nextStep} className="btn-glow rounded-xl bg-brand px-8 py-3 font-semibold text-white">
                    Посмотреть итог →
                  </button>
                </div>
              </div>
            )}

            {/* Step 4: Result */}
            {step === 4 && (
              <div className="rounded-2xl border border-border bg-white p-6 shadow-card">
                <h2 className="text-xl font-bold text-text-dark">Предварительный расчёт</h2>
                <p className="mt-2 text-sm text-text-secondary">
                  Точная стоимость определяется после бесплатного выезда мастера.
                </p>

                <div className="mt-8 rounded-2xl bg-brand-dark p-6 text-white">
                  <p className="text-sm text-white/60">Итоговая стоимость</p>
                  <p className={`mt-1 text-5xl font-bold transition-all duration-300 ${animating ? "opacity-0 translate-y-2" : "opacity-100"}`}>
                    от {fmt(total)} ₽
                  </p>
                  <p className="mt-2 text-sm text-white/60">
                    {service === "install" && "Монтаж под ключ · гарантия 2 года"}
                    {service === "service" && "Техническое обслуживание · выезд включён"}
                    {service === "repair" && "Диагностика · оплата после согласования"}
                  </p>
                </div>

                <div className="mt-6 space-y-2">
                  <h3 className="font-semibold text-text-dark">Что входит в стоимость:</h3>
                  {service === "install" && (
                    <ul className="space-y-1 text-sm text-text-secondary">
                      <li className="flex gap-2"><span className="text-brand">✓</span> Монтаж внутреннего и наружного блока</li>
                      <li className="flex gap-2"><span className="text-brand">✓</span> Медная трасса {trass} м с теплоизоляцией</li>
                      <li className="flex gap-2"><span className="text-brand">✓</span> Все расходные материалы и крепежи</li>
                      <li className="flex gap-2"><span className="text-brand">✓</span> Подключение электрики и дренажа</li>
                      <li className="flex gap-2"><span className="text-brand">✓</span> Тестирование всех режимов</li>
                      <li className="flex gap-2"><span className="text-brand">✓</span> Договор и акт выполненных работ</li>
                      <li className="flex gap-2"><span className="text-brand">✓</span> Гарантия 2 года на монтаж</li>
                      {options.cableCanal && <li className="flex gap-2"><span className="text-brand">✓</span> Кабель-канал для трассы</li>}
                      {options.highAltitude && <li className="flex gap-2"><span className="text-brand">✓</span> Высотные работы</li>}
                      {options.dismount && <li className="flex gap-2"><span className="text-brand">✓</span> Демонтаж старого кондиционера</li>}
                      {options.protection && <li className="flex gap-2"><span className="text-brand">✓</span> Защитный кожух наружного блока</li>}
                      {options.interFloor && <li className="flex gap-2"><span className="text-brand">✓</span> Межэтажный проход</li>}
                    </ul>
                  )}
                </div>

                <div className="mt-8 grid gap-3 sm:grid-cols-2">
                  <a
                    href="tel:+79039522177"
                    className="btn-glow flex items-center justify-center gap-2 rounded-xl bg-brand py-4 font-semibold text-white"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/>
                    </svg>
                    +7 (903) 952-21-77
                  </a>
                  <Link
                    href="/kontakty"
                    className="flex items-center justify-center rounded-xl border-2 border-brand py-4 font-semibold text-brand hover:bg-brand hover:text-white transition"
                  >
                    Оставить заявку
                  </Link>
                </div>

                <button onClick={() => { setStep(1); setOptions({ cableCanal:false, highAltitude:false, dismount:false, protection:false, interFloor:false }); }} className="mt-4 text-sm text-text-secondary hover:text-brand transition">
                  ← Начать заново
                </button>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-4">
            {/* Live price */}
            <div className="rounded-2xl bg-brand-dark p-6 text-white sticky top-24">
              <p className="text-sm text-white/60">Предварительная стоимость</p>
              <p className={`mt-1 text-4xl font-bold transition-all duration-300 ${animating ? "opacity-50" : "opacity-100"}`}>
                от {fmt(total)} ₽
              </p>
              <div className="mt-4 space-y-2 text-sm text-white/70">
                <div className="flex justify-between">
                  <span>Услуга:</span>
                  <span className="text-white">{service === "install" ? "Монтаж" : service === "service" ? "Обслуживание" : "Ремонт"}</span>
                </div>
                <div className="flex justify-between">
                  <span>Помещение:</span>
                  <span className="text-white">{ROOM_TYPES.find(r => r.id === room)?.label}</span>
                </div>
                <div className="flex justify-between">
                  <span>Площадь:</span>
                  <span className="text-white">{area} м²</span>
                </div>
                {service === "install" && (
                  <>
                    <div className="flex justify-between">
                      <span>Тип блока:</span>
                      <span className="text-white">{BLOCK_TYPES.find(b => b.id === blockType)?.label}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Трасса:</span>
                      <span className="text-white">{trass} м</span>
                    </div>
                  </>
                )}
              </div>
              <a
                href="tel:+79039522177"
                className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-white py-3 text-sm font-semibold text-brand hover:bg-brand-accent transition"
              >
                Позвонить мастеру
              </a>
            </div>

            {/* Why us */}
            <div className="rounded-2xl border border-border bg-white p-5 shadow-card">
              <p className="font-semibold text-text-dark">Почему Климат 365</p>
              <ul className="mt-3 space-y-2 text-sm text-text-secondary">
                <li className="flex gap-2"><span className="text-brand">✓</span> Бесплатный выезд мастера</li>
                <li className="flex gap-2"><span className="text-brand">✓</span> Цена фиксируется до начала работ</li>
                <li className="flex gap-2"><span className="text-brand">✓</span> Работаем в новых ЖК</li>
                <li className="flex gap-2"><span className="text-brand">✓</span> Договор и акт</li>
                <li className="flex gap-2"><span className="text-brand">✓</span> Гарантия 2 года</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
