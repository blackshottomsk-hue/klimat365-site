import Card from "../ui/Card";
import Container from "../ui/Container";
import Section from "../ui/Section";
import SectionTitle from "../ui/SectionTitle";
import Link from "next/link";

const items = [
  {
    title: "Монтаж на винтовых сваях",
    description: "Быстрый монтаж без мокрых процессов для сложных грунтов.",
    advantages: "Скорость, устойчивость, минимум земляных работ.",
    when: "Подходит для пучинистых и проблемных участков.",
  },
  {
    title: "Монтаж с бутованием щебнем",
    description: "Практичное решение с хорошим дренажом вокруг столба.",
    advantages: "Экономичность и надежная фиксация конструкции.",
    when: "Для дачных и частных участков с умеренной нагрузкой.",
  },
  {
    title: "Бетонирование столбов",
    description: "Классический способ установки с высокой прочностью.",
    advantages: "Жесткость, долговечность и устойчивость к нагрузкам.",
    when: "Для капитальных заборов и воротных групп.",
  },
  {
    title: "Монтаж на ленточном фундаменте",
    description: "Основание для массивных и статусных ограждений.",
    advantages: "Максимальная надежность и аккуратный внешний вид.",
    when: "Для объектов с высокими требованиями к капитальности.",
  },
];

export default function InstallationTypes() {
  return (
    <Section className="bg-background-light">
      <Container>
        <SectionTitle title="Типы установки" />
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {items.map((item) => (
            <Card key={item.title}>
              <h3 className="text-xl font-semibold text-text-dark">{item.title}</h3>
              <p className="mt-3 text-sm text-text-secondary">{item.description}</p>
              <p className="mt-3 text-sm text-text-secondary">
                <span className="font-semibold text-text-dark">Преимущества:</span> {item.advantages}
              </p>
              <p className="mt-2 text-sm text-text-secondary">
                <span className="font-semibold text-text-dark">Когда применяется:</span> {item.when}
              </p>
            </Card>
          ))}
        </div>
        <div className="mt-6 flex flex-wrap gap-4 text-sm">
          <Link href="/montazh-zaborov" className="font-semibold text-brand underline-offset-2 hover:text-brand-dark hover:underline">
            Подробнее о монтаже
          </Link>
          <Link href="/tehnologii-montazha" className="font-semibold text-brand underline-offset-2 hover:text-brand-dark hover:underline">
            Технологии монтажа
          </Link>
        </div>
      </Container>
    </Section>
  );
}
