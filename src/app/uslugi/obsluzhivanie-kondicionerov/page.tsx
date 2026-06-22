import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "../../../lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Техническое обслуживание кондиционеров в СПб — Климат 365",
  description:
    "Чистка, ТО и заправка кондиционеров в Санкт-Петербурге и Ленобласти. Промывка теплообменника, чистка дренажа, дозаправка фреоном. От 2 500 ₽. Работаем в Кудрово, Мурино, Новосаратовке.",
  path: "/uslugi/obsluzhivanie-kondicionerov",
});

export default function ObsluzhivaninePage() {
  return (
    <main>
      <section className="bg-brand-dark py-16 text-white sm:py-24">
        <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8">
          <nav className="mb-6 flex flex-wrap gap-2 text-sm text-white/60">
            <Link href="/" className="hover:text-white">Главная</Link>
            <span>/</span>
            <Link href="/uslugi" className="hover:text-white">Услуги</Link>
            <span>/</span>
            <span className="text-white/90">Обслуживание кондиционеров</span>
          </nav>
          <h1 className="max-w-3xl text-4xl font-bold text-white sm:text-5xl">
            Техническое обслуживание кондиционеров в СПб
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-white/85">
            Профессиональная чистка, диагностика и заправка кондиционеров. Регулярное ТО продлевает ресурс оборудования, снижает счёт за электроэнергию и сохраняет гарантию производителя.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/kontakty"
              className="rounded-xl bg-white px-6 py-3 text-sm font-semibold text-brand transition hover:bg-brand-accent hover:text-brand-dark"
            >
              Записаться на ТО
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
          <h2 className="text-3xl font-bold text-text-dark sm:text-4xl">Зачем нужно техническое обслуживание</h2>
          <p className="mt-4 max-w-2xl text-text-secondary">
            Кондиционер — сложная техника, которая работает в непростых условиях. Без регулярного ухода оборудование теряет эффективность и быстро выходит из строя.
          </p>
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Забитые фильтры снижают холодопроизводительность",
                text: "Загрязнённые фильтры уменьшают поток воздуха через теплообменник. Кондиционер работает интенсивнее, потребляет больше электричества, но охлаждает хуже.",
              },
              {
                title: "Грязный теплообменник — причина поломок",
                text: "Пыль и биопленка на теплообменнике нарушают теплообмен. Компрессор перегревается, давление в системе растёт — это ведёт к дорогостоящему ремонту.",
              },
              {
                title: "Засорённый дренаж течёт на потолок",
                text: "Дренажный шланг накапливает слизь и плесень. Когда дренаж перекрывается — конденсат льётся внутри помещения, портя отделку.",
              },
              {
                title: "Утечка фреона незаметна, но критична",
                text: "Постепенная утечка хладагента снижает мощность системы и в итоге приводит к поломке компрессора. Регулярная диагностика позволяет выявить проблему вовремя.",
              },
              {
                title: "Плесень и бактерии опасны для здоровья",
                text: "Без чистки во влажной среде испарителя активно размножаются бактерии и плесень. Кондиционер начинает распространять неприятный запах и аллергены.",
              },
              {
                title: "ТО сохраняет гарантию производителя",
                text: "Многие производители требуют ежегодного сервисного обслуживания как условие гарантии. Документ об обслуживании подтверждает соблюдение условий.",
              },
            ].map((item) => (
              <article key={item.title} className="rounded-2xl border border-border bg-background-light p-6 shadow-card">
                <div className="mb-4 h-1.5 w-14 rounded-full bg-brand/70" />
                <h3 className="text-lg font-semibold text-text-dark">{item.title}</h3>
                <p className="mt-3 text-sm text-text-secondary">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background-light py-16 sm:py-20">
        <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold text-text-dark">Что входит в полное ТО</h2>
              <p className="mt-4 text-text-secondary">
                Полное техническое обслуживание включает разборку и чистку внутреннего блока, проверку всей системы и при необходимости — дозаправку.
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  "Снятие и мойка фильтров грубой очистки",
                  "Разборка внутреннего блока",
                  "Промывка испарителя (теплообменника) антибактериальным средством",
                  "Чистка крыльчатки вентилятора",
                  "Промывка и продувка дренажного поддона и шланга",
                  "Проверка электрических соединений и плат управления",
                  "Очистка наружного блока от пыли и загрязнений",
                  "Проверка давления фреона в системе",
                  "Дозаправка фреоном при необходимости (оплачивается отдельно)",
                  "Тестирование всех режимов работы",
                  "Составление акта о проведённых работах",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-text-secondary">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand text-xs font-bold text-white">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-4">
              <div className="rounded-2xl border border-border bg-white p-6 shadow-card">
                <h3 className="text-lg font-semibold text-text-dark">Что получаете после ТО</h3>
                <ul className="mt-4 space-y-2 text-sm text-text-secondary">
                  <li className="flex items-start gap-2"><span className="text-brand">→</span>Кондиционер охлаждает с полной мощностью</li>
                  <li className="flex items-start gap-2"><span className="text-brand">→</span>Снижается потребление электроэнергии</li>
                  <li className="flex items-start gap-2"><span className="text-brand">→</span>Нет неприятных запахов и аллергенов</li>
                  <li className="flex items-start gap-2"><span className="text-brand">→</span>Дренаж работает без протечек</li>
                  <li className="flex items-start gap-2"><span className="text-brand">→</span>Акт выполненных работ на руках</li>
                </ul>
              </div>
              <div className="rounded-2xl border border-brand/20 bg-brand/5 p-6">
                <h3 className="text-lg font-semibold text-text-dark">Напоминаем о следующем ТО</h3>
                <p className="mt-2 text-sm text-text-secondary">
                  После обслуживания берём ваш контакт и напоминаем об очередном ТО через 6 или 12 месяцев — как удобно вам. Не нужно держать это в голове.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-text-dark sm:text-4xl">Цены на обслуживание</h2>
          <p className="mt-4 text-text-secondary">Стоимость актуальна для СПб и Ленобласти.</p>
          <div className="mt-8 overflow-hidden rounded-2xl border border-border bg-white shadow-card">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border bg-background-light">
                  <th className="px-6 py-4 text-left font-semibold text-text-dark">Услуга</th>
                  <th className="px-6 py-4 text-right font-semibold text-text-dark">Цена</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {[
                  ["Чистка фильтров и промывка дренажа", "от 2 500 ₽"],
                  ["Полное ТО (разборка, чистка теплообменника, дренажа, заправка)", "от 4 500 ₽"],
                  ["Дозаправка фреоном (1 кг)", "от 2 800 ₽"],
                ].map(([service, price]) => (
                  <tr key={service} className="hover:bg-background-light">
                    <td className="px-6 py-4 text-text-secondary">{service}</td>
                    <td className="px-6 py-4 text-right font-semibold text-brand">{price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="bg-background-light py-16 sm:py-20">
        <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-text-dark sm:text-4xl">Как часто проводить обслуживание</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {[
              {
                period: "1 раз в год",
                title: "Минимальный уход",
                text: "Подходит для квартир, где кондиционер используется только летом. Рекомендуем проводить ТО весной, перед началом сезона.",
              },
              {
                period: "2 раза в год",
                title: "Оптимальный режим",
                text: "Идеально для квартир с круглогодичным использованием. ТО весной (перед летом) и осенью (перед зимним режимом работы на тепло).",
              },
              {
                period: "4 раза в год",
                title: "Для офисов и коммерции",
                text: "Офисные кондиционеры работают 8–12 часов в сутки. При такой нагрузке ежеквартальное обслуживание существенно снижает риск внезапной поломки.",
              },
            ].map((item) => (
              <article key={item.period} className="rounded-2xl border border-border bg-white p-6 shadow-card">
                <div className="mb-3 inline-block rounded-full bg-brand px-3 py-1 text-xs font-semibold text-white">{item.period}</div>
                <h3 className="text-lg font-semibold text-text-dark">{item.title}</h3>
                <p className="mt-2 text-sm text-text-secondary">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-text-dark sm:text-4xl">Частые вопросы</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {[
              {
                q: "Нужно ли присутствовать во время обслуживания?",
                a: "Достаточно открыть дверь мастеру и обеспечить доступ к кондиционеру. Работы занимают 1–2 часа. При желании можете уйти по делам.",
              },
              {
                q: "Как понять, что кондиционеру нужна заправка?",
                a: "Признаки недостатка фреона: кондиционер долго не охлаждает помещение до заданной температуры, обмерзает трубка, компрессор работает без остановки. Точно определит мастер при диагностике.",
              },
              {
                q: "Можно ли обслуживать кондиционер зимой?",
                a: "Чистку и осмотр можно делать в любое время года. Дозаправку фреоном лучше проводить при температуре выше +5 °C, иначе давление в системе не даёт корректных показаний.",
              },
              {
                q: "Вы обслуживаете кондиционеры, которые устанавливали не вы?",
                a: "Да, принимаем на обслуживание оборудование любых марок и любого возраста. Перед ТО проводим осмотр и сообщаем о выявленных проблемах.",
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
            Запишитесь на техническое обслуживание
          </h2>
          <p className="mt-4 text-white/85">
            Мастер приедет в удобное время, проведёт полную чистку и диагностику. Работаем в СПб и Ленобласти.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/kontakty"
              className="rounded-xl bg-white px-6 py-3 text-sm font-semibold text-brand transition hover:bg-brand-accent hover:text-brand-dark"
            >
              Записаться на ТО
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
