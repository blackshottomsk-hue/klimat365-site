import Card from "../ui/Card";
import Container from "../ui/Container";
import Section from "../ui/Section";

const clients = [
  "Застройщиками",
  "Предприятиями",
  "ТСЖ",
  "ЖК",
  "Строительными компаниями",
];

const offers = [
  "Большие объемы",
  "Работа по договору",
  "Безналичный расчет",
  "Выполнение в срок",
];

export default function B2BSection() {
  return (
    <Section className="bg-background-light">
      <Container className="grid gap-6 lg:grid-cols-2">
        <Card>
          <h2 className="text-3xl font-bold text-text-dark">Для компаний</h2>
          <p className="mt-4 text-text-secondary">
            Работаем с юридическими лицами по долгосрочным и поэтапным проектам.
            Ведем объекты от ТЗ до закрывающих документов.
          </p>
          <ul className="mt-4 grid gap-2 text-sm text-text-secondary">
            {clients.map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>
        </Card>
        <Card className="border-0 bg-[linear-gradient(135deg,#1E5F2C,#2E7D3E)] text-white hover:border-0 hover:shadow-lg">
          <h3 className="text-2xl font-bold text-white">Предлагаем</h3>
          <ul className="mt-4 grid gap-2 text-sm text-white/90">
            {offers.map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>
          <p className="mt-4 text-sm text-white/85">
            Производим и комплектуем объекты своими силами, поэтому прогнозируем
            сроки и контролируем качество на всех этапах.
          </p>
        </Card>
      </Container>
    </Section>
  );
}
