import Card from "../ui/Card";
import Container from "../ui/Container";
import Section from "../ui/Section";
import SectionTitle from "../ui/SectionTitle";

export default function ServicesGridSection() {
  const services = [
    {
      title: "Заборы из профнастила",
      description: "Практичное решение для приватности и надежной защиты периметра с прогнозируемым бюджетом.",
    },
    {
      title: "Заборы из евроштакетника",
      description: "Современный внешний вид, гибкая настройка приватности и аккуратная геометрия по всей линии ограждения.",
    },
    {
      title: "3D-сетка",
      description: "Быстрый монтаж и оптимальный ресурс для частных и корпоративных объектов с протяженным периметром.",
    },
    {
      title: "Сетка рабица",
      description: "Экономичный и рациональный вариант для дачи, технических зон и объектов с ограниченным бюджетом.",
    },
    {
      title: "Откатные ворота",
      description: "Удобный въезд для узких проездов и регулярной эксплуатации, с подготовкой под автоматику.",
    },
    {
      title: "Распашные ворота",
      description: "Классическая конструкция с надежной механикой и возможностью интеграции в любой стиль участка.",
    },
    {
      title: "Монтаж на винтовых сваях",
      description: "Подходит для сложных грунтов и позволяет быстро получить устойчивое основание без долгих мокрых процессов.",
    },
    {
      title: "Монтаж с бетонированием",
      description: "Капитальное решение для объектов с повышенной нагрузкой и долгосрочными требованиями к стабильности.",
    },
  ];

  return (
    <Section>
      <Container>
        <SectionTitle title="Услуги" subtitle="Ключевые направления монтажа заборов, ворот и калиток под частные и B2B задачи." />
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <Card key={service.title}>
              <p className="text-sm font-semibold text-text-dark">{service.title}</p>
              <p className="mt-2 text-sm text-text-secondary">{service.description}</p>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}
