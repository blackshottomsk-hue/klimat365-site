import Button from "../ui/Button";
import Container from "../ui/Container";
import OutlineButton from "../ui/OutlineButton";
import Section from "../ui/Section";

export default function HeroSection() {
  return (
    <Section className="bg-brand-dark text-white">
      <Container>
        <h1 className="max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
          Установка заборов под ключ в Санкт-Петербурге и Ленинградской области
        </h1>
        <p className="mt-5 max-w-2xl text-white/85">
          Каркасный блок главной страницы. Финальные офферы и фактические преимущества добавим на следующем шаге.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button>Рассчитать стоимость</Button>
          <OutlineButton className="border-white/45 text-white hover:border-white hover:bg-white hover:text-brand">
            Вызвать замерщика
          </OutlineButton>
        </div>
      </Container>
    </Section>
  );
}
