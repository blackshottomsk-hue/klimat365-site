import Card from "../ui/Card";
import Container from "../ui/Container";
import Section from "../ui/Section";
import SectionTitle from "../ui/SectionTitle";

const items = ["Собственные бригады", "Гарантия качества", "Работа по договору", "Соблюдение сроков"];

export default function AdvantagesSection() {
  return (
    <Section className="bg-background-light">
      <Container>
        <SectionTitle title="Преимущества" subtitle="Базовый шаблон секции преимуществ." />
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => (
            <Card key={item}>
              <p className="font-medium text-text-dark">{item}</p>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}
