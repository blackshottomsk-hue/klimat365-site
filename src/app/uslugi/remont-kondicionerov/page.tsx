import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "../../../lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Ремонт кондиционеров в СПб — диагностика и устранение неисправностей",
  description:
    "Ремонт кондиционеров в Санкт-Петербурге и Ленобласти. Диагностика 1 500 ₽ — засчитывается в стоимость ремонта. Устраняем любые неисправности: не охлаждает, течёт, шумит, не включается.",
  path: "/uslugi/remont-kondicionerov",
});

export default function RemontPage() {
  return (
    <main>
      <section className="bg-brand-dark py-16 text-white sm:py-24">
        <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8">
          <nav className="mb-6 flex flex-wrap gap-2 text-sm text-white/60">
            <Link href="/" className="hover:text-white">Главная</Link>
            <span>/</span>
            <Link href="/uslugi" className="hover:text-white">Услуги</Link>
            <span>/</span>
            <span className="text-white/90">Ремонт кондиционеров</span>
          </nav>
          <h1 className="max-w-3xl text-4xl font-bold text-white sm:text-5xl">
            Ремонт кондиционеров в СПб — диагностика и устранение неисправностей
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-white/85">
            Выезжаем на диагностику в день обращения. Стоимость диагностики — 1 500 ₽, засчитывается в ремонт. Устраняем любые неисправности сплит-систем всех марок.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/kontakty"
              className="rounded-xl bg-white px-6 py-3 text-sm font-semibold text-brand transition hover:bg-brand-accent hover:text-brand-dark"
            >
              Вызвать мастера
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
          <h2 className="text-3xl font-bold text-text-dark sm:text-4xl">Частые неисправности кондиционеров</h2>
          <p className="mt-4 max-w-2xl text-text-secondary">
            Распознайте симптом — мастер найдёт причину и устранит её с гарантией.
          </p>
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                symptom: "Не охлаждает или плохо охлаждает",
                causes: "Утечка фреона, загрязнённый теплообменник, неисправный компрессор или расширительный вентиль. Диагностируем причину и устраняем — не просто дозаправляем без поиска утечки.",
              },
              {
                symptom: "Течёт конденсат внутри помещения",
                causes: "Засорился дренажный шланг или поддон. Вода не уходит наружу и переливается внутрь блока. Промывка дренажа решает проблему в большинстве случаев.",
              },
              {
                symptom: "Шумит, стучит, вибрирует",
                causes: "Посторонние звуки указывают на износ или поломку вентилятора, ослабление крепёжных элементов, попадание постороннего предмета или износ подшипников.",
              },
              {
                symptom: "Не включается или выключается сам",
                causes: "Неисправна плата управления, вышел из строя датчик температуры, сработала защита по перегреву или замерзанию. Считываем коды ошибок и устраняем причину.",
              },
              {
                symptom: "Обмерзает трубка или решётка",
                causes: "Замерзание трубки — признак недостатка фреона или плохой циркуляции воздуха из-за загрязнённых фильтров. Найдём точную причину и устраним.",
              },
              {
                symptom: "Неприятный запах при работе",
                causes: "Плесень и бактерии в испарителе или дренажном поддоне. Запах сырости, горелого или химии — каждый требует отдельной диагностики. Устраняем вместе с причиной.",
              },
            ].map((item) => (
              <article key={item.symptom} className="rounded-2xl border border-border bg-background-light p-6 shadow-card">
                <h3 className="text-lg font-semibold text-text-dark">{item.symptom}</h3>
                <p className="mt-3 text-sm text-text-secondary">{item.causes}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background-light py-16 sm:py-20">
        <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-text-dark sm:text-4xl">Как проходит ремонт</h2>
          <p className="mt-4 max-w-2xl text-text-secondary">
            Три простых шага от звонка до работающего кондиционера.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              {
                step: "01",
                title: "Заявка",
                text: "Позвоните или оставьте заявку на сайте. Расскажите о симптомах — мастер приедет в удобное для вас время, в большинстве случаев в день обращения.",
              },
              {
                step: "02",
                title: "Диагностика на объекте",
                text: "Мастер проверяет систему: давление фреона, электрику, механику, считывает коды ошибок. Называет точную причину и стоимость ремонта. Диагностика — 1 500 ₽, засчитывается в ремонт.",
              },
              {
                step: "03",
                title: "Ремонт с гарантией",
                text: "После вашего согласия выполняем ремонт. Большинство неисправностей устраняем в тот же визит. На выполненные работы выдаём гарантию.",
              },
            ].map((item) => (
              <article key={item.step} className="rounded-2xl border border-border bg-white p-6 shadow-card">
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-brand text-sm font-bold text-white">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold text-text-dark">{item.title}</h3>
                <p className="mt-3 text-sm text-text-secondary">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-text-dark sm:text-4xl">Цены на ремонт</h2>
          <p className="mt-4 text-text-secondary">Ориентировочные цены. Точная стоимость определяется после диагностики.</p>
          <div className="mt-8 overflow-hidden rounded-2xl border border-border bg-white shadow-card">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border bg-background-light">
                  <th className="px-6 py-4 text-left font-semibold text-text-dark">Вид работы</th>
                  <th className="px-6 py-4 text-right font-semibold text-text-dark">Цена</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {[
                  ["Диагностика (выезд мастера)", "1 500 ₽ (засчитывается в ремонт)"],
                  ["Мелкий ремонт (плата управления, датчик, реле)", "от 3 000 ₽"],
                  ["Дозаправка фреоном (1 кг)", "от 2 800 ₽"],
                  ["Замена компрессора", "от 15 000 ₽"],
                  ["Замена вентилятора внутреннего блока", "от 4 000 ₽"],
                  ["Устранение утечки фреона + заправка", "от 5 000 ₽"],
                  ["Промывка дренажа (при протечке)", "от 2 500 ₽"],
                ].map(([service, price]) => (
                  <tr key={service} className="hover:bg-background-light">
                    <td className="px-6 py-4 text-text-secondary">{service}</td>
                    <td className="px-6 py-4 text-right font-semibold text-brand">{price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-sm text-text-secondary">
            Стоимость запчастей включается в итоговую смету отдельной строкой. Работы начинаем только после вашего согласия с расчётом.
          </p>
        </div>
      </section>

      <section className="bg-background-light py-16 sm:py-20">
        <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold text-text-dark">Гарантия на ремонт</h2>
              <p className="mt-4 text-text-secondary">
                Мы несём ответственность за выполненный ремонт и устанавливаем гарантийный срок на все виды работ.
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  "Гарантия на работы — 6 месяцев",
                  "Гарантия на новые запчасти — согласно гарантии производителя",
                  "При повторном обращении по гарантийному случаю — выезд и ремонт бесплатно",
                  "Акт о выполненных работах — документально подтверждает гарантийные обязательства",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-text-secondary">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand text-xs font-bold text-white">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-border bg-white p-8 shadow-card">
              <h3 className="text-xl font-semibold text-text-dark">Наш подход к ремонту</h3>
              <p className="mt-4 text-sm text-text-secondary">
                Мы не списываем оборудование раньше времени и не рекомендуем замену кондиционера, если его можно отремонтировать с разумными затратами.
              </p>
              <p className="mt-3 text-sm text-text-secondary">
                После диагностики честно скажем: стоит ли ремонтировать или выгоднее заменить оборудование. Никакого давления — решение за вами.
              </p>
              <p className="mt-3 text-sm text-text-secondary">
                Используем только оригинальные или проверенные совместимые запчасти. Не ставим дешёвые аналоги без вашего ведома.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-brand-dark py-16 text-white sm:py-20">
        <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Кондиционер сломался? Вызовите мастера
          </h2>
          <p className="mt-4 text-white/85">
            Диагностика 1 500 ₽ — засчитывается в стоимость ремонта. Выезд в день обращения по СПб и Ленобласти.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/kontakty"
              className="rounded-xl bg-white px-6 py-3 text-sm font-semibold text-brand transition hover:bg-brand-accent hover:text-brand-dark"
            >
              Вызвать мастера
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
