import CTASection from "./CTASection";
import GeoCoverageSection from "./GeoCoverageSection";
import Container from "../ui/Container";
import Section from "../ui/Section";
import PageHero from "../ui/PageHero";
import Card from "../ui/Card";
import Link from "next/link";

type PageStubProps = {
  title: string;
  description: string;
};

export default function PageStub({ title, description }: PageStubProps) {
  return (
    <main>
      <PageHero title={title} description={description} />
      <Section>
        <Container className="grid gap-4 md:grid-cols-3">
          {[
            "15+ лет опыта в установке заборов",
            "5000+ выполненных монтажей",
            "Собственное производство и 2 бригады",
          ].map((item) => (
            <Card key={item}>
              <p className="text-sm font-semibold text-text-dark">{item}</p>
              <p className="mt-2 text-sm text-text-secondary">
                Экспертный подход и контроль качества на каждом этапе проекта.
              </p>
            </Card>
          ))}
        </Container>
      </Section>
      <Section className="bg-background-light">
        <Container>
          <h2 className="text-3xl font-bold text-text-dark">Что вы получаете на этой странице</h2>
          <p className="mt-4 max-w-4xl text-text-secondary">
            Прозрачную смету, технически обоснованное решение под ваш участок и
            выполнение работ в согласованный срок с фиксацией в договоре.
          </p>
          <div className="mt-5 flex flex-wrap gap-4 text-sm font-semibold text-brand">
            <Link href="/kalkulyator-zabora" className="underline-offset-2 hover:text-brand-dark hover:underline">
              Рассчитать стоимость
            </Link>
            <Link href="/portfolio" className="underline-offset-2 hover:text-brand-dark hover:underline">
              Посмотреть объекты
            </Link>
            <Link href="/kontakty" className="underline-offset-2 hover:text-brand-dark hover:underline">
              Получить консультацию
            </Link>
          </div>
        </Container>
      </Section>
      <Section>
        <Container className="grid gap-4 md:grid-cols-2">
          <Card>
            <h3 className="text-lg font-semibold text-text-dark">Какие боли клиентов закрываем</h3>
            <ul className="mt-3 grid gap-2 text-sm text-text-secondary">
              <li>• Неясно, почему «дешевле» у конкурента — расшифровываем комплектацию.</li>
              <li>• Страх доплат в процессе — даем детализированную смету до старта работ.</li>
              <li>• Риск переделок — подбираем технологию под конкретный грунт и нагрузки.</li>
              <li>• Сомнения в сроках — фиксируем этапы и точки контроля в договоре.</li>
            </ul>
          </Card>
          <Card>
            <h3 className="text-lg font-semibold text-text-dark">Ответы на типовые возражения</h3>
            <ul className="mt-3 grid gap-2 text-sm text-text-secondary">
              <li>• «Дорого» — показываем, где стоимость оправдана, а где можно оптимизировать.</li>
              <li>• «Сделаю позже» — объясняем сезонные и ценовые риски откладывания.</li>
              <li>• «Не верю в гарантию» — работаем официально, с закрывающими документами.</li>
              <li>• «Я не разбираюсь в материалах» — переводим техчасть на понятный язык.</li>
            </ul>
          </Card>
        </Container>
      </Section>
      <GeoCoverageSection compact />
      <CTASection />
    </main>
  );
}

