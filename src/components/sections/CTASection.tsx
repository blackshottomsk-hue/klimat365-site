import Link from "next/link";
import Container from "../ui/Container";
import Section from "../ui/Section";

export default function CTASection() {
  return (
    <Section className="bg-background-light">
      <Container>
        <div className="rounded-2xl bg-brand-dark p-8 text-white shadow-md">
          <h3 className="text-2xl font-bold">Нужна установка или обслуживание кондиционера?</h3>
          <p className="mt-3 text-white/90">
            Оставьте заявку — мастер приедет бесплатно, осмотрит объект и назовёт точную стоимость. Работаем в новых ЖК СПб и Ленобласти.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/kontakty"
              className="inline-flex items-center justify-center rounded-xl bg-white px-5 py-3 text-sm font-semibold text-brand-dark transition hover:bg-brand-accent"
            >
              Оставить заявку
            </Link>
            <a
              href="tel:+79039522177"
              className="inline-flex items-center justify-center rounded-xl border border-white/30 px-5 py-3 text-sm font-semibold text-white transition hover:border-white"
            >
              +7 (903) 952-21-77
            </a>
          </div>
        </div>
        <div className="mt-4 grid gap-3 text-sm text-text-secondary md:grid-cols-3">
          <p>• Бесплатный выезд мастера</p>
          <p>• Фиксированная цена без доплат</p>
          <p>• Договор и гарантия на работы</p>
        </div>
      </Container>
    </Section>
  );
}
