import Card from "../ui/Card";
import Container from "../ui/Container";
import Section from "../ui/Section";

const cycle = [
  "Консультация",
  "Выезд замерщика",
  "Расчет стоимости",
  "Поставка материалов",
  "Монтаж",
  "Сдача объекта",
];

const audience = [
  "Частных домов",
  "Дач",
  "Коттеджей",
  "Предприятий",
  "ТСЖ",
  "ЖК",
];

export default function TurnkeySection() {
  return (
    <Section className="bg-white">
      <Container className="grid gap-6 lg:grid-cols-2">
        <Card>
          <h2 className="text-3xl font-bold text-text-dark">Заборы под ключ</h2>
          <p className="mt-4 text-text-secondary">
            Мы выполняем полный цикл работ по установке заборов и берем на себя
            весь процесс от первого обращения до сдачи объекта.
          </p>
          <p className="mt-3 text-sm text-text-secondary">
            За 15+ лет в отрасли сформировали стабильную технологию: собственное
            производство, логистика и 2 штатные бригады позволяют соблюдать сроки
            даже в сезон пиковых нагрузок.
          </p>
          <ul className="mt-5 grid gap-2 text-sm text-text-secondary">
            {cycle.map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>
        </Card>
        <Card>
          <h3 className="text-2xl font-bold text-text-dark">Подходит для</h3>
          <ul className="mt-5 grid gap-2 text-sm text-text-secondary sm:grid-cols-2">
            {audience.map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>
        </Card>
      </Container>
    </Section>
  );
}
