import Link from "next/link";
import Button from "../ui/Button";
import OutlineButton from "../ui/OutlineButton";
import Card from "../ui/Card";
import Container from "../ui/Container";
import Input from "../ui/Input";
import Section from "../ui/Section";
import Textarea from "../ui/Textarea";

export default function CTA() {
  return (
    <Section className="bg-background-light">
      <Container>
        <Card className="border-border bg-white">
          <h2 className="text-3xl font-bold text-text-dark">
            Получите прозрачный расчет стоимости
          </h2>
          <p className="mt-3 max-w-3xl text-text-secondary">
            Подготовим технически обоснованное предложение под ваш участок:
            подберем конструкцию, способ монтажа и комплектацию с учетом бюджета.
          </p>
          <form className="mt-6 grid gap-3">
            <Input placeholder="Имя" />
            <Input placeholder="Телефон" />
            <Textarea rows={4} placeholder="Комментарий" />
            <div className="flex flex-wrap gap-3">
              <Button type="submit">Рассчитать стоимость</Button>
              <Link href="/kalkulyator-zabora" className="inline-flex">
                <Button type="button" className="bg-brand-light hover:bg-brand">
                  Калькулятор
                </Button>
              </Link>
              <Link href="/ceny" className="inline-flex">
                <OutlineButton type="button">Смотреть цены</OutlineButton>
              </Link>
            </div>
          </form>
          <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-sm text-text-secondary">
            <Link href="/portfolio" className="underline-offset-2 hover:text-brand hover:underline">
              Портфолио
            </Link>
            <Link href="/otzyvy" className="underline-offset-2 hover:text-brand hover:underline">
              Отзывы
            </Link>
            <Link href="/faq" className="underline-offset-2 hover:text-brand hover:underline">
              FAQ
            </Link>
            <Link href="/kontakty" className="underline-offset-2 hover:text-brand hover:underline">
              Контакты
            </Link>
            <Link href="/zamershchik-besplatno" className="underline-offset-2 hover:text-brand hover:underline">
              Бесплатный замерщик
            </Link>
            <Link href="/spb" className="underline-offset-2 hover:text-brand hover:underline">
              Санкт-Петербург
            </Link>
            <Link href="/leningradskaya-oblast" className="underline-offset-2 hover:text-brand hover:underline">
              Ленинградская область
            </Link>
          </div>
          <p className="mt-4 text-xs text-text-secondary">
            ZABORIO (ИП ПОДКОВЫРОВ РОМАН АНДРЕЕВИЧ): работаем системно, с
            прозрачной сметой, договором и контролем качества на каждом этапе.
          </p>
        </Card>
      </Container>
    </Section>
  );
}
