import type { Metadata } from "next";
import CatalogTemplate from "../../components/templates/CatalogTemplate";
import { montazhCluster } from "../../data/seo/clusters";
import { seoPageData } from "../../data/seo/pages";
import { buildMetadata } from "../../lib/seo";

export const metadata: Metadata = buildMetadata(seoPageData.tehnologii);

export default function TehnologiiPage() {
  const items = [
    ...montazhCluster.map((item) => ({
      title: item.title,
      href: `/montazh/${item.slug}`,
      description: item.description,
    })),
    {
      title: "Что лучше: сваи или бетон",
      href: "/blog/chto-luchshe-svai-ili-beton",
      description: "Практическое сравнение оснований по сроку службы, стоимости и рискам переделок.",
    },
    {
      title: "Монтаж заборов под ключ",
      href: "/montazh-zaborov",
      description: "Как строим процесс монтажа от замера до сдачи с контролем качества на каждом этапе.",
    },
    {
      title: "Цены на монтаж",
      href: "/ceny/montazh",
      description: "Понятный диапазон стоимости по технологиям и параметрам вашего участка.",
    },
  ];

  return (
    <CatalogTemplate
      title="Технологии"
      description="Технологическая база монтажа: объясняем, какую схему установки выбрать под ваш грунт, ветровую нагрузку и требования по сроку службы."
      items={items}
    />
  );
}
