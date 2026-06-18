import type { Metadata } from "next";
import { buildMetadata } from "../../lib/seo";
import Link from "next/link";

export const metadata: Metadata = buildMetadata({
  title: "Цены на установку заборов в СПб и Ленобласти — прайс-лист ZABORIO",
  description:
    "Актуальные цены на монтаж заборов из профнастила, евроштакетника, 3D-сетки и рабицы. Стоимость ворот, калиток и автоматики.",
  path: "/ceny",
});

function fmt(n: number) {
  return n.toLocaleString("ru-RU");
}

const today = new Date().toLocaleDateString("ru-RU", { day: "numeric", month: "long", year: "numeric" });

export default function CenyPage() {
  return (
    <main className="bg-background-light">

      <section className="bg-brand-dark py-14">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm text-white/50">Актуально на {today}</p>
          <h1 className="mt-2 text-3xl font-bold text-white sm:text-4xl">Цены на установку заборов</h1>
          <p className="mt-3 max-w-2xl text-white/70">
            Стоимость за погонный метр включает материал и монтаж на столбах с бетонированием. Точная смета — после бесплатного выезда замерщика.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/kalkulyator-zabora" className="rounded-xl bg-white px-5 py-2.5 text-sm font-semibold text-brand transition hover:bg-brand-accent">
              Рассчитать точную смету →
            </Link>
            <Link href="/kontakty" className="rounded-xl border border-white/30 px-5 py-2.5 text-sm font-semibold text-white transition hover:border-white">
              Вызвать замерщика бесплатно
            </Link>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-5xl space-y-10 px-4 py-14 sm:px-6 lg:px-8">

        {/* Профнастил */}
        <PriceSection
          title="Профнастил"
          note="Цена за п.м. — материал + монтаж на столбах 60×60 мм с бетонированием"
          rows={[
            { label: "Профлист 0.40 мм односторонний", price: "от 2 600 ₽" },
            { label: "Профлист 0.45 мм односторонний", price: "от 2 900 ₽" },
            { label: "Профлист 0.40 мм двусторонний", price: "от 2 800 ₽" },
            { label: "Профлист 0.45 мм двусторонний", price: "от 3 150 ₽" },
          ]}
          unit="п.м."
        />

        {/* Евроштакетник */}
        <PriceSection
          title="Евроштакетник"
          note="Один и два ряда с разными зазорами — регулируется степень приватности"
          rows={[
            { label: "1 ряд, зазор 2 см (почти закрытый)", price: "от 3 150 ₽" },
            { label: "1 ряд, зазор 3 см", price: "от 3 050 ₽" },
            { label: "1 ряд, зазор 4 см (открытый)", price: "от 3 000 ₽" },
            { label: "2 ряда, шахматка 7 см", price: "от 3 900 ₽" },
            { label: "2 ряда, шахматка 9 см", price: "от 3 850 ₽" },
          ]}
          unit="п.м."
        />

        {/* 3D-сетка */}
        <PriceSection
          title="3D-сетка (Гиттер)"
          note="Сварная панельная сетка — популярна для дач, участков и коммерческих объектов"
          rows={[
            { label: "Гиттер Эконом (d=3 мм)", price: "от 1 950 ₽" },
            { label: "Гиттер Стандарт (d=4 мм)", price: "от 2 100 ₽" },
            { label: "Гиттер Премиум (d=5 мм)", price: "от 2 850 ₽" },
          ]}
          unit="п.м."
        />

        {/* Рабица */}
        <PriceSection
          title="Сетка-рабица"
          note="Экономичное решение для дач и технических ограждений"
          rows={[
            { label: "Рабица без протяжки", price: "от 1 400 ₽" },
            { label: "Рабица с протяжкой", price: "от 1 600 ₽" },
          ]}
          unit="п.м."
        />

        {/* Только каркас */}
        <PriceSection
          title="Каркас без зашивки"
          note="Столбы + лаги, без секционного материала"
          rows={[
            { label: "Каркас на столбах 60×60 мм с бетонированием", price: "от 1 650 ₽" },
          ]}
          unit="п.м."
        />

        {/* Ворота */}
        <PriceSection
          title="Ворота"
          note="Цена за единицу — монтаж включён"
          rows={[
            { label: "Распашные ворота", price: "от 25 000 ₽" },
            { label: "Откатные ворота 3 м", price: "от 65 000 ₽" },
            { label: "Откатные ворота 4 м", price: "от 70 000 ₽" },
            { label: "Откатные ворота 5 м", price: "от 75 000 ₽" },
          ]}
          unit="шт."
        />

        {/* Калитки */}
        <PriceSection
          title="Калитки"
          note="Монтаж включён"
          rows={[
            { label: "Встроенная в ворота", price: "от 14 500 ₽" },
            { label: "Рядом с воротами", price: "от 16 500 ₽" },
            { label: "Отдельно стоящая", price: "от 18 500 ₽" },
          ]}
          unit="шт."
        />

        {/* Автоматика */}
        <PriceSection
          title="Автоматика для откатных ворот"
          note="Комплект под ключ — привод + монтаж + пульты"
          rows={[
            { label: "Nice RD400 (до 400 кг)", price: "от 42 000 ₽" },
            { label: "Nice RB1000 (до 1000 кг)", price: "от 70 000 ₽" },
            { label: "Зубчатая рейка (до 4 м)", price: "от 5 500 ₽" },
            { label: "Зубчатая рейка (5 м)", price: "от 6 500 ₽" },
          ]}
          unit="компл."
        />

        {/* Доставка */}
        <section className="rounded-2xl border border-border bg-white p-6 shadow-card">
          <h2 className="text-xl font-bold text-text-dark">Доставка и выезд</h2>
          <ul className="mt-4 space-y-2 text-sm text-text-secondary">
            <li className="flex gap-2"><span className="font-semibold text-brand">✓</span> Выезд замерщика — <strong className="text-text-dark">бесплатно</strong></li>
            <li className="flex gap-2"><span className="font-semibold text-brand">✓</span> Доставка материалов — <strong className="text-text-dark">от 4 000 ₽/рейс</strong> в пределах 20 км от СПб</li>
            <li className="flex gap-2"><span className="font-semibold text-brand">✓</span> Сверх 20 км — <strong className="text-text-dark">+70 ₽/км</strong></li>
            <li className="flex gap-2"><span className="font-semibold text-brand">✓</span> Рейс с откатными воротами — <strong className="text-text-dark">+1 500 ₽</strong></li>
          </ul>
        </section>

        {/* CTA */}
        <section className="rounded-2xl bg-brand-dark p-8 text-center">
          <h2 className="text-2xl font-bold text-white">Нужна точная смета?</h2>
          <p className="mt-2 text-white/70">Введите параметры участка в калькуляторе — получите итог с разбивкой по позициям. Или вызовите замерщика бесплатно.</p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link href="/kalkulyator-zabora" className="rounded-xl bg-white px-6 py-3 text-sm font-semibold text-brand transition hover:bg-brand-accent">
              Открыть калькулятор
            </Link>
            <Link href="/kontakty" className="rounded-xl border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:border-white">
              Вызвать замерщика
            </Link>
          </div>
        </section>

      </div>
    </main>
  );
}

function PriceSection({
  title,
  note,
  rows,
  unit,
}: {
  title: string;
  note: string;
  rows: { label: string; price: string }[];
  unit: string;
}) {
  return (
    <section>
      <div className="mb-3">
        <h2 className="text-2xl font-bold text-text-dark">{title}</h2>
        <p className="mt-1 text-sm text-text-secondary">{note}</p>
      </div>
      <div className="overflow-hidden rounded-2xl border border-border bg-white shadow-card">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border bg-background-light">
              <th className="px-4 py-3 text-left font-semibold text-text-dark">Наименование</th>
              <th className="px-4 py-3 text-right font-semibold text-text-dark">Цена / {unit}</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {rows.map((row) => (
              <tr key={row.label} className="hover:bg-background-light/60">
                <td className="px-4 py-3 text-text-dark">{row.label}</td>
                <td className="px-4 py-3 text-right font-semibold text-brand">{row.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
