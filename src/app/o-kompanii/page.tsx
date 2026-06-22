import type { Metadata } from "next";
import Link from "next/link";
import CTASection from "../../components/sections/CTASection";
import Card from "../../components/ui/Card";
import Container from "../../components/ui/Container";
import PageHero from "../../components/ui/PageHero";
import Section from "../../components/ui/Section";
import { seoPageData } from "../../data/seo/pages";
import { buildMetadata } from "../../lib/seo";

export const metadata: Metadata = buildMetadata(seoPageData.about);

const stats = [
  { value: "2020", label: "год основания" },
  { value: "200+", label: "установленных кондиционеров" },
  { value: "2 года", label: "гарантия на монтаж" },
  { value: "0 ₽", label: "стоимость выезда мастера" },
];

const values = [
  {
    title: "Фиксированная цена",
    text: "Называем стоимость до начала работ и фиксируем её в договоре. Никаких доплат в процессе монтажа — только то, что согласовано.",
  },
  {
    title: "Чистота и аккуратность",
    text: "Работаем в бахилах, застилаем пол и мебель. После монтажа убираем весь строительный мусор. Квартира остаётся в том же состоянии, что и до нашего прихода.",
  },
  {
    title: "Честная диагностика",
    text: "При ремонте называем причину неисправности и стоимость до начала работ. Не навязываем лишних услуг, предлагаем только необходимое.",
  },
  {
    title: "Гарантийные обязательства",
    text: "2 года гарантии на монтажные работы — не на словах, а в договоре. Если после установки возникнут проблемы по нашей вине, устраним бесплатно.",
  },
];

const areas = [
  "Кудрово", "Мурино", "Новосаратовка", "Девяткино",
  "Всеволожск", "Колпино", "Пушкин", "Весь Санкт-Петербург",
];

export default function AboutPage() {
  return (
    <main>
      <PageHero
        title="О компании Климат 365"
        description="Монтаж, обслуживание и ремонт кондиционеров в Санкт-Петербурге и Ленинградской области. Работаем честно, с договором и гарантией."
      />

      <Section>
        <Container>
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h2 className="text-2xl font-bold text-text-dark sm:text-3xl">Кто мы</h2>
              <div className="mt-4 space-y-4 text-sm leading-relaxed text-text-secondary">
                <p>
                  Климат 365 — компания по монтажу, обслуживанию и ремонту кондиционеров в Санкт-Петербурге
                  и Ленинградской области. Работаем с 2020 года под управлением ИП Момунова Дастана.
                </p>
                <p>
                  Специализация — новые ЖК: Кудрово, Мурино, Новосаратовка, Девяткино, Всеволожск,
                  Колпино, Пушкин. Знаем особенности монтажа в современных домах: ограничения управляющих
                  компаний, правила размещения наружных блоков, конструктив стен.
                </p>
                <p>
                  За пять лет установили более 200 кондиционеров. Среди клиентов — жители квартир,
                  владельцы частных домов, небольшие офисы и коммерческие объекты.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {stats.map((s) => (
                <div key={s.label} className="rounded-2xl border border-border bg-white p-6 shadow-card text-center">
                  <div className="text-3xl font-bold text-brand">{s.value}</div>
                  <div className="mt-1 text-sm text-text-secondary">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <Section className="bg-background-light">
        <Container>
          <h2 className="text-2xl font-bold text-text-dark sm:text-3xl">Наш подход</h2>
          <p className="mt-2 text-sm text-text-secondary max-w-2xl">
            Принципы, по которым мы работаем с каждым клиентом — от первого звонка до сдачи объекта.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {values.map((v) => (
              <Card key={v.title}>
                <h3 className="text-base font-semibold text-text-dark">{v.title}</h3>
                <p className="mt-2 text-sm text-text-secondary">{v.text}</p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <h2 className="text-2xl font-bold text-text-dark sm:text-3xl">Команда</h2>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-text-secondary">
            Работают опытные мастера с практическим стажем монтажа сплит-систем от 5 лет.
            Все специалисты прошли обучение по работе с современными хладагентами (R32, R410A)
            и оснащены профессиональным оборудованием: вакуумными насосами, течеискателями,
            манометрическими коллекторами и электроинструментом.
          </p>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-text-secondary">
            Мастер приезжает в согласованное время, выполняет работы аккуратно и в срок,
            объясняет нюансы эксплуатации и отвечает на вопросы после завершения монтажа.
          </p>
        </Container>
      </Section>

      <Section className="bg-background-light">
        <Container>
          <h2 className="text-2xl font-bold text-text-dark sm:text-3xl">Зона работы</h2>
          <p className="mt-2 text-sm text-text-secondary">
            Выезжаем по Санкт-Петербургу и ближайшей Ленинградской области. Особенно активно
            работаем в новых жилых комплексах.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {areas.map((area) => (
              <span
                key={area}
                className="rounded-full border border-border bg-white px-4 py-1.5 text-sm font-medium text-text-dark shadow-sm"
              >
                {area}
              </span>
            ))}
          </div>
          <p className="mt-4 text-sm text-text-secondary">
            Если вашего района нет в списке — позвоните, уточним возможность выезда.
          </p>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="rounded-2xl border border-border bg-white p-6 shadow-card sm:p-8">
            <h2 className="text-xl font-bold text-text-dark sm:text-2xl">Как с нами работать</h2>
            <div className="mt-6 grid gap-6 sm:grid-cols-3">
              {[
                { step: "1", title: "Заявка", text: "Позвоните или оставьте заявку на сайте. Обсудим задачу, уточним адрес и удобное время." },
                { step: "2", title: "Выезд мастера", text: "Мастер осмотрит помещение, предложит оптимальное место установки и назовёт точную стоимость." },
                { step: "3", title: "Монтаж и сдача", text: "Подписываем договор, выполняем монтаж в согласованный день. Проверяем работу, подписываем акт." },
              ].map((item) => (
                <div key={item.step} className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand text-sm font-bold text-white">
                    {item.step}
                  </div>
                  <div>
                    <div className="font-semibold text-text-dark">{item.title}</div>
                    <p className="mt-1 text-sm text-text-secondary">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/kontakty"
                className="rounded-xl bg-brand px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand/90"
              >
                Оставить заявку
              </Link>
              <Link
                href="/ceny"
                className="rounded-xl border border-border px-6 py-3 text-sm font-semibold text-text-dark transition hover:border-brand"
              >
                Посмотреть цены
              </Link>
            </div>
          </div>
        </Container>
      </Section>

      <CTASection />
    </main>
  );
}
