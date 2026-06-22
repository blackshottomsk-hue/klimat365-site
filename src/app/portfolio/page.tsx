import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "../../lib/seo";
import { breadcrumbSchema, absoluteUrl } from "../../lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Портфолио — выполненные монтажи кондиционеров — Климат 365",
  description:
    "Примеры выполненных монтажей кондиционеров в квартирах, домах и офисах Санкт-Петербурга и Ленинградской области. Кудрово, Мурино, Новосаратовка и другие районы.",
  path: "/portfolio",
});

const cases = [
  {
    title: "Mitsubishi Electric в двухкомнатную квартиру",
    details: "ЖК Новый Оккервиль, Кудрово · Монтаж, трасса 5 м, кронштейны",
    result: "Установлен за 1 день. Мастер проложил трассу скрыто под потолочным плинтусом.",
    price: "21 500 ₽",
  },
  {
    title: "Daikin мульти-сплит 2+1",
    details: "Частный дом, Всеволожск · 2 внутренних блока, одна внешняя секция",
    result: "Совместная трасса позволила сэкономить на материалах и времени монтажа.",
    price: "38 000 ₽",
  },
  {
    title: "Haier в новостройку (высокий этаж)",
    details: "ЖК Мурино 2, 18 этаж · Согласование с УК, фасадный монтаж",
    result: "Согласовали место наружного блока с управляющей компанией, смонтировали за 1 визит.",
    price: "24 000 ₽",
  },
  {
    title: "Обслуживание + дозаправка фреоном",
    details: "Офис, Фрунзенский район СПб · 3 сплит-системы Panasonic",
    result: "Чистка всех блоков, дозаправка R410A, проверка дренажа. Кондиционеры работают как новые.",
    price: "15 500 ₽",
  },
  {
    title: "Ремонт Samsung — не охлаждал",
    details: "Квартира, Колпино · Диагностика, устранение утечки, дозаправка",
    result: "Нашли микротрещину в трассе, запаяли, дозаправили. Кондиционер работает второй сезон.",
    price: "6 500 ₽",
  },
  {
    title: "Монтаж в загородном доме (сложная трасса)",
    details: "Частный дом, Пушкин · Трасса 12 м через перекрытие, кирпичная стена",
    result: "Прокладка трассы через кирпичную стену и деревянное перекрытие. Сдали за 1 день.",
    price: "29 000 ₽",
  },
];

export default function PortfolioPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: "Главная", item: absoluteUrl("/") },
              { name: "Портфолио", item: absoluteUrl("/portfolio") },
            ]),
          ),
        }}
      />

      <section className="bg-brand-dark py-14">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <nav className="mb-4 flex flex-wrap gap-1 text-xs text-white/40">
            <Link href="/" className="hover:text-white/70">Главная</Link>
            <span>/</span>
            <span className="text-white/60">Портфолио</span>
          </nav>
          <h1 className="text-3xl font-bold text-white sm:text-4xl">
            Портфолио — наши выполненные работы
          </h1>
          <p className="mt-4 max-w-2xl text-white/70 leading-relaxed">
            Реальные кейсы монтажа, обслуживания и ремонта кондиционеров в Санкт-Петербурге и Ленинградской области. Квартиры в новостройках, частные дома, офисы.
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
          <h2 className="text-2xl font-bold text-text-dark">Примеры выполненных работ</h2>
          <p className="mt-2 text-text-secondary">
            Каждый кейс — реальный объект с указанием района, типа работ и стоимости.
          </p>
          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {cases.map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-border bg-background-light p-5 shadow-card"
              >
                <p className="text-lg font-bold text-brand">{item.price}</p>
                <h3 className="mt-1 text-base font-semibold text-text-dark">{item.title}</h3>
                <p className="mt-2 text-xs text-text-secondary">{item.details}</p>
                <p className="mt-3 text-sm text-text-secondary leading-relaxed">{item.result}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-2xl bg-background-light border border-border p-6">
          <h2 className="text-xl font-bold text-text-dark">Фотогалерея в разработке</h2>
          <p className="mt-2 text-text-secondary">
            Сейчас формируем фотоархив выполненных объектов. Если хотите увидеть примеры похожего монтажа — позвоните, подберём кейс под ваш тип помещения.
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <a href="tel:+79039522177" className="rounded-xl bg-brand px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-brand-dark">
              +7 (903) 952-21-77
            </a>
            <Link href="/kontakty" className="rounded-xl border border-brand px-5 py-2.5 text-sm font-semibold text-brand transition hover:bg-brand/5">
              Написать нам
            </Link>
          </div>
        </section>

        <section className="rounded-2xl bg-brand-dark p-8 text-center">
          <h2 className="text-2xl font-bold text-white">Хотите такой же монтаж?</h2>
          <p className="mt-2 text-white/70">
            Выезжаем на бесплатную оценку. Называем точную цену на месте — без сюрпризов по факту.
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
