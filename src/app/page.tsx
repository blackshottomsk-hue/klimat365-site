import type { Metadata } from "next";
import { absoluteUrl, breadcrumbSchema, buildMetadata } from "../lib/seo";
import Link from "next/link";
import HeroSection from "../components/home/HeroSection";
import StatsSection from "../components/home/StatsSection";

export const metadata: Metadata = buildMetadata({
  title: "Монтаж и обслуживание кондиционеров в СПб и Ленобласти — Климат 365",
  description:
    "Установка, обслуживание и ремонт кондиционеров в Санкт-Петербурге и Ленинградской области. Работаем в новых ЖК: Кудрово, Мурино, Новосаратовка. Фиксированная цена, договор, гарантия 2 года.",
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
      <StatsSection />

      {/* Услуги */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-text-dark sm:text-4xl">Наши услуги</h2>
            <p className="mx-auto mt-4 max-w-2xl text-text-secondary">
              Полный цикл работ с кондиционерами — от подбора оборудования до гарантийного сервиса
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Монтаж кондиционеров",
                desc: "Устанавливаем сплит-системы любых марок в квартирах, домах и офисах. Прокладка трассы, подключение, тестирование всех режимов.",
                href: "/uslugi/montazh-kondicionerov",
                price: "от 17 000 ₽",
                icon: "🔧",
                features: ["Медная трасса в комплекте", "Все расходники включены", "Гарантия 2 года"],
              },
              {
                title: "Обслуживание и чистка",
                desc: "Промывка теплообменника, чистка фильтров и дренажа, дезинфекция, заправка фреоном. Продлевает срок службы на годы.",
                href: "/uslugi/obsluzhivanie-kondicionerov",
                price: "от 2 500 ₽",
                icon: "🧹",
                features: ["Полная разборка блока", "Дезинфекция включена", "Проверка фреона"],
              },
              {
                title: "Ремонт кондиционеров",
                desc: "Диагностика и ремонт любых неисправностей. Не охлаждает, течёт, шумит, не включается — выезд мастера в день обращения.",
                href: "/uslugi/remont-kondicionerov",
                price: "от 1 500 ₽",
                icon: "⚙️",
                features: ["Диагностика засчитывается", "Все марки и модели", "Гарантия на ремонт"],
              },
            ].map((item) => (
              <article key={item.title} className="card-hover group flex flex-col rounded-2xl border border-border bg-background-light p-6 shadow-card">
                <div className="mb-4 flex items-center justify-between">
                  <span className="text-4xl">{item.icon}</span>
                  <span className="rounded-full bg-brand/10 px-3 py-1 text-sm font-bold text-brand">{item.price}</span>
                </div>
                <h3 className="text-xl font-bold text-text-dark">{item.title}</h3>
                <p className="mt-3 flex-1 text-sm text-text-secondary">{item.desc}</p>
                <ul className="mt-4 space-y-1">
                  {item.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-text-secondary">
                      <span className="text-brand">✓</span>{f}
                    </li>
                  ))}
                </ul>
                <Link href={item.href} className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-brand transition group-hover:gap-2">
                  Подробнее <span>→</span>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Почему мы */}
      <section className="bg-background-light py-20">
        <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-text-dark sm:text-4xl">
              Почему выбирают Климат 365
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-text-secondary">
              Мы знаем, что вам важно — и строим работу именно так
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {[
              { title: "Цена фиксируется до начала", text: "Называем точную стоимость на выезде. Никаких «это выяснилось в процессе» и доплат по факту.", icon: "💰" },
              { title: "Работаем в новых ЖК", text: "Знаем особенности монтажа в новостройках: согласование с УК, фасадные работы, монтаж на высоких этажах.", icon: "🏗️" },
              { title: "Собственная бригада", text: "Все работы выполняет наша команда. Несём полную ответственность от прокладки трассы до запуска.", icon: "👷" },
              { title: "Гарантия 2 года", text: "Гарантийные обязательства прописаны в договоре. Если что-то пойдёт не так — приедем и устраним бесплатно.", icon: "🛡️" },
              { title: "Договор и акт", text: "Работаем официально: договор с фиксированной ценой, акт выполненных работ и гарантийный талон.", icon: "📋" },
              { title: "Обслуживаем то, что установили", text: "Берём кондиционеры на сервисное обслуживание: чистка, заправка, диагностика по удобному графику.", icon: "🔄" },
            ].map((item) => (
              <article key={item.title} className="card-hover flex gap-4 rounded-2xl border border-border bg-white p-6 shadow-card">
                <span className="mt-1 shrink-0 text-2xl">{item.icon}</span>
                <div>
                  <h3 className="font-bold text-text-dark">{item.title}</h3>
                  <p className="mt-2 text-sm text-text-secondary">{item.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Калькулятор баннер */}
      <section className="bg-gradient-to-r from-brand-dark to-brand py-16">
        <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-8 text-center md:flex-row md:text-left">
            <div>
              <h2 className="text-2xl font-bold text-white sm:text-3xl">
                Хотите узнать стоимость заранее?
              </h2>
              <p className="mt-3 max-w-xl text-white/75">
                Воспользуйтесь онлайн-калькулятором — выберите тип помещения, площадь и опции. Результат за 1 минуту, без звонков.
              </p>
            </div>
            <div className="shrink-0">
              <Link
                href="/kalkulyator"
                className="btn-glow inline-flex items-center gap-2 rounded-xl bg-white px-8 py-4 font-bold text-brand transition hover:bg-brand-accent"
              >
                ⚡ Открыть калькулятор
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Как работаем */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-text-dark sm:text-4xl">Как мы работаем</h2>
            <p className="mx-auto mt-4 max-w-2xl text-text-secondary">
              Прозрачный процесс от заявки до запуска — вы знаете что происходит на каждом этапе
            </p>
          </div>
          <div className="relative">
            <div className="absolute left-[2.75rem] top-0 hidden h-full w-px bg-border md:block" />
            <div className="grid gap-5">
              {[
                { step: "01", title: "Заявка и консультация", text: "Оставляете заявку или звоните. Уточняем площадь помещения, этаж, тип объекта, пожелания по марке. Помогаем подобрать оборудование под задачу и бюджет.", duration: "10–15 минут" },
                { step: "02", title: "Бесплатный выезд мастера", text: "Приезжаем на объект, осматриваем место монтажа, планируем трассу, оцениваем сложность работ. Называем точную стоимость на месте — без сюрпризов потом.", duration: "1–2 дня от заявки" },
                { step: "03", title: "Договор с фиксированной ценой", text: "Оформляем договор с точной стоимостью, сроками и гарантийными обязательствами. Никаких формулировок «по факту» — всё прописано до начала работ.", duration: "В день согласования" },
                { step: "04", title: "Монтаж кондиционера", text: "Устанавливаем внутренний и наружный блок, прокладываем трассу, подключаем электрику и дренаж. На объекте оставляем порядок — весь мусор забираем с собой.", duration: "1 день в большинстве случаев" },
                { step: "05", title: "Запуск, настройка и сдача", text: "Тестируем все режимы, проверяем давление фреона, объясняем правила эксплуатации. Подписываем акт и выдаём гарантийный документ.", duration: "Гарантия 2 года на монтаж" },
              ].map((item) => (
                <article key={item.step} className="relative flex gap-6 rounded-2xl border border-border bg-background-light p-6 shadow-card md:gap-8">
                  <div className="relative z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand text-sm font-bold text-white shadow-md">
                    {item.step}
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-start justify-between gap-2">
                      <h3 className="text-lg font-bold text-text-dark">{item.title}</h3>
                      <span className="shrink-0 rounded-full bg-white px-3 py-1 text-xs text-text-secondary border border-border">
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
            <Link href="/kontakty" className="btn-glow rounded-xl bg-brand px-6 py-3 text-sm font-semibold text-white transition">
              Оставить заявку
            </Link>
            <Link href="/ceny" className="rounded-xl border border-border px-6 py-3 text-sm font-semibold text-text-dark transition hover:border-brand hover:text-brand">
              Посмотреть цены
            </Link>
          </div>
        </div>
      </section>

      {/* Районы */}
      <section className="bg-background-light py-16">
        <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-text-dark sm:text-4xl">Работаем по всему СПб и Ленобласти</h2>
          <p className="mt-4 max-w-2xl text-text-secondary">
            Приоритетные направления — новые жилые комплексы на севере и востоке города. Выезжаем в день обращения.
          </p>
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { name: "Кудрово", desc: "ЖК Охта Парк, Звёздный, Новый Оккервиль", href: "/rajony/kudrovo" },
              { name: "Мурино", desc: "ЖК Мурино, Девяткино, Новое Мурино", href: "/rajony/murino" },
              { name: "Новосаратовка", desc: "ЖК Riverside, Цветной город", href: "/rajony/novosuratovka" },
              { name: "Девяткино", desc: "Зона Мурино–Девяткино", href: "/rajony/devyatkino" },
              { name: "Всеволожск", desc: "Город и ближайший пригород", href: "/rajony/vsevolozhsk" },
              { name: "Колпино", desc: "Жилые кварталы и частный сектор", href: "/rajony/kolpino" },
              { name: "Пушкин", desc: "Коттеджи и новые ЖК", href: "/rajony/pushkin" },
              { name: "Весь СПб", desc: "Работаем по всему городу", href: "/kontakty" },
            ].map((area) => (
              <Link key={area.name} href={area.href} className="card-hover rounded-xl border border-border bg-white p-4 shadow-card hover:border-brand/40">
                <p className="font-bold text-text-dark">{area.name}</p>
                <p className="mt-1 text-xs text-text-secondary">{area.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-text-dark sm:text-4xl">Частые вопросы</h2>
          <p className="mt-4 max-w-3xl text-text-secondary">
            Отвечаем на главные вопросы до выезда мастера
          </p>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {[
              { q: "Сколько стоит установка кондиционера?", a: "Монтаж сплит-системы в СПб начинается от 17 000 ₽ — стандартная установка с трассой 3 м, расходниками и тестированием. Точную цену называем после бесплатного выезда." },
              { q: "Вы работаете в новостройках?", a: "Да, это наше основное направление. Знаем специфику: согласование с управляющей компанией, фасадные ограничения, монтаж на верхних этажах." },
              { q: "Как часто нужно обслуживать кондиционер?", a: "1–2 раза в год: перед летним сезоном (апрель–май) и осенью. Регулярное ТО продлевает срок службы и снижает расход электроэнергии на 15–20%." },
              { q: "Что делать если кондиционер не охлаждает?", a: "Причин может быть несколько: грязные фильтры, утечка фреона, загрязнение теплообменника. Вызовите мастера — диагностика 1 500 ₽, засчитывается в стоимость ремонта." },
            ].map((item) => (
              <article key={item.q} className="rounded-2xl border border-border bg-background-light p-5 shadow-card">
                <h3 className="font-bold text-text-dark">{item.q}</h3>
                <p className="mt-2 text-sm text-text-secondary">{item.a}</p>
              </article>
            ))}
          </div>
          <Link href="/faq" className="mt-6 inline-block text-sm font-semibold text-brand hover:text-brand-dark">
            Смотреть все вопросы →
          </Link>
        </div>
      </section>

      {/* Отзывы */}
      <section className="bg-background-light py-20">
        <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-text-dark sm:text-4xl">Отзывы клиентов</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {[
              { author: "Антон К.", area: "ЖК Новосаратовка", service: "Монтаж", text: "Установили сплит в новостройке. Мастер приехал в день обращения, всё объяснил, смонтировал аккуратно. Цена совпала с той, что назвали по телефону — без лишних доплат.", rating: 5 },
              { author: "Светлана М.", area: "Кудрово", service: "Обслуживание", text: "Обратились по рекомендации соседей. Мастер пришёл с инструментами и химией, разобрал блок, всё промыл и продезинфицировал. Кондиционер стал работать тише и холоднее.", rating: 5 },
              { author: "Игорь В.", area: "Мурино", service: "Ремонт", text: "Кондиционер перестал охлаждать. Мастер приехал на следующий день, нашёл утечку, дозаправил. Работает уже второй сезон. Гарантию дали письменно.", rating: 5 },
            ].map((item) => (
              <article key={item.author} className="card-hover rounded-2xl border border-border bg-white p-6 shadow-card">
                <div className="flex items-center justify-between">
                  <span className="text-yellow-400">{"★".repeat(item.rating)}</span>
                  <span className="rounded-full bg-background-light px-2 py-1 text-xs text-text-secondary">{item.service}</span>
                </div>
                <p className="mt-3 text-sm text-text-secondary">{item.text}</p>
                <div className="mt-4 border-t border-border pt-3">
                  <p className="text-sm font-bold text-text-dark">{item.author}</p>
                  <p className="text-xs text-text-secondary">{item.area}</p>
                </div>
              </article>
            ))}
          </div>
          <Link href="/otzyvy" className="mt-6 inline-block text-sm font-semibold text-brand hover:text-brand-dark">
            Смотреть все отзывы →
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-dark py-20">
        <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Нужен кондиционер в СПб или Ленобласти?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-white/75">
            Оставьте заявку — мастер выедет бесплатно, назовёт точную цену и выполнит монтаж в удобное для вас время.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link href="/kontakty" className="btn-glow rounded-xl bg-white px-8 py-4 font-bold text-brand transition hover:bg-brand-accent">
              Оставить заявку
            </Link>
            <Link href="/kalkulyator" className="rounded-xl border border-white/30 px-8 py-4 font-semibold text-white transition hover:border-white hover:bg-white/10">
              Рассчитать стоимость
            </Link>
            <a href="tel:+79039522177" className="rounded-xl border border-white/30 px-8 py-4 font-semibold text-white transition hover:border-white hover:bg-white/10">
              +7 (903) 952-21-77
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
