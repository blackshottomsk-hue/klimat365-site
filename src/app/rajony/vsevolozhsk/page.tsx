import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "../../../lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Монтаж кондиционеров во Всеволожске — Климат 365",
  description:
    "Монтаж, обслуживание и ремонт кондиционеров во Всеволожске. Работаем в частных домах и новых ЖК города и пригорода. Выезд ~35 минут. Фиксированная смета, гарантия.",
  path: "/rajony/vsevolozhsk",
});

const services = [
  {
    title: "Монтаж кондиционера",
    price: "от 17 000 ₽",
    desc: "Установка сплит-системы под ключ: трасса, дренаж, пусконаладка. Работаем с любым брендом.",
  },
  {
    title: "Техническое обслуживание",
    price: "от 2 500 ₽",
    desc: "Чистка фильтров, промывка испарителя, проверка дренажа и фреона. Продлевает срок службы на годы.",
  },
  {
    title: "Диагностика и ремонт",
    price: "от 1 500 ₽",
    desc: "Определяем неисправность за 1 визит. Ремонт платы, замена компрессора, дозаправка фреоном.",
  },
];

const prices = [
  { label: "Монтаж до 25 м²", price: "от 17 000 ₽" },
  { label: "Монтаж до 35 м²", price: "от 19 000 ₽" },
  { label: "Монтаж до 50 м²", price: "от 22 000 ₽" },
  { label: "ТО (чистка + дренаж)", price: "от 2 500 ₽" },
  { label: "Диагностика + ремонт", price: "от 1 500 ₽" },
];

const steps = [
  { n: "01", title: "Заявка", text: "Позвоните или оставьте заявку на сайте — ответим в течение нескольких минут." },
  { n: "02", title: "Согласование", text: "Уточним модель, площадь помещения и удобное время выезда." },
  { n: "03", title: "Монтаж", text: "Приедем в оговорённое время, выполним работу и сдадим объект." },
];

export default function VsevolozhskPage() {
  return (
    <main>
      <section className="bg-brand-dark py-14">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <nav className="mb-4 flex flex-wrap gap-1 text-xs text-white/40">
            <Link href="/" className="hover:text-white/70">Главная</Link>
            <span>/</span>
            <Link href="/rajony" className="hover:text-white/70">Районы</Link>
            <span>/</span>
            <span className="text-white/60">Всеволожск</span>
          </nav>
          <h1 className="text-3xl font-bold text-white sm:text-4xl">
            Монтаж и обслуживание кондиционеров во Всеволожске
          </h1>
          <p className="mt-4 max-w-2xl text-white/70 leading-relaxed">
            Всеволожск — крупный город Ленобласти с разнообразной жилой застройкой: здесь и частные дома в пригородных посёлках, и современные ЖК в черте города. Мы работаем как с квартирами в многоэтажках, так и с загородными домами, где требуется нестандартная прокладка трассы. Выезжаем примерно за 35 минут.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/kontakty"
              className="rounded-xl bg-white px-5 py-2.5 text-sm font-semibold text-brand transition hover:bg-brand-accent"
            >
              Оставить заявку →
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

      <div className="mx-auto max-w-5xl space-y-14 px-4 py-14 sm:px-6 lg:px-8">

        <section>
          <h2 className="text-2xl font-bold text-text-dark">Наши услуги во Всеволожске</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {services.map((s) => (
              <div key={s.title} className="rounded-2xl border border-border bg-background-light p-5 shadow-card">
                <p className="text-xl font-bold text-brand">{s.price}</p>
                <h3 className="mt-1 text-base font-semibold text-text-dark">{s.title}</h3>
                <p className="mt-2 text-sm text-text-secondary leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-text-dark">Прайс-лист</h2>
          <div className="mt-4 overflow-hidden rounded-2xl border border-border shadow-card">
            <table className="w-full text-sm">
              <tbody>
                {prices.map((row, i) => (
                  <tr key={row.label} className={i % 2 === 0 ? "bg-white" : "bg-background-light"}>
                    <td className="px-5 py-3 text-text-dark">{row.label}</td>
                    <td className="px-5 py-3 text-right font-semibold text-brand">{row.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-2 text-xs text-text-secondary">
            Точная стоимость зависит от модели, длины трассы и условий монтажа. Финальная цена фиксируется в смете до начала работ.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-text-dark">Как заказать монтаж</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {steps.map((s) => (
              <div key={s.n} className="rounded-xl border border-border bg-background-light p-5 shadow-card">
                <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-full bg-brand text-sm font-bold text-white">
                  {s.n}
                </div>
                <p className="font-semibold text-text-dark">{s.title}</p>
                <p className="mt-1 text-sm text-text-secondary leading-relaxed">{s.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-2xl bg-brand-dark p-8 text-center">
          <h2 className="text-2xl font-bold text-white">Нужен кондиционер во Всеволожске?</h2>
          <p className="mt-2 text-white/70">
            Выезжаем во Всеволожск ежедневно. Оставьте заявку или позвоните — рассчитаем стоимость за несколько минут.
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
