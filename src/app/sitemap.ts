import type { MetadataRoute } from "next";
import { siteConfig } from "../lib/siteConfig";
import {
  blogCluster,
  b2bCluster,
  fenceCluster,
  gatesCluster,
  montazhCluster,
  pricesCluster,
} from "../data/seo/clusters";
import { geoPages } from "../data/seo/geoPages";

const staticRoutes = [
  "",
  "/uslugi",
  "/zabory",
  "/vorota",
  "/kalitki",
  "/montazh",
  "/tehnologii",
  "/ceny",
  "/portfolio",
  "/otzyvy",
  "/dlya-kompanij",
  "/dlya-chastnyh",
  "/o-kompanii",
  "/blog",
  "/faq",
  "/kontakty",
  "/montazh-zaborov",
  "/podgotovka-uchastka",
  "/drenazhnye-raboty",
  "/vezd-na-uchastok",
  "/blagoustroystvo-uchastka",
  "/kalkulyator-zabora",
  "/politika-konfidencialnosti",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const dynamicRoutes = [
    ...fenceCluster.map((item) => `/zabory/${item.slug}`),
    ...gatesCluster.map((item) => `/vorota/${item.slug}`),
    ...montazhCluster.map((item) => `/montazh/${item.slug}`),
    ...pricesCluster.map((item) => `/ceny/${item.slug}`),
    ...b2bCluster.map((item) => `/dlya-kompanij/${item.slug}`),
    ...blogCluster.map((item) => `/blog/${item.slug}`),
    ...geoPages.map((item) => `/zabory-rajon/${item.slug}`),
  ];

  return [...staticRoutes, ...dynamicRoutes].map((route) => ({
    url: `${siteConfig.domain}${route}`,
    lastModified: now,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}
