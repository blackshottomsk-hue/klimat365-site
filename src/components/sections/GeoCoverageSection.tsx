import Container from "../ui/Container";
import Section from "../ui/Section";

type GeoCoverageSectionProps = {
  title?: string;
  compact?: boolean;
};

export default function GeoCoverageSection({
  title = "Зона работы",
}: GeoCoverageSectionProps) {
  return (
    <Section className="bg-background-light">
      <Container>
        <h2 className="text-3xl font-bold text-text-dark sm:text-4xl">{title}</h2>
        <p className="mt-4 max-w-3xl text-text-secondary">
          Выезжаем по Санкт-Петербургу и Ленинградской области. Особенно активно работаем в новых жилых комплексах на севере и востоке города. На этапе звонка сразу подтверждаем доступность мастера по вашему адресу.
        </p>
        <div className="mt-6 flex flex-wrap gap-2">
          {["Кудрово", "Мурино", "Новосаратовка", "Девяткино", "Всеволожск", "Колпино", "Пушкин", "Весь Санкт-Петербург"].map((area) => (
            <span key={area} className="rounded-full border border-border bg-white px-4 py-1.5 text-sm text-text-dark">
              {area}
            </span>
          ))}
        </div>
        <p className="mt-4 text-sm text-text-secondary">Если вашего района нет в списке — позвоните, уточним возможность выезда.</p>
      </Container>
    </Section>
  );
}
