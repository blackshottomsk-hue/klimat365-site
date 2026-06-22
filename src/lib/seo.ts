import type { Metadata } from "next";
import { contacts } from "./contacts";
import { siteConfig } from "./siteConfig";
import {
  leningradOblastDirections,
  localSeoKeywords,
  southSpbDistricts,
} from "../data/seo/geo";

type BuildMetadataArgs = {
  title: string;
  description: string;
  path: string;
};

type BreadcrumbItem = {
  name: string;
  item?: string;
};

export function absoluteUrl(path: string) {
  return new URL(path, siteConfig.domain).toString();
}

export function buildMetadata({ title, description, path }: BuildMetadataArgs): Metadata {
  const canonical = absoluteUrl(path);

  return {
    title,
    description,
    keywords: [
      "монтаж кондиционеров",
      "установка кондиционеров СПб",
      "установка сплит-системы",
      "обслуживание кондиционеров",
      "ремонт кондиционеров СПб",
      "кондиционеры Ленобласть",
      "заправка кондиционера фреоном",
      "чистка кондиционера",
      ...localSeoKeywords,
      "климат365",
    ],
    alternates: {
      canonical,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-snippet": -1,
        "max-image-preview": "large",
        "max-video-preview": -1,
      },
    },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      type: "website",
      images: [
        {
          url: absoluteUrl(siteConfig.ogImage),
          width: 1200,
          height: 630,
          alt: `${siteConfig.name} — монтаж кондиционеров`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [absoluteUrl(siteConfig.ogImage)],
    },
  };
}

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    legalName: siteConfig.legalName,
    url: siteConfig.domain,
    logo: absoluteUrl("/logo.png"),
    sameAs: contacts.socials.map((social) => social.href).filter((href) => href !== "#"),
  };
}

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: siteConfig.name,
    legalName: siteConfig.legalName,
    url: siteConfig.domain,
    logo: absoluteUrl("/logo.png"),
    telephone: contacts.phone,
    email: contacts.email,
    areaServed: [
      "Санкт-Петербург",
      "Юг Санкт-Петербурга",
      ...southSpbDistricts,
      "Ленинградская область",
      ...leningradOblastDirections,
    ].map((area) => ({
      "@type": "AdministrativeArea",
      name: area,
    })),
    address: {
      "@type": "PostalAddress",
      addressLocality: "Санкт-Петербург",
      streetAddress: contacts.address,
      addressCountry: "RU",
    },
  };
}

export function faqSchemaPlaceholder() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Сколько стоит установка кондиционера?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Стоимость монтажа зависит от типа кондиционера и сложности прокладки трассы. Узнайте точную цену по телефону или оставьте заявку — выедем на замер бесплатно.",
        },
      },
      {
        "@type": "Question",
        name: "Работаете ли по Санкт-Петербургу и Ленобласти?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Да, выезжаем по всему Санкт-Петербургу и Ленинградской области. Приоритетная зона — юг СПб и новые ЖК Всеволожского района (Кудрово, Мурино, Новосаратовка).",
        },
      },
    ],
  };
}

export function breadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      ...(item.item ? { item: item.item } : {}),
    })),
  };
}

export function serviceSchema({
  name,
  description,
  path,
}: {
  name: string;
  description: string;
  path: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: name,
    name,
    description,
    areaServed: [
      "Санкт-Петербург",
      ...southSpbDistricts,
      "Ленинградская область",
      ...leningradOblastDirections,
    ],
    provider: {
      "@type": "LocalBusiness",
      name: siteConfig.name,
      telephone: contacts.phone,
      url: siteConfig.domain,
    },
    offers: {
      "@type": "Offer",
      priceCurrency: "RUB",
      availability: "https://schema.org/InStock",
      url: absoluteUrl(path),
    },
  };
}
