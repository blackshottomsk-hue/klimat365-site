import Card from "../ui/Card";
import Container from "../ui/Container";
import Section from "../ui/Section";
import SectionTitle from "../ui/SectionTitle";

const steps = [
  {
    title: "Заявка",
    text: "Фиксируем задачу, сроки и ожидания по бюджету, чтобы сразу отсечь неподходящие решения.",
  },
  {
    title: "Консультация",
    text: "Разбираем участок и требования: приватность, ветровая нагрузка, дизайн, эксплуатация.",
  },
  {
    title: "Замер",
    text: "Проводим технический выезд, чтобы исключить ошибки в расчете и риски допработ на объекте.",
  },
  {
    title: "Смета",
    text: "Вы получаете прозрачный расчет по позициям с вариантами комплектации и сроков.",
  },
  {
    title: "Договор",
    text: "Фиксируем объем работ, этапы, стоимость и ответственность сторон в понятной форме.",
  },
  {
    title: "Монтаж",
    text: "Выполняем работы по технологии, с промежуточным контролем и отчетом по ключевым этапам.",
  },
  {
    title: "Сдача",
    text: "Проверяем результат вместе с вами, закрываем документы и даем рекомендации по эксплуатации.",
  },
];

export default function StepsSection() {
  return (
    <Section className="bg-background-light">
      <Container>
        <SectionTitle
          title="Как проходит работа"
          subtitle="Структурированный процесс без хаоса, скрытых этапов и «плавающих» договоренностей."
        />
        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, idx) => (
            <Card key={step.title}>
              <p className="text-xs font-semibold uppercase tracking-wide text-brand">Шаг {idx + 1}</p>
              <p className="mt-2 font-semibold text-text-dark">{step.title}</p>
              <p className="mt-2 text-sm text-text-secondary">{step.text}</p>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}
