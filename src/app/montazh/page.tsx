import type { Metadata } from "next";
import CatalogTemplate from "../../components/templates/CatalogTemplate";
import { montazhCluster } from "../../data/seo/clusters";
import { seoPageData } from "../../data/seo/pages";
import { buildMetadata } from "../../lib/seo";
import Image from "next/image";

export const metadata: Metadata = buildMetadata(seoPageData.montazh);

export default function MontazhPage() {
  const items = [
    ...montazhCluster.map((item) => ({
      title: item.title,
      href: `/montazh/${item.slug}`,
      description: item.description,
    })),
    {
      title: "Монтаж заборов под ключ",
      href: "/montazh-zaborov",
      description: "Пошаговый процесс: технический разбор участка, смета, монтаж и сдача объекта по чек-листу качества.",
    },
    {
      title: "Цены на монтаж",
      href: "/ceny/montazh",
      description: "Ориентиры стоимости по технологиям и факторам, которые влияют на итоговый бюджет.",
    },
    {
      title: "Консультация инженера",
      href: "/kontakty",
      description: "Поможем выбрать технологию установки под ваш грунт и эксплуатационную нагрузку.",
    },
  ];

  const photos = [
    "/images/07-montazh/objects/20250614_092513.jpg",
    "/images/07-montazh/objects/20250614_092545.jpg",
    "/images/07-montazh/objects/20250614_095231.jpg",
    "/images/07-montazh/objects/20250614_110509.jpg",
    "/images/07-montazh/objects/20250614_111250.jpg",
    "/images/07-montazh/objects/20250615_133306.jpg",
    "/images/07-montazh/objects/20250615_133429.jpg",
    "/images/07-montazh/objects/20250615_133432-copy.jpg",
    "/images/07-montazh/objects/20250615_133457.jpg",
    "/images/07-montazh/objects/20250615_133518.jpg",
    "/images/07-montazh/objects/photo_6_2025-06-09_09-18-02.jpg",
    "/images/07-montazh/objects/photo_17_2025-06-09_09-18-02.jpg",
    "/images/07-montazh/objects/photo_19_2025-06-09_09-18-02.jpg",
    "/images/07-montazh/objects/photo_25_2025-06-09_09-18-02.jpg",
  ];

  return (
    <>
      <CatalogTemplate
        title="Монтаж"
        description="Способы установки заборов под разные типы грунтов и задачи: от быстрых решений до капитальных оснований с прогнозируемым сроком службы."
        items={items}
      />
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-text-dark sm:text-4xl">Фото с объектов монтажа</h2>
          <p className="mt-4 max-w-3xl text-text-secondary">
            Реальные примеры работ: установка столбов, монтаж секций, контроль качества на объектах.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {photos.map((src, index) => (
              <div key={src} className="overflow-hidden rounded-2xl border border-border">
                <Image
                  src={src}
                  alt={`Монтаж забора — объект ${index + 1}`}
                  width={800}
                  height={600}
                  className="h-52 w-full object-cover"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
