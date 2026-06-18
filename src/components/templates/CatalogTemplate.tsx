import CTASection from "../sections/CTASection";
import GeoCoverageSection from "../sections/GeoCoverageSection";
import PageHero from "../ui/PageHero";
import Card from "../ui/Card";
import Container from "../ui/Container";
import Section from "../ui/Section";
import Link from "next/link";

type CatalogItem = { title: string; href: string; description: string };

type CatalogTemplateProps = {
  title: string;
  description: string;
  items: CatalogItem[];
  heroImage?: string;
};

export default function CatalogTemplate({ title, description, items, heroImage }: CatalogTemplateProps) {
  return (
    <main>
      <PageHero title={title} description={description} backgroundImage={heroImage} />
      <Section>
        <Container>
          <p className="max-w-4xl text-text-secondary">
            В каталоге собраны решения, которые команда ZABORIO отработала на
            тысячах объектов в СПб и Ленинградской области. Для каждой
            подкатегории есть отдельная страница с техническими нюансами,
            ценовыми ориентирами и вариантами комплектации.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((item) => (
              <Card key={item.href}>
                <h3 className="text-lg font-semibold text-text-dark">{item.title}</h3>
                <p className="mt-2 text-sm text-text-secondary">{item.description}</p>
                <Link
                  href={item.href}
                  className="mt-4 inline-block text-sm font-semibold text-brand underline-offset-2 transition hover:text-brand-dark hover:underline"
                >
                  Перейти →
                </Link>
              </Card>
            ))}
          </div>
        </Container>
      </Section>
      <Section className="bg-brand-dark text-white">
        <Container className="grid gap-5 md:grid-cols-3">
          <div>
            <h2 className="text-3xl font-bold text-white">Почему выбрать ZABORIO</h2>
          </div>
          <div className="rounded-xl border border-white/15 bg-brand/35 p-4 backdrop-blur-sm">
            <p className="text-sm font-semibold text-brand-accent">15+ лет опыта</p>
            <p className="mt-2 text-sm text-white/85">Понимаем специфику грунтов и условий региона.</p>
          </div>
          <div className="rounded-xl border border-white/15 bg-brand/35 p-4 backdrop-blur-sm">
            <p className="text-sm font-semibold text-brand-accent">5000+ монтажей</p>
            <p className="mt-2 text-sm text-white/85">Решения проверены на частных и коммерческих объектах.</p>
          </div>
          <div className="rounded-xl border border-white/15 bg-brand/35 p-4 backdrop-blur-sm md:col-start-2">
            <p className="text-sm font-semibold text-brand-accent">2 бригады + производство</p>
            <p className="mt-2 text-sm text-white/85">Контролируем сроки и качество без посредников.</p>
          </div>
          <div className="rounded-xl border border-white/15 bg-brand/35 p-4 backdrop-blur-sm">
            <p className="text-sm font-semibold text-brand-accent">Работа по договору</p>
            <p className="mt-2 text-sm text-white/85">Фиксируем объем, цену и этапы выполнения работ.</p>
          </div>
        </Container>
      </Section>
      <Section>
        <Container className="grid gap-4 md:grid-cols-2">
          <Card>
            <h3 className="text-xl font-semibold text-text-dark">Как выбрать без риска переплаты</h3>
            <p className="mt-2 text-sm text-text-secondary">
              Начинаем не с «самого дорогого», а с цели: приватность, безопасность, внешний вид,
              срок службы и бюджет. На этой основе показываем 2-3 рабочих варианта, чтобы решение
              было осознанным и экономически оправданным.
            </p>
          </Card>
          <Card>
            <h3 className="text-xl font-semibold text-text-dark">Что важно проверить в любом КП</h3>
            <ul className="mt-2 grid gap-2 text-sm text-text-secondary">
              <li>• Полная комплектация по материалам и узлам, а не только «цена за метр».</li>
              <li>• Технология монтажа под ваш грунт и реальные нагрузки.</li>
              <li>• Этапность, сроки и ответственность в договоре.</li>
              <li>• Гарантийные условия и документы на выполненные работы.</li>
            </ul>
          </Card>
        </Container>
      </Section>
      <GeoCoverageSection compact />
      <CTASection />
    </main>
  );
}

