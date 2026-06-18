import Card from "../ui/Card";
import Container from "../ui/Container";
import Section from "../ui/Section";
import SectionTitle from "../ui/SectionTitle";

const steps = [
  "Заявка",
  "Консультация",
  "Замер",
  "Расчет",
  "Договор",
  "Монтаж",
  "Сдача",
];

export default function Steps() {
  return (
    <Section className="bg-background-light">
      <Container>
        <SectionTitle title="Этапы работы" />
        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <Card key={step}>
              <p className="text-xs font-semibold uppercase tracking-wide text-brand">
                Этап {index + 1}
              </p>
              <p className="mt-2 text-lg font-semibold text-text-dark">{step}</p>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}
