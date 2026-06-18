import type { Metadata } from "next";
import CatalogTemplate from "../../components/templates/CatalogTemplate";
import { blogCluster } from "../../data/seo/clusters";
import { seoPageData } from "../../data/seo/pages";
import { buildMetadata } from "../../lib/seo";

export const metadata: Metadata = buildMetadata(seoPageData.blog);

export default function BlogPage() {
  const items = [
    ...blogCluster.map((item) => ({
      title: item.title,
      href: `/blog/${item.slug}`,
      description: item.description,
    })),
    {
      title: "Каталог заборов",
      href: "/zabory",
      description: "Перейдите к видам заборов и подберите решение под ваш участок и требования к приватности.",
    },
    {
      title: "Ориентиры цен",
      href: "/ceny",
      description: "Сравните стоимость по направлениям: заборы, ворота, монтаж и дополнительные опции.",
    },
    {
      title: "Консультация по объекту",
      href: "/kontakty",
      description: "Если после статьи остались вопросы, разберем вашу задачу и подготовим понятный план работ.",
    },
  ];

  return (
    <CatalogTemplate
      title="Блог"
      description="Экспертные статьи от практиков монтажа: помогаем разобраться в материалах, стоимости, технологиях и выбрать решение без ошибок и лишних расходов."
      items={items}
    />
  );
}
