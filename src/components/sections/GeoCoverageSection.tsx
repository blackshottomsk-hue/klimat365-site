import Container from "../ui/Container";
import Section from "../ui/Section";

type GeoCoverageSectionProps = {
  title?: string;
  compact?: boolean;
};

export default function GeoCoverageSection({
  title = "Карта зоны выезда",
}: GeoCoverageSectionProps) {
  return (
    <Section className="bg-background-light">
      <Container>
        <h2 className="text-3xl font-bold text-text-dark sm:text-4xl">{title}</h2>
        <p className="mt-4 max-w-3xl text-text-secondary">
          Работаем по Санкт-Петербургу и Ленинградской области, с приоритетным выездом в южные районы города и ближайшие направления по ЛО. На этапе звонка сразу подтверждаем доступность бригады по вашему адресу.
        </p>
        <div className="mt-6 overflow-hidden rounded-2xl border border-border shadow-card">
          <iframe
            src="https://yandex.ru/map-widget/v1/?um=constructor%3A68bd3789a780d3f7d5018ff143d573e7c7e125e6c2d7029c94d61137949b3fc9&source=constructor&scroll=true"
            width="100%"
            height="420"
            frameBorder="0"
            allowFullScreen
            title="Карта зоны выезда ZABORIO"
            style={{ display: "block" }}
          />
        </div>
      </Container>
    </Section>
  );
}
