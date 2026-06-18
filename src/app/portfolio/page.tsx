import type { Metadata } from "next";
import CatalogTemplate from "../../components/templates/CatalogTemplate";
import { seoPageData } from "../../data/seo/pages";
import { buildMetadata } from "../../lib/seo";
import Image from "next/image";

export const metadata: Metadata = buildMetadata(seoPageData.portfolio);

export default function PortfolioPage() {
  const portfolioPhotos = [
    {
      title: "Забор из профнастила",
      details: "Частный дом, 42 м, Всеволожский район",
      image:
        "/images/03-portfolio/c3def239-d19e-4c52-807c-fd92a4626dfc.jpg",
    },
    {
      title: "Евроштакетник",
      details: "Коттеджный участок, 36 м, Приморский район",
      image:
        "/images/03-portfolio/c00f2d89-7840-49d7-afc8-61906d849cda.jpg",
    },
    {
      title: "3D-сетка",
      details: "ТСЖ, 95 м, Гатчинский район",
      image:
        "/images/03-portfolio/d3789f3a-32af-4f16-8c1a-8989a8444730.jpg",
    },
    {
      title: "Сетка рабица",
      details: "Дачный участок, 58 м, Ломоносовский район",
      image:
        "/images/03-portfolio/e7fa760d-7257-4adf-a3f8-26e93163633e.jpg",
    },
    {
      title: "Забор под ключ",
      details: "Частный объект, 64 м, Красносельский район",
      image:
        "/images/03-portfolio/6702426e-ff41-4e54-90b0-e1fc13cb7373.jpg",
    },
    {
      title: "Монтаж на сложном рельефе",
      details: "Загородный участок, 70 м, Ломоносовский район",
      image:
        "/images/03-portfolio/769d7797-a943-4818-95c6-2088f47a6424.jpg",
    },
  ];

  return (
    <>
      <CatalogTemplate
        title="Портфолио"
        description="Реальные объекты ZABORIO: частные участки, коттеджи, ТСЖ и предприятия. Показываем итоговый результат, логику подбора и качество исполнения."
        items={[
          {
            title: "Частные объекты",
            href: "/dlya-chastnyh",
            description: "Кейсы для домов, дач и коттеджей: как решали вопросы приватности, ветровой нагрузки и бюджета.",
          },
          {
            title: "B2B объекты",
            href: "/dlya-kompanij",
            description: "Проекты для ЖК, ТСЖ и предприятий с соблюдением сроков, этапной отчетностью и полным пакетом документов.",
          },
          {
            title: "Ворота и автоматика",
            href: "/vorota",
            description: "Примеры откатных и распашных ворот с подготовкой под автоматику и подбором под интенсивность эксплуатации.",
          },
          {
            title: "Решения по сложным грунтам",
            href: "/montazh",
            description: "Подбор технологий монтажа для пучинистых и проблемных участков: сваи, бутование, бетонирование, фундамент.",
          },
          {
            title: "Сравнить стоимость решений",
            href: "/ceny",
            description: "Помогаем соотнести примеры из портфолио с ориентиром по бюджету и выбрать подходящую комплектацию.",
          },
          {
            title: "Запросить похожий кейс",
            href: "/kontakty",
            description: "Подберем реализованный проект, максимально близкий к вашему объекту и требованиям.",
          },
        ]}
      />

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-text-dark sm:text-4xl">Фотографии выполненных работ</h2>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {portfolioPhotos.map((item) => (
              <article
                key={`${item.title}-${item.details}`}
                className="overflow-hidden rounded-2xl border border-border bg-background-light shadow-card"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  width={1200}
                  height={700}
                  className="h-52 w-full object-cover"
                  loading="lazy"
                />
                <div className="p-4">
                  <p className="font-semibold text-text-dark">{item.title}</p>
                  <p className="mt-1 text-sm text-text-secondary">{item.details}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
