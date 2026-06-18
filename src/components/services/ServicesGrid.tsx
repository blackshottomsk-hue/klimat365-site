import Link from "next/link";
import Card from "../ui/Card";
import Container from "../ui/Container";
import Section from "../ui/Section";
import SectionTitle from "../ui/SectionTitle";
import Button from "../ui/Button";
import OutlineButton from "../ui/OutlineButton";

const services = [
  {
    title: "Заборы из евроштакетника",
    description:
      "Эстетичные и долговечные решения с точной геометрией, защитным покрытием и аккуратным монтажом.",
    href: "/zabory/iz-evroshtaketnika",
    icon: "▦",
  },
  {
    title: "Заборы из профнастила",
    description:
      "Практичные ограждения с высоким уровнем приватности и расчетом под ветровые нагрузки региона.",
    href: "/zabory/iz-profnastila",
    icon: "▤",
  },
  {
    title: "3D заборы",
    description:
      "Современный вариант для коттеджей, ЖК и коммерческих объектов с антикоррозийной защитой.",
    href: "/zabory/3d-setka",
    icon: "▩",
  },
  {
    title: "Заборы из сетки рабицы",
    description:
      "Экономичное решение для дачи и больших периметров с быстрым монтажом и надежной фиксацией.",
    href: "/zabory/iz-rabicy",
    icon: "▧",
  },
];

export default function ServicesGrid() {
  return (
    <Section className="bg-background-light">
      <Container>
        <SectionTitle title="Основные услуги" />
        <p className="mt-4 max-w-3xl text-text-secondary">
          Выполняем монтаж по стандартам, которые отработаны более чем на 5000
          объектах. Для каждой услуги подбираем оптимальную конструкцию под
          задачи, грунт и бюджет.
        </p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {services.map((service) => (
            <Card key={service.title} className="flex h-full flex-col">
              <p className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-brand/10 text-lg text-brand">
                {service.icon}
              </p>
              <h3 className="mt-4 text-lg font-semibold text-text-dark">{service.title}</h3>
              <p className="mt-2 text-sm text-text-secondary">{service.description}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                <Link href={service.href}>
                  <OutlineButton>Подробнее</OutlineButton>
                </Link>
                <Link href="/kalkulyator-zabora">
                  <Button>Рассчитать</Button>
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}
