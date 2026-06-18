import Card from "../ui/Card";
import Container from "../ui/Container";
import Section from "../ui/Section";
import SectionTitle from "../ui/SectionTitle";

export default function PortfolioGridSection() {
  const portfolioItems = [
    { title: "Профнастил С20", details: "Частный дом, 48 м, монтаж с бетонированием" },
    { title: "Евроштакетник", details: "Коттеджный участок, 36 м, единый стиль с воротами" },
    { title: "3D-сетка", details: "ТСЖ, 110 м, поэтапная установка в действующем дворе" },
    { title: "Рабица", details: "Дачный участок, 62 м, бюджетное решение под сезонную эксплуатацию" },
    { title: "Откатные ворота", details: "Частный объект, проезд 4 м, автоматика и пусконаладка" },
    { title: "Ленточный фундамент", details: "Коммерческий объект, усиленное основание под нагрузку" },
  ];

  return (
    <Section>
      <Container>
        <SectionTitle title="Портфолио" subtitle="Примеры реализованных проектов с краткими параметрами и типом решения." />
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {portfolioItems.map((item, idx) => (
            <Card key={item.title}>
              <div className="h-36 rounded-xl bg-background-light" />
              <p className="mt-4 font-semibold text-text-dark">Объект {idx + 1}: {item.title}</p>
              <p className="mt-2 text-sm text-text-secondary">{item.details}</p>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}
