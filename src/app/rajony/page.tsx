import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "../../lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Монтаж кондиционеров в СПб и Ленобласти — зона работы Климат 365",
  description:
    "Климат 365 устанавливает, обслуживает и ремонтирует кондиционеры в Кудрово, Мурино, Девяткино, Новосаратовке, Всеволожске, Колпино и Пушкине. Выезд из СПб от 20 минут.",
  path: "/rajony",
});

const districts = [
  {
    slug: "kudrovo",
    name: "Кудрово",
    desc: "Активно застраивается. ЖК Охта Парк, Звёздный, Новый Оккервиль. Выезд ~25 мин.",
    time: "~25 мин",
  },
  {
    slug: "murino",
    name: "Мурино",
    desc: "Один из самых быстро растущих районов. ЖК Девяткино, Мурино и соседние комплексы.",
    time: "~20 мин",
  },
  {
    slug: "novosuratovka",
    name: "Новосаратовка",
    desc: "Новые жилые кварталы вдоль Мурманского шоссе. ЖК Riverside, Цветной город.",
    time: "~30 мин",
  },
  {
    slug: "devyatkino",
    name: "Девяткино",
    desc: "Станция метро и активная застройка зоны Мурино–Девяткино.",
    time: "~20 мин",
  },
  {
    slug: "vsevolozhsk",
    name: "Всеволожск",
    desc: "Город и пригород. Частные дома, коттеджи и новые жилые комплексы.",
    time: "~35 мин",
  },
  {
    slug: "kolpino",
    name: "Колпино",
    desc: "Жилые кварталы и частный сектор на юге Санкт-Петербурга.",
    time: "~30 мин",
  },
  {
    slug: "pushkin",
    name: "Пушкин",
    desc: "Исторический район. Коттеджи, частные дома и новые жилые комплексы.",
    time: "~35 мин",
  },
];

export default function RajonyPage() {
  return (
    <main>
      <section className="bg-brand-dark py-14">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <nav className="mb-4 flex flex-wrap gap-1 text-xs text-white/40">
            <Link href="/" className="hover:text-white/70">Главная</Link>
            <span>/</span>
            <span className="text-white/60">Районы</span>
          </nav>
          <h1 className="text-3xl font-bold text-white sm:text-4xl">
            Монтаж кондиционеров в СПб и Ленобласти — зона работы
          </h1>
          <p className="mt-4 max-w-2xl text-white/70 leading-relaxed">
            Климат 365 работает в Санкт-Петербурге и ближайших районах Ленинградской области. Выезжаем ежедневно, без доплат за выезд за КАД в указанные районы. Ниже — все направления, по которым мы принимаем заявки.
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

      <div className="mx-auto max-w-5xl px-4 py-14 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-text-dark">Выберите район</h2>
        <p className="mt-2 text-text-secondary">
          На странице каждого района — цены, описание специфики и форма заявки.
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {districts.map((d) => (
            <Link
              key={d.slug}
              href={`/rajony/${d.slug}`}
              className="group rounded-2xl border border-border bg-background-light p-5 shadow-card transition hover:border-brand/40 hover:shadow-md"
            >
              <div className="flex items-start justify-between gap-2">
                <h3 className="text-lg font-semibold text-text-dark group-hover:text-brand">
                  {d.name}
                </h3>
                <span className="shrink-0 rounded-full border border-border px-2.5 py-0.5 text-xs text-text-secondary">
                  {d.time}
                </span>
              </div>
              <p className="mt-2 text-sm text-text-secondary leading-relaxed">{d.desc}</p>
              <p className="mt-3 text-xs font-medium text-brand">Узнать цены →</p>
            </Link>
          ))}
        </div>

        <section className="mt-14 rounded-2xl bg-brand-dark p-8 text-center">
          <h2 className="text-2xl font-bold text-white">Не нашли свой район?</h2>
          <p className="mt-2 text-white/70">
            Позвоните нам — уточним, выезжаем ли к вам, и назовём стоимость с учётом расстояния.
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
