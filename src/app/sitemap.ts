import type { MetadataRoute } from "next";
import { siteConfig } from "../lib/siteConfig";
import { blogCluster } from "../data/seo/clusters";

const staticRoutes = [
  "",
  "/uslugi",
  "/uslugi/montazh-kondicionerov",
  "/uslugi/obsluzhivanie-kondicionerov",
  "/uslugi/remont-kondicionerov",
  "/ceny",
  "/kalkulyator",
  "/rajony",
  "/rajony/kudrovo",
  "/rajony/murino",
  "/rajony/novosuratovka",
  "/rajony/devyatkino",
  "/rajony/vsevolozhsk",
  "/rajony/kolpino",
  "/rajony/pushkin",
  "/portfolio",
  "/otzyvy",
  "/o-kompanii",
  "/blog",
  "/faq",
  "/kontakty",
  "/politika-konfidencialnosti",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const dynamicRoutes = blogCluster.map((item) => `/blog/${item.slug}`);

  return [...staticRoutes, ...dynamicRoutes].map((route) => ({
    url: `${siteConfig.domain}${route}`,
    lastModified: now,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}
