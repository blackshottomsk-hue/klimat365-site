import Card from "../ui/Card";
import Container from "../ui/Container";
import Section from "../ui/Section";
import SectionTitle from "../ui/SectionTitle";

const items = [
  "15+ лет в установке заборов и ворот",
  "5000+ монтажей в СПб и Ленобласти",
  "2 собственные монтажные бригады",
  "Собственное производство",
  "Работаем по договору",
  "Гарантия",
  "Фиксированная смета",
  "Качественные материалы",
  "Соблюдение сроков",
];

export default function Advantages() {
  return (
    <Section className="bg-white">
      <Container>
        <SectionTitle title="Почему выбирают нас" />
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => (
            <Card key={item}>
              <p className="text-sm font-semibold text-text-dark">{item}</p>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}
