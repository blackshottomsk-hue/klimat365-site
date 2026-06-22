import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "../../lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Монтаж, обслуживание и ремонт кондиционеров в СПб — Климат 365",
  description:
    "Полный спектр услуг по кондиционированию в Санкт-Петербурге и Ленобласти: монтаж сплит-систем, техническое обслуживание, ремонт. Работаем в Кудрово, Мурино, Новосаратовке, Девяткино. Фиксированная цена, договор, гарантия.",
  path: "/uslugi",
});

export default function UslugiPage() {
  return (
    <main>
      <section className="bg-brand-dark py-16 text-white sm:py-24">
        <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-medium uppercase tracking-widest text-white/60">Климат 365 — СПб и Ленобласть</p>
          <h1 className="mt-4 max-w-3xl text-4xl font-bold text-white sm:text-5xl">
            Монтаж, обслуживание и ремонт кондиционеров в СПб
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-white/85">
            Устанавливаем, обслуживаем и ремонтируем кондиционеры любых марок в квартирах, домах и офисах. Работаем в новых ЖК — Кудрово, Мурино, Новосаратовка, Девяткино.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/kontakty"
              className="rounded-xl bg-white px-6 py-3 text-sm font-semibold text-brand transition hover:bg-brand-accent hover:text-brand-dark"
            >
              Оставить заявку
            </Link>
            <a
              href="tel:+79039522177"
              className="rounded-xl border border-white/40 px-6 py-3 text-sm font-semibold text-white transition hover:border-white hover:bg-white hover:text-brand-dark"
            >
              +7 (903) 952-21-77
            </a>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-text-dark sm:text-4xl">Наши услуги</h2>
          <p className="mt-4 max-w-2xl text-text-secondary">
            Берёмся за любую задачу — от установки нового кондиционера до диагностики и ремонта сложных неисправностей.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Монтаж кондиционеров",
                text: "Устанавливаем сплит-системы и мульти-сплит под ключ: прокладка трассы, монтаж блоков, подключение электрики и дренажа, тестирование. В базовую стоимость входит 3 м медной трассы и все расходники.",
                href: "/uslugi/montazh-kondicionerov",
                from: "от 17 000 ₽",
              },
              {
                title: "Техническое обслуживание",
                text: "Чистка фильтров, промывка теплообменника и дренажной системы, проверка работоспособности, дозаправка фреоном. Регулярное ТО продлевает срок службы оборудования и сохраняет гарантию производителя.",
                href: "/uslugi/obsluzhivanie-kondicionerov",
                from: "от 2 500 ₽",
              },
              {
                title: "Ремонт кондиционеров",
                text: "Диагностируем и устраняем любые неисправности: не охлаждает, не включается, течёт конденсат, шумит, замерзает трубка. Стоимость диагностики засчитывается в цену ремонта.",
                href: "/uslugi/remont-kondicionerov",
                from: "от 1 500 ₽",
              },
            ].map((item) => (
              <article key={item.title} className="flex flex-col rounded-2xl border border-border bg-background-light p-6 shadow-card">
                <div className="mb-4 h-1.5 w-14 rounded-full bg-brand/70" />
                <h3 className="text-xl font-semibold text-text-dark">{item.title}</h3>
                <p className="mt-3 flex-1 text-sm text-text-secondary">{item.text}</p>
                <div className="mt-5 flex items-center justify-between">
                  <span className="text-sm font-semibold text-brand">{item.from}</span>
                  <Link href={item.href} className="text-sm font-semibold text-brand hover:text-brand-dark">
                    Подробнее →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background-light py-16 sm:py-20">
        <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-text-dark sm:text-4xl">Почему выбирают Климат 365</h2>
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Цена фиксируется до начала работ",
                text: "Называем точную стоимость после выезда мастера. Никаких «доплат по факту» — всё прописано в договоре до начала монтажа.",
              },
              {
                title: "Работаем в новых ЖК",
                text: "Знаем правила управляющих компаний в новостройках, особенности монтажа на фасадах и специфику работы в Кудрово, Мурино и других районах.",
              },
              {
                title: "Только свои мастера",
                text: "Все работы выполняет наша бригада — без субподряда. Несём полную ответственность за каждый этап, от трассы до запуска.",
              },
              {
                title: "Гарантия на монтаж 2 года",
                text: "Гарантийные обязательства закреплены в договоре. Если возникнет проблема по нашей вине — устраним бесплатно.",
              },
              {
                title: "Договор и закрывающие документы",
                text: "Работаем официально. Оформляем договор, акт выполненных работ — всё необходимое для отчётности и гарантийных случаев.",
              },
              {
                title: "Обслуживаем то, что установили",
                text: "После монтажа берём кондиционер на регулярное ТО: чистка, заправка, диагностика по удобному для вас графику.",
              },
            ].map((item) => (
              <article key={item.title} className="rounded-2xl border border-border bg-white p-6 shadow-card">
                <div className="mb-4 h-1.5 w-14 rounded-full bg-brand/70" />
                <h3 className="text-xl font-semibold text-text-dark">{item.title}</h3>
                <p className="mt-3 text-sm text-text-secondary">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-text-dark sm:text-4xl">Работаем в новых ЖК Санкт-Петербурга</h2>
          <p className="mt-4 max-w-2xl text-text-secondary">
            Специализируемся на монтаже кондиционеров в новостройках Ленобласти и приграничных районах СПб. Знаем требования местных УК и особенности каждого комплекса.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { name: "Кудрово", desc: "ЖК Кудрово, Цвета радуги, Живи! в Кудрово и соседние комплексы" },
              { name: "Мурино", desc: "ЖК Северный, Мурино 2019, Цветной город и другие" },
              { name: "Новосаратовка", desc: "ЖК Новосаратовка, Дудергофский и прилегающие ЖК" },
              { name: "Девяткино", desc: "ЖК у станции Девяткино и комплексы вдоль Токсовского шоссе" },
            ].map((item) => (
              <div key={item.name} className="rounded-2xl border border-border bg-background-light p-5 shadow-card">
                <h3 className="text-lg font-semibold text-text-dark">{item.name}</h3>
                <p className="mt-2 text-sm text-text-secondary">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand-dark py-16 text-white sm:py-20">
        <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Нужен монтаж или обслуживание кондиционера?
          </h2>
          <p className="mt-4 text-white/85">
            Оставьте заявку — позвоним в течение 30 минут, согласуем удобное время выезда и назовём точную цену.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/kontakty"
              className="rounded-xl bg-white px-6 py-3 text-sm font-semibold text-brand transition hover:bg-brand-accent hover:text-brand-dark"
            >
              Оставить заявку
            </Link>
            <a
              href="tel:+79039522177"
              className="rounded-xl border border-white/40 px-6 py-3 text-sm font-semibold text-white transition hover:border-white hover:bg-white hover:text-brand-dark"
            >
              +7 (903) 952-21-77
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
