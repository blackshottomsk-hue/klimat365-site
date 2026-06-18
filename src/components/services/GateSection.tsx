import Link from "next/link";
import Card from "../ui/Card";
import Container from "../ui/Container";
import Section from "../ui/Section";
import Button from "../ui/Button";

const gateTypes = [
  "Откатные ворота",
  "Распашные ворота",
  "Ворота с калиткой",
  "Калитки из профнастила",
  "Калитки из штакетника",
];

const extra = ["Автоматика", "Усиленные конструкции", "Под ключ"];

export default function GateSection() {
  return (
    <Section className="bg-white">
      <Container className="grid gap-6 lg:grid-cols-2">
        <Card>
          <h2 className="text-3xl font-bold text-text-dark">Ворота и калитки</h2>
          <p className="mt-4 text-text-secondary">Устанавливаем:</p>
          <ul className="mt-3 grid gap-2 text-sm text-text-secondary">
            {gateTypes.map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>
        </Card>
        <Card className="border-0 bg-brand-dark text-white hover:border-0">
          <h3 className="text-2xl font-bold text-white">Дополнительно</h3>
          <ul className="mt-4 grid gap-2 text-sm text-white/85">
            {extra.map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>
          <Link href="/vorota" className="mt-6 inline-block">
            <Button className="bg-white text-brand hover:bg-brand-accent hover:text-brand-dark">Перейти в раздел ворот</Button>
          </Link>
        </Card>
      </Container>
    </Section>
  );
}
