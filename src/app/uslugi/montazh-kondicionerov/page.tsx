import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "../../../lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Монтаж кондиционеров в СПб и Ленобласти под ключ — Климат 365",
  description:
    "Установка сплит-систем и мульти-сплит в Санкт-Петербурге и Ленобласти под ключ. Трасса, подключение, тестирование включены в цену. Работаем в новостройках Кудрово, Мурино, Новосаратовка. От 17 000 ₽.",
  path: "/uslugi/montazh-kondicionerov",
});

export default function MontazhPage() {
  return (
    <main>
      <section className="bg-brand-dark py-16 text-white sm:py-24">
        <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8">
          <nav className="mb-6 flex flex-wrap gap-2 text-sm text-white/60">
            <Link href="/" className="hover:text-white">Главная</Link>
            <span>/</span>
            <Link href="/uslugi" className="hover:text-white">Услуги</Link>
            <span>/</span>
            <span className="text-white/90">Монтаж кондиционеров</span>
          </nav>
          <h1 className="max-w-3xl text-4xl font-bold text-white sm:text-5xl">
            Монтаж кондиционеров в СПб и Ленобласти — под ключ с гарантией
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-white/85">
            Устанавливаем сплит-системы любых марок в квартирах, домах и офисах. Прокладка трассы, монтаж блоков, подключение дренажа и электрики, тестирование — всё входит в цену.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/kontakty"
              className="rounded-xl bg-white px-6 py-3 text-sm font-semibold text-brand transition hover:bg-brand-accent hover:text-brand-dark"
            >
              Заказать монтаж
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
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold text-text-dark">Что входит в монтаж под ключ</h2>
              <p className="mt-4 text-text-secondary">
                Мы берём на себя всё — вам нужно только открыть дверь мастеру и принять готовую работу.
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  "Демонтаж упаковки и проверка комплектности оборудования",
                  "Разметка и монтаж кронштейнов для наружного блока",
                  "Монтаж внутреннего блока с выравниванием",
                  "Прокладка медной трассы (3 м в базовой цене) в кабель-канале",
                  "Монтаж дренажного шланга",
                  "Вакуумирование системы и проверка на герметичность",
                  "Подключение электропитания",
                  "Пуск, тестирование всех режимов, проверка давления фреона",
                  "Инструктаж по эксплуатации и уходу",
                  "Уборка рабочего места, вывоз упаковки",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-text-secondary">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand text-xs font-bold text-white">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-border bg-background-light p-8 shadow-card">
              <h3 className="text-xl font-semibold text-text-dark">В базовую стоимость включено</h3>
              <ul className="mt-4 space-y-2 text-sm text-text-secondary">
                <li className="flex items-start gap-2">
                  <span className="text-brand">→</span>
                  3 метра медной трассы (фреоновый контур + теплоизоляция)
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-brand">→</span>
                  Все расходные материалы: кабель-канал, дренажная труба, крепёж, герметик
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-brand">→</span>
                  Вакуумирование системы
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-brand">→</span>
                  Пуск и тестирование
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-brand">→</span>
                  Гарантия на монтажные работы — 2 года
                </li>
              </ul>
              <p className="mt-6 text-sm text-text-secondary">
                Если трасса длиннее 3 м — стоимость каждого дополнительного метра согласовывается заранее и фиксируется в договоре.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-background-light py-16 sm:py-20">
        <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-text-dark sm:text-4xl">Цены на монтаж кондиционеров</h2>
          <p className="mt-4 text-text-secondary">Актуальные цены для СПб и Ленобласти. Окончательная стоимость фиксируется после выезда мастера.</p>
          <div className="mt-8 overflow-hidden rounded-2xl border border-border bg-white shadow-card">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border bg-background-light">
                  <th className="px-6 py-4 text-left font-semibold text-text-dark">Вид монтажа</th>
                  <th className="px-6 py-4 text-left font-semibold text-text-dark">Мощность / площадь</th>
                  <th className="px-6 py-4 text-right font-semibold text-text-dark">Цена</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {[
                  ["Сплит-система", "до 2,5 кВт (до 25 м²)", "от 17 000 ₽"],
                  ["Сплит-система", "до 3,5 кВт (до 35 м²)", "от 19 000 ₽"],
                  ["Сплит-система", "до 5 кВт (до 50 м²)", "от 22 000 ₽"],
                  ["Мульти-сплит", "2 внутренних блока", "от 28 000 ₽"],
                ].map(([type, power, price]) => (
                  <tr key={type + power} className="hover:bg-background-light">
                    <td className="px-6 py-4 font-medium text-text-dark">{type}</td>
                    <td className="px-6 py-4 text-text-secondary">{power}</td>
                    <td className="px-6 py-4 text-right font-semibold text-brand">{price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-sm text-text-secondary">В цену включены: 3 м медной трассы, все расходники, вакуумирование, тестирование, гарантия 2 года на монтаж.</p>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-text-dark sm:text-4xl">Этапы монтажа</h2>
          <p className="mt-4 max-w-2xl text-text-secondary">
            Прозрачный процесс — вы знаете, что происходит на каждом шаге.
          </p>
          <div className="mt-10 grid gap-6">
            {[
              {
                step: "01",
                title: "Заявка и бесплатный выезд",
                text: "Принимаем заявку по телефону или через форму на сайте. Мастер выезжает на объект, осматривает место монтажа, планирует трассу и называет точную стоимость. Выезд бесплатный.",
              },
              {
                step: "02",
                title: "Договор с фиксированной ценой",
                text: "Оформляем договор: фиксируем стоимость работ и оборудования, сроки, гарантийные обязательства. Цена после подписания не меняется.",
              },
              {
                step: "03",
                title: "Монтаж блоков и прокладка трассы",
                text: "Устанавливаем кронштейны, монтируем внешний и внутренний блоки, прокладываем медную трассу в кабель-канале, подключаем дренаж и электропитание.",
              },
              {
                step: "04",
                title: "Вакуумирование и пуск",
                text: "Вакуумируем систему для удаления воздуха и влаги, проверяем герметичность. Запускаем кондиционер, тестируем все режимы, замеряем давление фреона.",
              },
              {
                step: "05",
                title: "Сдача работ и гарантийный документ",
                text: "Показываем результат работы, объясняем как пользоваться и обслуживать. Подписываем акт, выдаём гарантийный документ на монтаж сроком 2 года.",
              },
            ].map((item) => (
              <article key={item.step} className="flex gap-6 rounded-2xl border border-border bg-background-light p-6 shadow-card md:gap-8">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand text-sm font-bold text-white">
                  {item.step}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-text-dark">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-text-secondary">{item.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background-light py-16 sm:py-20">
        <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-text-dark sm:text-4xl">Монтаж в новостройках СПб и Ленобласти</h2>
          <p className="mt-4 max-w-2xl text-text-secondary">
            Большинство наших клиентов — жители новых ЖК. Мы знаем специфику монтажа в новостройках и работаем строго по правилам управляющих компаний.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { area: "Кудрово", text: "Монтаж наружного блока с учётом требований УК. Работаем с разными типами фасадов." },
              { area: "Мурино", text: "Опыт в сотнях квартир в ЖК Мурино. Знаем ограничения по вынесу блоков." },
              { area: "Новосаратовка", text: "Монтаж с нуля в только что сданных домах. Прокладываем трассы до финишной отделки." },
              { area: "Девяткино", text: "Работаем в ЖК вдоль Токсовского шоссе и у станции метро Девяткино." },
            ].map((item) => (
              <div key={item.area} className="rounded-2xl border border-border bg-white p-5 shadow-card">
                <h3 className="text-lg font-semibold text-text-dark">{item.area}</h3>
                <p className="mt-2 text-sm text-text-secondary">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-text-dark sm:text-4xl">Частые вопросы о монтаже</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {[
              {
                q: "Нужно ли мне заранее покупать кондиционер?",
                a: "Необязательно. Мы можем помочь подобрать подходящую модель под вашу площадь и бюджет. Работаем с Mitsubishi Electric, Daikin, Haier, Midea, AUX, Electrolux и другими марками.",
              },
              {
                q: "Сколько времени займёт монтаж?",
                a: "В большинстве случаев монтаж сплит-системы занимает 3–5 часов. Мульти-сплит или сложные объекты с длинной трассой — до одного рабочего дня.",
              },
              {
                q: "Можно ли смонтировать кондиционер в строящейся квартире?",
                a: "Да, и это оптимальный момент — можно спрятать трассу в стену до чистовой отделки. Приедем на объект на любом этапе ремонта.",
              },
              {
                q: "Нужно ли согласовывать монтаж с управляющей компанией?",
                a: "В большинстве новостроек размещение наружного блока на фасаде требует согласования с УК. Мы помогаем разобраться с требованиями и выбрать правильное место для блока.",
              },
              {
                q: "Что будет, если что-то сломается в гарантийный период?",
                a: "Гарантия на монтажные работы — 2 года. Если проблема связана с нашей работой, приедем и устраним за свой счёт в кратчайшие сроки.",
              },
            ].map((item) => (
              <article key={item.q} className="rounded-2xl border border-border bg-background-light p-5 shadow-card">
                <h3 className="text-lg font-semibold text-text-dark">{item.q}</h3>
                <p className="mt-2 text-sm text-text-secondary">{item.a}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand-dark py-16 text-white sm:py-20">
        <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Готовы установить кондиционер?
          </h2>
          <p className="mt-4 text-white/85">
            Оставьте заявку — мастер выедет бесплатно, осмотрит объект и назовёт точную цену. Работаем в СПб и Ленобласти.
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
