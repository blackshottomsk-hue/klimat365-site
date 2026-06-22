import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "../../lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Цены на монтаж и обслуживание кондиционеров в СПб — Климат 365",
  description:
    "Актуальные цены на установку, обслуживание и ремонт кондиционеров в Санкт-Петербурге и Ленинградской области. Фиксированные тарифы без скрытых доплат.",
  path: "/ceny",
});

const today = new Date().toLocaleDateString("ru-RU", { day: "numeric", month: "long", year: "numeric" });

export default function CenyPage() {
  return (
    <main className="bg-background-light">

      <section className="bg-brand-dark py-14">
        <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm text-white/50">Цены актуальны на {today}</p>
          <h1 className="mt-2 text-3xl font-bold text-white sm:text-4xl">
            Цены на монтаж и обслуживание кондиционеров в СПб
          </h1>
          <p className="mt-3 max-w-2xl text-white/70">
            Фиксированные тарифы без скрытых доплат. Стоимость включает все расходные материалы,
            трассу 3 м и пуско-наладочные работы. Точный расчёт — после бесплатного выезда мастера.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/kontakty"
              className="rounded-xl bg-white px-5 py-2.5 text-sm font-semibold text-brand transition hover:bg-brand-accent"
            >
              Вызвать мастера бесплатно →
            </Link>
            <a
              href="tel:+79039522177"
              className="rounded-xl border border-white/30 px-5 py-2.5 text-sm font-semibold text-white transition hover:border-white"
            >
              +7 (903) 952-21-77
            </a>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-8xl space-y-10 px-4 py-14 sm:px-6 lg:px-8">

        <PriceSection
          title="Монтаж сплит-систем под ключ"
          note="В стоимость включены: медная трасса до 3 м, расходные материалы, вакуумирование, тестирование и пуско-наладка"
          rows={[
            { label: "до 2,5 кВт (до 25 м²)", price: "от 17 000 ₽" },
            { label: "до 3,5 кВт (до 35 м²)", price: "от 19 000 ₽" },
            { label: "до 5,0 кВт (до 50 м²)", price: "от 22 000 ₽" },
            { label: "до 7,0 кВт (до 70 м²)", price: "от 26 000 ₽" },
            { label: "Мульти-сплит 2 внутренних блока", price: "от 28 000 ₽" },
          ]}
          unit="шт."
        />

        <PriceSection
          title="Дополнительные работы при монтаже"
          note="Применяются при нестандартных условиях объекта: большая длина трассы, высотные этажи, прокладка через перекрытия"
          rows={[
            { label: "Дополнительный метр медной трассы (сверх 3 м)", price: "от 800 ₽/м" },
            { label: "Прокладка трассы в кабель-канале", price: "от 300 ₽/м" },
            { label: "Межэтажная трасса (сквозь перекрытие)", price: "от 3 500 ₽" },
            { label: "Крепление наружного блока на кронштейны", price: "от 1 500 ₽" },
            { label: "Монтаж на высоте (верхние этажи, сложный доступ)", price: "от 3 000 ₽" },
          ]}
          unit="ед."
        />

        <PriceSection
          title="Техническое обслуживание"
          note="Рекомендуется 1–2 раза в год. Своевременное ТО продлевает срок службы кондиционера и поддерживает его эффективность"
          rows={[
            { label: "Чистка фильтров + промывка дренажа", price: "от 2 500 ₽" },
            { label: "Полное ТО внутреннего блока", price: "от 4 500 ₽" },
            { label: "Дезинфекция внутреннего блока", price: "от 1 500 ₽" },
            { label: "Дозаправка фреоном R32 (за 100 г)", price: "от 600 ₽" },
            { label: "Дозаправка фреоном R410A (за 100 г)", price: "от 500 ₽" },
            { label: "Поиск утечки фреона", price: "от 2 000 ₽" },
          ]}
          unit="ед."
        />

        <PriceSection
          title="Ремонт и диагностика"
          note="Выезд мастера засчитывается в стоимость ремонта. Точная сумма определяется после диагностики"
          rows={[
            { label: "Выезд мастера + диагностика", price: "1 500 ₽" },
            { label: "Замена платы управления", price: "от 3 500 ₽" },
            { label: "Замена датчика температуры", price: "от 2 000 ₽" },
            { label: "Замена дренажного насоса", price: "от 4 000 ₽" },
            { label: "Замена вентилятора внутреннего блока", price: "от 5 000 ₽" },
            { label: "Замена компрессора", price: "от 15 000 ₽" },
          ]}
          unit="ед."
        />

        <section className="rounded-2xl border border-border bg-white p-6 shadow-card">
          <h2 className="text-xl font-bold text-text-dark">Выезд и зона работы</h2>
          <p className="mt-2 text-sm text-text-secondary">
            Работаем в Санкт-Петербурге и Ленинградской области. Приоритетные районы — новые ЖК.
          </p>
          <ul className="mt-4 space-y-2 text-sm text-text-secondary">
            <li className="flex gap-2">
              <span className="font-semibold text-brand">✓</span>
              Выезд мастера — <strong className="text-text-dark">бесплатно</strong> при заключении договора
            </li>
            <li className="flex gap-2">
              <span className="font-semibold text-brand">✓</span>
              Работаем в Кудрово, Мурино, Новосаратовке, Девяткино, Всеволожске, Колпино, Пушкине
            </li>
            <li className="flex gap-2">
              <span className="font-semibold text-brand">✓</span>
              Все районы Санкт-Петербурга и ближайшая Ленинградская область
            </li>
            <li className="flex gap-2">
              <span className="font-semibold text-brand">✓</span>
              Договор, акт выполненных работ, гарантия 2 года на монтаж
            </li>
          </ul>
        </section>

        <section className="rounded-2xl bg-brand-dark p-8 text-center">
          <h2 className="text-2xl font-bold text-white">Нужен точный расчёт?</h2>
          <p className="mt-2 text-white/70">
            Мастер приедет, осмотрит помещение и назовёт окончательную стоимость. Без скрытых доплат —
            всё фиксируется в договоре до начала работ.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link
              href="/kontakty"
              className="rounded-xl bg-white px-6 py-3 text-sm font-semibold text-brand transition hover:bg-brand-accent"
            >
              Оставить заявку
            </Link>
            <a
              href="tel:+79039522177"
              className="rounded-xl border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:border-white"
            >
              +7 (903) 952-21-77
            </a>
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
