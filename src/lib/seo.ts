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
      "установка заборов",
      "забор под ключ",
      "монтаж заборов",
      "цена забора",
      "ворота и калитки",
      "заборы СПб",
      "заборы ленобласть",
      "установка заборов ленинградская область",
      "юг санкт-петербурга забор",
      ...localSeoKeywords,
      "zaborio",
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
          alt: `${siteConfig.name} — заборы под ключ`,
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
        name: "Сколько стоит установка забора?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Стоимость рассчитывается индивидуально после замера участка.",
        },
      },
      {
        "@type": "Question",
        name: "Работаете ли по южным районам Санкт-Петербурга и Ленобласти?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Да, это приоритетная зона выездов: юг Санкт-Петербурга и основные районы Ленинградской области.",
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
