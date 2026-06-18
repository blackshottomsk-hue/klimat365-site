import type { Metadata } from "next";
import CatalogTemplate from "../../components/templates/CatalogTemplate";
import { seoPageData } from "../../data/seo/pages";
import { buildMetadata } from "../../lib/seo";
import Image from "next/image";

export const metadata: Metadata = buildMetadata(seoPageData.b2c);

export default function DlyaChastnyhPage() {
  return (
    <>
    <CatalogTemplate
      title="Для частных клиентов"
      description="Помогаем частным клиентам выбрать забор без переплаты и переделок: подбираем решение под грунт, приватность, бюджет и сроки. Приоритет выездов — Ленобласть и юг СПб."
      items={[
        {
          title: "Заборы для дачи",
          href: "/zabory/dlya-dachi",
          description: "Практичные решения для сезонного и постоянного проживания: защита периметра, быстрый монтаж, понятная смета.",
        },
        {
          title: "Заборы для коттеджа",
          href: "/zabory/dlya-kottedzha",
          description: "Эстетичные ограждения с акцентом на внешний вид фасада, надежность конструкции и долговечность материалов.",
        },
        {
          title: "Калитки в едином стиле",
          href: "/kalitki",
          description: "Калитки с корректной врезкой замков, усилением узлов и согласованием дизайна с воротами и секциями.",
        },
        {
          title: "Калькулятор стоимости",
          href: "/kalkulyator-zabora",
          description: "Быстрый предварительный расчет и подготовка коммерческого предложения под параметры вашего участка.",
        },
        {
          title: "Портфолио по частным объектам",
          href: "/portfolio",
          description: "Реальные примеры установленных заборов и ворот в Ленинградской области и южных районах Санкт-Петербурга.",
        },
        {
          title: "FAQ перед заказом",
          href: "/faq",
          description: "Закрываем ключевые возражения: цена, сроки, сезонность, выбор технологии монтажа и гарантия.",
        },
        {
          title: "Ориентиры стоимости",
          href: "/ceny",
          description: "Покажем диапазон бюджета по разным решениям и подскажем, где можно оптимизировать смету.",
        },
        {
          title: "Статьи по выбору забора",
          href: "/blog",
          description: "Практические материалы для осознанного выбора без лишних расходов и переделок.",
        },
      ]}
    />
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-text-dark sm:text-4xl">Примеры частных объектов</h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            "/images/03-portfolio/888a2842-a9fe-4a63-ac1c-5fb179031ed3.jpg",
            "/images/03-portfolio/a0946caf-0772-43a1-81f7-59ee29570f7e.jpg",
            "/images/03-portfolio/a13bca92-f5ca-49d6-a2d2-53c9d4324035.jpg",
            "/images/03-portfolio/ac23132c-63f8-4508-b2be-a7fc38b8874c.jpg",
            "/images/03-portfolio/e723bb7c-31e5-4be1-a498-eb3fd0e6e6cc (1).jpg",
            "/images/04-zabory/DSC09628.jpg",
          ].map((src, i) => (
            <div key={src} className="overflow-hidden rounded-2xl border border-border">
              <Image src={src} alt={`Объект для частных клиентов ${i + 1}`} width={800} height={600} className="h-52 w-full object-cover" loading="lazy" />
            </div>
          ))}
        </div>
      </div>
    </section>
    </>
  );
}
