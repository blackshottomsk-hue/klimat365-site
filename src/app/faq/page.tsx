import type { Metadata } from "next";
import CTASection from "../../components/sections/CTASection";
import FAQSection from "../../components/sections/FAQSection";
import GeoCoverageSection from "../../components/sections/GeoCoverageSection";
import Card from "../../components/ui/Card";
import Container from "../../components/ui/Container";
import PageHero from "../../components/ui/PageHero";
import Section from "../../components/ui/Section";
import { seoPageData } from "../../data/seo/pages";
import { buildMetadata, faqSchemaPlaceholder } from "../../lib/seo";

export const metadata: Metadata = buildMetadata(seoPageData.faq);

export default function FAQPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchemaPlaceholder()) }}
      />
      <PageHero
        title="FAQ"
        description="Часто задаваемые вопросы по стоимости, срокам, материалам, монтажу и гарантиям. Отвечаем с позиции практики, а не теории."
      />
      <FAQSection />
      <Section>
        <Container className="grid gap-4 md:grid-cols-3">
          <Card>
            <h3 className="text-lg font-semibold text-text-dark">Что подготовить до замера</h3>
            <p className="mt-2 text-sm text-text-secondary">
              Желательная длина периметра, фото участка, пожелания по приватности и бюджету.
              Это ускоряет расчет и делает смету точнее.
            </p>
          </Card>
          <Card>
            <h3 className="text-lg font-semibold text-text-dark">Как проходит согласование</h3>
            <p className="mt-2 text-sm text-text-secondary">
              Мы предлагаем 2-3 рабочих варианта комплектации, объясняем разницу по
              ресурсу и цене, после чего фиксируем итоговую конфигурацию в договоре.
            </p>
          </Card>
          <Card>
            <h3 className="text-lg font-semibold text-text-dark">Когда лучше начинать работы</h3>
            <p className="mt-2 text-sm text-text-secondary">
              Чем раньше согласован проект, тем проще зафиксировать удобные сроки монтажа
              и избежать сезонного роста стоимости материалов.
            </p>
          </Card>
        </Container>
      </Section>
      <GeoCoverageSection compact />
      <CTASection />
    </main>
  );
}
