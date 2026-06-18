import type { Metadata } from "next";
import {
  absoluteUrl,
  breadcrumbSchema,
  buildMetadata,
  serviceSchema,
} from "../../lib/seo";
import Advantages from "../../components/services/Advantages";
import B2BSection from "../../components/services/B2BSection";
import CTA from "../../components/services/CTA";
import InstallationTypes from "../../components/services/InstallationTypes";
import ServicesGrid from "../../components/services/ServicesGrid";
import ServicesHero from "../../components/services/ServicesHero";
import Steps from "../../components/services/Steps";
import TurnkeySection from "../../components/services/TurnkeySection";
import GeoCoverageSection from "../../components/sections/GeoCoverageSection";

export const metadata: Metadata = buildMetadata({
  title: "Услуги по установке заборов в СПб и ЛО — ZABORIO",
  description:
    "ZABORIO (ИП ПОДКОВЫРОВ РОМАН АНДРЕЕВИЧ): современный сервис установки заборов, ворот и калиток с прозрачной сметой, четкими сроками и контролем качества.",
  path: "/uslugi",
});

export default function UslugiPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: "Главная", item: absoluteUrl("/") },
              { name: "Услуги", item: absoluteUrl("/uslugi") },
            ]),
          ),
        }}
      />
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            serviceSchema({
              name: "Установка заборов, ворот и калиток под ключ",
              description:
                "Комплексные услуги по установке заборов, ворот и калиток в Санкт-Петербурге и Ленинградской области.",
              path: "/uslugi",
            }),
          ),
        }}
      />
      <ServicesHero />
      <ServicesGrid />
      <TurnkeySection />
      <InstallationTypes />
      <B2BSection />
      <Advantages />
      <GeoCoverageSection compact title="Услуги по Ленобласти и югу Санкт-Петербурга" />
      <Steps />
      <CTA />
    </main>
  );
}

