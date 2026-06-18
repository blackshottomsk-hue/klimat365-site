import type { Metadata } from "next";
import CTASection from "../../components/sections/CTASection";
import ContactSection from "../../components/sections/ContactSection";
import GeoCoverageSection from "../../components/sections/GeoCoverageSection";
import Card from "../../components/ui/Card";
import Container from "../../components/ui/Container";
import PageHero from "../../components/ui/PageHero";
import Section from "../../components/ui/Section";
import { seoPageData } from "../../data/seo/pages";
import { buildMetadata } from "../../lib/seo";

export const metadata: Metadata = buildMetadata(seoPageData.contacts);

export default function KontaktyPage() {
  return (
    <main>
      <PageHero
        title="Контакты"
        description="Свяжитесь с нами для консультации, расчета и выезда замерщика. Подскажем оптимальную конструкцию под ваш объект и бюджет."
      />
      <Section className="bg-background-light">
        <Container className="grid gap-4 md:grid-cols-3">
          <Card>
            <h3 className="text-lg font-semibold text-text-dark">Что получите после обращения</h3>
            <p className="mt-2 text-sm text-text-secondary">
              Понятный план работ, ориентир по стоимости и рекомендации по оптимальной
              комплектации под задачу вашего участка.
            </p>
          </Card>
          <Card>
            <h3 className="text-lg font-semibold text-text-dark">Срок ответа</h3>
            <p className="mt-2 text-sm text-text-secondary">
              Обрабатываем заявки оперативно, согласовываем удобное окно для замера и
              сразу уточняем технические вводные по объекту.
            </p>
          </Card>
          <Card>
            <h3 className="text-lg font-semibold text-text-dark">Документы и гарантии</h3>
            <p className="mt-2 text-sm text-text-secondary">
              Работаем официально: договор, акты, прозрачная смета, фиксированные этапы
              и гарантийные обязательства на монтажные работы.
            </p>
          </Card>
        </Container>
      </Section>
      <ContactSection />
      <GeoCoverageSection compact />
      <CTASection />
    </main>
  );
}
