import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { buildMetadata } from "../../../lib/seo";
import { geoPages } from "../../../data/seo/geoPages";

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return geoPages.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = geoPages.find((p) => p.slug === slug);
  if (!page) return {};
  return buildMetadata({
    title: page.metaTitle,
    description: page.metaDescription,
    path: `/zabory-rajon/${slug}`,
  });
}

export default async function GeoPage({ params }: PageProps) {
  const { slug } = await params;
  const page = geoPages.find((p) => p.slug === slug);
  if (!page) notFound();

  const fenceTypes = [
    { title: "Профнастил", price: "от 2 600 ₽/п.м.", href: "/zabory/iz-profnastila", desc: "Полная приватность, надёжный каркас, 15+ лет службы" },
    { title: "Евроштакетник", price: "от 3 000 ₽/п.м.", href: "/zabory/iz-evroshtaketnika", desc: "Современный вид, регулируемая приватность" },
    { title: "3D-сетка", price: "от 1 950 ₽/п.м.", href: "/zabory/3d-setka", desc: "Быстрый монтаж, аккуратный вид, минимум ухода" },
    { title: "Рабица", price: "от 1 400 ₽/п.м.", href: "/zabory/iz-rabicy", desc: "Самый экономичный вариант для дачи и СНТ" },
  ];

  const steps = [
    { n: "01", title: "Заявка", text: "Звоните или оставляете заявку на сайте" },
    { n: "02", title: "Замер", text: `Выезжаем ${page.nameTo} бесплатно` },
    { n: "03", title: "Смета", text: "Фиксируем стоимость до начала работ" },
    { n: "04", title: "Монтаж", text: "Устанавливаем собственной бригадой" },
    { n: "05", title: "Сдача", text: "Акт, договор, гарантия на монтаж" },
  ];

  return (
    <main>
      {/* Schema FAQ */}
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: page.faq.map((item) => ({
              "@type": "Question",
              name: item.q,
              acceptedAnswer: { "@type": "Answer", text: item.a },
            })),
          }),
        }}
      />

      {/* Hero */}
      <section className="bg-brand-dark py-14">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <nav className="mb-4 flex flex-wrap gap-1 text-xs text-white/40">
            <Link href="/" className="hover:text-white/70">Главная</Link>
            <span>/</span>
            <span className="text-white/60">{page.h1}</span>
          </nav>
          <h1 className="text-3xl font-bold text-white sm:text-4xl">{page.h1}</h1>
          <p className="mt-3 max-w-2xl text-white/70">
            {page.lead}
          </p>
          <div className="mt-4 flex flex-wrap gap-2 text-sm text-white/50">
            {page.cities.map((city) => (
              <span key={city} className="rounded-full border border-white/15 px-3 py-1">{city}</span>
            ))}
            <span className="rounded-full border border-white/15 px-3 py-1">{page.distanceKad}</span>
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/kalkulyator-zabora" className="rounded-xl bg-white px-5 py-2.5 text-sm font-semibold text-brand transition hover:bg-brand-accent">
              Рассчитать стоимость →
            </Link>
            <Link href="/kontakty" className="rounded-xl border border-white/30 px-5 py-2.5 text-sm font-semibold text-white transition hover:border-white">
              Вызвать замерщика
            </Link>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-5xl space-y-12 px-4 py-14 sm:px-6 lg:px-8">

        {/* Типы заборов */}
        <section>
          <h2 className="text-2xl font-bold text-text-dark">
            Какие заборы устанавливаем {page.nameIn}
          </h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {fenceTypes.map((item) => (
              <Link key={item.title} href={item.href} className="group rounded-2xl border border-border bg-white p-5 shadow-card transition hover:border-brand/40 hover:shadow-md">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-lg font-semibold text-text-dark group-hover:text-brand">{item.title}</h3>
                  <span className="shrink-0 text-base font-bold text-brand">{item.price}</span>
                </div>
                <p className="mt-1 text-sm text-text-secondary">{item.desc}</p>
                <p className="mt-3 text-xs font-medium text-brand">Подробнее →</p>
              </Link>
            ))}
          </div>
        </section>

        {/* Особенности района */}
        <section className="rounded-2xl border border-amber-200 bg-amber-50 p-6">
          <h2 className="text-lg font-bold text-text-dark">
            Особенности монтажа {page.nameIn}
          </h2>
          <p className="mt-2 text-sm text-text-secondary leading-relaxed">{page.localNote}</p>
        </section>

        {/* Как работаем */}
        <section>
          <h2 className="text-2xl font-bold text-text-dark">Как мы работаем</h2>
          <div className="mt-6 grid gap-3 sm:grid-cols-5">
            {steps.map((s) => (
              <div key={s.n} className="rounded-xl border border-border bg-white p-4 text-center shadow-card">
                <div className="mx-auto mb-2 flex h-9 w-9 items-center justify-center rounded-full bg-brand text-sm font-bold text-white">
                  {s.n}
                </div>
                <p className="text-sm font-semibold text-text-dark">{s.title}</p>
                <p className="mt-1 text-xs text-text-secondary">{s.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Преимущества */}
        <section>
          <h2 className="text-2xl font-bold text-text-dark">Почему выбирают ZABORIO</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { title: "Бесплатный выезд замерщика", text: `Приезжаем ${page.nameTo} и фиксируем все параметры участка на месте` },
              { title: "Цена не меняется", text: "Фиксируем стоимость в договоре до начала работ — никаких доплат" },
              { title: "Собственная бригада", text: "Не передаём в субподряд — бригада ZABORIO несёт ответственность за результат" },
              { title: "Договор и акты", text: "Официальные документы на каждом этапе: договор, акт выполненных работ, гарантия" },
              { title: "Сроки соблюдаем", text: "Прописываем дату завершения в договоре и предупреждаем заранее если что-то меняется" },
              { title: "Гарантия на монтаж", text: "2 года на конструкцию и монтажные работы — в письменном виде" },
            ].map((item) => (
              <div key={item.title} className="rounded-xl border border-border bg-white p-5 shadow-card">
                <div className="mb-2 h-1 w-10 rounded-full bg-brand/60" />
                <h3 className="font-semibold text-text-dark">{item.title}</h3>
                <p className="mt-1 text-sm text-text-secondary">{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section>
          <h2 className="text-2xl font-bold text-text-dark">
            Частые вопросы о заборах {page.nameIn}
          </h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {page.faq.map((item) => (
              <div key={item.q} className="rounded-xl border border-border bg-white p-5 shadow-card">
                <h3 className="font-semibold text-text-dark">{item.q}</h3>
                <p className="mt-2 text-sm text-text-secondary leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="rounded-2xl bg-brand-dark p-8 text-center">
          <h2 className="text-2xl font-bold text-white">
            Нужен забор {page.nameIn}?
          </h2>
          <p className="mt-2 text-white/70">
            Вызовите замерщика бесплатно или рассчитайте стоимость онлайн. Смета — в течение 1–2 дней после замера.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link href="/kalkulyator-zabora" className="rounded-xl bg-white px-6 py-3 text-sm font-semibold text-brand transition hover:bg-brand-accent">
              Рассчитать стоимость
            </Link>
            <Link href="/kontakty" className="rounded-xl border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:border-white">
              Вызвать замерщика
            </Link>
          </div>
        </section>

        {/* Другие районы */}
        <section>
          <h2 className="text-xl font-bold text-text-dark">Работаем и в других районах</h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {geoPages.filter((p) => p.slug !== slug).map((p) => (
              <Link key={p.slug} href={`/zabory-rajon/${p.slug}`}
                className="rounded-full border border-border px-4 py-1.5 text-sm text-text-secondary transition hover:border-brand hover:text-brand">
                {p.name}
              </Link>
            ))}
          </div>
        </section>

      </div>
    </main>
  );
}
