import type { Metadata } from "next";
import { absoluteUrl, breadcrumbSchema, buildMetadata } from "../lib/seo";
import Link from "next/link";
import Image from "next/image";
import HeroSection from "../components/home/HeroSection";

export const metadata: Metadata = buildMetadata({
  title: "Установка заборов под ключ в СПб и Ленобласти — цены и монтаж",
  description:
    "Установка заборов под ключ в СПб и Ленобласти: расчет стоимости, монтаж, договор и гарантия. Подбираем решение под ваш бюджет и задачи участка.",
  path: "/",
});

export default function HomePage() {
  return (
    <main>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([{ name: "Главная", item: absoluteUrl("/") }]),
          ),
        }}
      />

      <HeroSection />

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-text-dark sm:text-4xl">
            Почему ZABORIO выбирают вместо обычного подрядчика
          </h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {[
              { title: "Цена не меняется после договора", text: "Фиксируем стоимость до начала работ. Никаких «доплат по факту» и неожиданных позиций в конце — смета остаётся сметой." },
              { title: "Сроки, которые соблюдают", text: "Прописываем дату завершения в договоре. Если сроки под угрозой — предупреждаем заранее, а не после." },
              { title: "Подбор под ваш участок", text: "Учитываем грунт, рельеф, ветровую нагрузку и соседей. Не продаём «как обычно» — предлагаем то, что будет стоять долго." },
              { title: "Проверка перед сдачей", text: "Контролируем вертикаль столбов, крепёж секций и работу ворот до того, как позвоним вам на приёмку. Переделок после сдачи не бывает." },
              { title: "Договор без мелкого шрифта", text: "Работаем официально: договор, акт выполненных работ, гарантийный документ. Всё, что важно — написано понятно и до старта." },
              { title: "Один человек ведёт весь проект", text: "Не переключаем вас между менеджерами и бригадирами. Один ответственный — от первого звонка до подписания акта." },
            ].map((item) => (
              <article key={item.title} className="rounded-2xl border border-border bg-background-light p-6 shadow-card">
                <div className="mb-4 h-1.5 w-14 rounded-full bg-brand/70" />
                <h3 className="text-xl font-semibold text-text-dark">{item.title}</h3>
                <p className="mt-3 text-sm text-text-secondary">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background-light py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-text-dark sm:text-4xl">Как мы работаем</h2>
            <p className="mt-4 max-w-2xl text-text-secondary">
              Каждый этап прозрачен: вы понимаете, что происходит сейчас, что будет дальше и какой результат получите по итогу.
            </p>
          </div>

          <div className="relative">
            {/* Connecting line */}
            <div className="absolute left-6 top-0 hidden h-full w-px bg-border md:block" style={{ left: "2.75rem" }} />

            <div className="grid gap-6">
              {[
                {
                  step: "01",
                  title: "Заявка и первичная консультация",
                  text: "Оставляете заявку на сайте или звоните. Уточняем задачу: тип объекта, протяженность, предпочтения по материалу и ориентировочный бюджет. Помогаем сформулировать задачу, если пока нет четкого запроса.",
                  icon: "📞",
                  duration: "10–15 минут",
                },
                {
                  step: "02",
                  title: "Бесплатный выезд замерщика",
                  text: "Приезжаем на объект в удобное для вас время. Фиксируем периметр, уклоны, тип грунта, расположение ворот и калитки, особенности участка. Делаем фотофиксацию и замеры на месте — без предположений и «навскидку».",
                  icon: "📐",
                  duration: "1–2 дня от заявки",
                },
                {
                  step: "03",
                  title: "Смета с вариантами комплектации",
                  text: "Готовим смету с разбивкой: материалы, монтаж, доставка, дополнительные позиции. Предлагаем 2–3 варианта под разный бюджет — вы выбираете решение, а не принимаете единственное предложение.",
                  icon: "📋",
                  duration: "1–2 дня после замера",
                },
                {
                  step: "04",
                  title: "Договор с фиксированными условиями",
                  text: "Оформляем договор с точной стоимостью, сроками выполнения и гарантийными обязательствами. Никаких формулировок «по факту» или «зависит от ситуации» — всё прописано до начала работ.",
                  icon: "📝",
                  duration: "Подписание в день согласования",
                },
                {
                  step: "05",
                  title: "Монтаж силами своей бригады",
                  text: "Работаем собственной бригадой — не субподрядчиками. Доставляем материалы, устанавливаем столбы, монтируем секции, ворота и калитку. На объекте порядок: мусор вывозим, территорию оставляем чистой.",
                  icon: "🔧",
                  duration: "1–5 дней в зависимости от объема",
                },
                {
                  step: "06",
                  title: "Сдача объекта и гарантия",
                  text: "Принимаете работу вместе с нами: проверяем геометрию, качество крепежа, работу ворот и калитки. Подписываем акт выполненных работ. Выдаём гарантийный документ на конструкцию и монтаж.",
                  icon: "✅",
                  duration: "Гарантия 2 года на монтаж",
                },
              ].map((item) => (
                <article key={item.step} className="relative flex gap-6 rounded-2xl border border-border bg-white p-6 shadow-card md:gap-8">
                  {/* Step number */}
                  <div className="relative z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand text-sm font-bold text-white">
                    {item.step}
                  </div>

                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-start justify-between gap-2">
                      <h3 className="text-lg font-semibold text-text-dark">{item.title}</h3>
                      <span className="shrink-0 rounded-full bg-background-light px-3 py-1 text-xs text-text-secondary">
                        {item.duration}
                      </span>
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-text-secondary">{item.text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link href="/kalkulyator-zabora" className="rounded-xl bg-brand px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-dark">
              Рассчитать стоимость
            </Link>
            <Link href="/kontakty" className="rounded-xl border border-border px-6 py-3 text-sm font-semibold text-text-dark transition hover:border-brand hover:text-brand">
              Задать вопрос
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-text-dark sm:text-4xl">Типы заборов и решений</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {[
              { title: "Профнастил", text: "Рациональный выбор для приватности и надежной защиты участка.", href: "/zabory/iz-profnastila", image: "/images/04-zabory/DSC09628.jpg" },
              { title: "Евроштакетник", text: "Современный визуальный стиль с гибкой настройкой приватности.", href: "/zabory/iz-evroshtaketnika", image: "/images/04-zabory/DSC09524.jpg" },
              { title: "3D-сетка", text: "Быстрый монтаж и аккуратный вид для частных и B2B-объектов.", href: "/zabory/3d-setka", image: "/images/04-zabory/DSC09540.jpg" },
              { title: "Рабица", text: "Экономичное решение для дачи и технических зон с быстрым запуском.", href: "/zabory/iz-rabicy", image: "/images/04-zabory/DSC09405.jpg" },
              { title: "Заборы под ключ", text: "Полный цикл в одном договоре: от замера до сдачи без разрыва ответственности.", href: "/zabory/pod-klyuch", image: "/images/04-zabory/DSC09372.jpg" },
              { title: "Ворота и калитки", text: "Комплексная въездная группа в едином стиле с ограждением.", href: "/vorota", image: "/images/05-vorota/DSC09593.jpg" },
            ].map((item) => (
              <article key={item.title} className="rounded-2xl border border-border bg-background-light p-6 shadow-card">
                <div className="mb-4 overflow-hidden rounded-xl">
                  <Image src={item.image} alt={item.title} width={1200} height={560} className="h-36 w-full object-cover" loading="lazy" />
                </div>
                <h3 className="text-xl font-semibold text-text-dark">{item.title}</h3>
                <p className="mt-3 text-sm text-text-secondary">{item.text}</p>
                <Link href={item.href} className="mt-4 inline-block text-sm font-semibold text-brand hover:text-brand-dark">Подробнее →</Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-text-dark sm:text-4xl">Ответы на частые вопросы</h2>
          <p className="mt-4 max-w-3xl text-text-secondary">
            Закрываем ключевые вопросы до замера: по цене, срокам, договору, гарантии и организации работ.
          </p>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {[
              { q: "Можно ли сразу узнать точную цену?", a: "Предварительно — да, точная смета формируется после замера участка." },
              { q: "Что входит в стоимость?", a: "В смете отдельно показываем материалы, монтаж, доставку и допработы." },
              { q: "Даете ли гарантию?", a: "Да, гарантийные условия фиксируются в договоре до начала работ." },
              { q: "Можно сделать дешевле без потери надежности?", a: "Да, подбираем комплектацию под задачу и бюджет без критичных компромиссов." },
            ].map((item) => (
              <article key={item.q} className="rounded-2xl border border-border bg-background-light p-5 shadow-card">
                <h3 className="text-lg font-semibold text-text-dark">{item.q}</h3>
                <p className="mt-2 text-sm text-text-secondary">{item.a}</p>
              </article>
            ))}
          </div>
          <Link href="/faq" className="mt-6 inline-block text-sm font-semibold text-brand hover:text-brand-dark">Смотреть все вопросы и ответы →</Link>
        </div>
      </section>

      <section className="bg-background-light py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-text-dark sm:text-4xl">Отзывы клиентов</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {[
              { author: "Николай, Пушкинский район", text: "Понравилось, что смета была понятной до копейки. В процессе ничего «не всплыло», сроки выдержали, результат ровно как обсуждали." },
              { author: "Елена, Гатчинский район", text: "Сравнивали несколько подрядчиков. Здесь был самый спокойный и профессиональный подход: без давления, но с четкими рекомендациями." },
              { author: "Андрей, Красносельский район", text: "Делали забор и откатные ворота. Хорошая организация работ, аккуратный монтаж и внятная коммуникация от замера до сдачи." },
            ].map((item) => (
              <article key={item.author} className="rounded-2xl border border-border bg-white p-6 shadow-card">
                <p className="text-sm text-text-secondary">{item.text}</p>
                <p className="mt-4 text-sm font-semibold text-text-dark">{item.author}</p>
              </article>
            ))}
          </div>
          <Link href="/otzyvy" className="mt-6 inline-block text-sm font-semibold text-brand hover:text-brand-dark">Смотреть все отзывы →</Link>
        </div>
      </section>

      <section className="bg-brand-dark py-16 text-white sm:py-20">
        <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Готовы обсудить ваш объект и зафиксировать понятный план работ?
          </h2>
          <p className="mt-4 text-white/85">
            Получите расчет с вариантами комплектации, сроками и финальной логикой реализации под ваш участок — без шаблонных предложений и без давления.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link href="/kalkulyator-zabora" className="rounded-xl bg-white px-6 py-3 text-sm font-semibold text-brand transition hover:bg-brand-accent hover:text-brand-dark">
              Рассчитать стоимость
            </Link>
            <Link href="/kontakty" className="rounded-xl border border-white/40 px-6 py-3 text-sm font-semibold text-white transition hover:border-white hover:bg-white hover:text-brand-dark">
              Оставить заявку
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
