import type { Metadata } from "next";
import CatalogTemplate from "../../components/templates/CatalogTemplate";
import { fenceCluster } from "../../data/seo/clusters";
import { seoPageData } from "../../data/seo/pages";
import { buildMetadata } from "../../lib/seo";
import Image from "next/image";

export const metadata: Metadata = buildMetadata(seoPageData.zabory);

export default function ZaboryPage() {
  const items = [
    ...fenceCluster.map((item) => ({
      title: item.title,
      href: `/zabory/${item.slug}`,
      description: item.description,
    })),
    {
      title: "Как выбрать забор без переплаты",
      href: "/blog/kak-vybrat-zabor",
      description: "Чек-лист по выбору материала, основания и комплектации под задачу вашего участка.",
    },
    {
      title: "Ориентиры стоимости",
      href: "/ceny/zabory",
      description: "Разбор цены по материалам, монтажу и дополнительным работам с понятной структурой сметы.",
    },
    {
      title: "Калькулятор стоимости",
      href: "/kalkulyator-zabora",
      description: "Быстрый предварительный расчет для понимания бюджета перед замером.",
    },
  ];

  const photos = [
    "/images/04-zabory/DSC09309.jpg",
    "/images/04-zabory/DSC09324.jpg",
    "/images/04-zabory/DSC09367.jpg",
    "/images/04-zabory/DSC09450.jpg",
    "/images/04-zabory/DSC09468.jpg",
    "/images/04-zabory/DSC09476.jpg",
    "/images/DSC09388.jpg",
    "/images/DSC09458.jpg",
    "/images/DSC09470.jpg",
    "/images/DSC09517.jpg",
    "/images/DSC09634.jpg",
    "/images/DSC09700.jpg",
  ];

  return (
    <>
      <CatalogTemplate
        title="Заборы"
        description="Каталог заборов под ключ: от экономичных решений до статусных ограждений. Подбираем конструкцию под участок, бюджет, требования к приватности и срок службы."
        items={items}
        heroImage="/images/zabory-hero-bg.png"
      />
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-text-dark sm:text-4xl">Фото выполненных заборов</h2>
          <p className="mt-4 max-w-3xl text-text-secondary">
            Реальные объекты в СПб и Ленинградской области: профнастил, евроштакетник, 3D-сетка, рабица.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {photos.map((src, i) => (
              <div key={src} className="overflow-hidden rounded-2xl border border-border">
                <Image src={src} alt={`Забор — объект ${i + 1}`} width={800} height={600} className="h-52 w-full object-cover" loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
