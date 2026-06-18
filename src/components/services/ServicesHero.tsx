import Container from "../ui/Container";
import Section from "../ui/Section";
import Link from "next/link";
import Button from "../ui/Button";
import OutlineButton from "../ui/OutlineButton";

const facts = [
  "15+ лет практики в монтаже заборов",
  "5000+ реализованных объектов в СПб и ЛО",
  "2 собственные монтажные бригады",
  "Собственное производство металлоконструкций",
];

export default function ServicesHero() {
  return (
    <Section className="bg-brand-dark text-white">
      <Container>
        <h1 className="max-w-5xl text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
          Установка заборов под ключ в Санкт-Петербурге и Ленинградской области
        </h1>
        <p className="mt-5 max-w-3xl text-white/85">
          ZABORIO - современный сервис установки заборов. Работаем с частными
          клиентами и компаниями, даем прозрачную смету и четкий план работ без
          размытых формулировок.
        </p>
        <p className="mt-3 max-w-3xl text-white/70">
          Контролируем качество на каждом этапе и фиксируем обязательства по
          срокам и комплектации в договоре.
        </p>
        <ul className="mt-6 grid gap-3 sm:grid-cols-2">
          {facts.map((fact) => (
            <li
              key={fact}
              className="rounded-xl border border-white/12 bg-brand/35 px-4 py-3 text-sm text-white/95"
            >
              {fact}
            </li>
          ))}
        </ul>
        <div className="mt-7 flex flex-wrap gap-3">
          <Link href="/kalkulyator-zabora">
            <Button>Рассчитать стоимость</Button>
          </Link>
          <Link href="/zamershchik-besplatno">
            <OutlineButton className="border-white/45 text-white hover:border-white hover:bg-white hover:text-brand">
              Вызвать замерщика
            </OutlineButton>
          </Link>
        </div>
      </Container>
    </Section>
  );
}
