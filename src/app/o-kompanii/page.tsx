import type { Metadata } from "next";
import CatalogTemplate from "../../components/templates/CatalogTemplate";
import { seoPageData } from "../../data/seo/pages";
import { buildMetadata } from "../../lib/seo";
import Image from "next/image";

export const metadata: Metadata = buildMetadata(seoPageData.about);

const workPhotos = [
  "/images/DSC09750.jpg",
  "/images/20250313_165827.jpg",
  "/images/20250315_173408.jpg",
  "/images/photo_2025-07-12_13-23-29.jpg",
  "/images/07-montazh/20250908_084044 (2).jpg",
  "/images/07-montazh/249be54f-d68c-41ad-8730-7ad5113e0dba.jpg",
];

export default function AboutPage() {
  return (
    <>
    <CatalogTemplate
      title="О компании"
      description="ZABORIO — современный сервис установки заборов с системным подходом: прозрачный расчет, контроль качества и сдача объекта по договору."
      items={[
        {
          title: "Портфолио",
          href: "/portfolio",
          description: "Примеры выполненных работ с разными типами заборов, ворот и условий монтажа.",
        },
        {
          title: "Отзывы",
          href: "/otzyvy",
          description: "Мнение частных и корпоративных клиентов о качестве, сроках и сервисе.",
        },
        {
          title: "Технологии монтажа",
          href: "/tehnologii",
          description: "Подход к установке с учетом грунтов, нагрузок и условий конкретного участка.",
        },
        {
          title: "Контакты и консультация",
          href: "/kontakty",
          description: "Свяжитесь с нами для замера и детального коммерческого предложения под ваш объект.",
        },
        {
          title: "Как формируется стоимость",
          href: "/ceny",
          description: "Подробно показываем структуру бюджета: материалы, монтаж, логистика и дополнительные работы.",
        },
        {
          title: "FAQ и возражения",
          href: "/faq",
          description: "Разбираем частые вопросы клиентов до старта работ: сроки, гарантия, документы, выбор технологии.",
        },
      ]}
    />
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-text-dark sm:text-4xl">Наши объекты</h2>
        <p className="mt-4 max-w-3xl text-text-secondary">
          Реальные проекты команды ZABORIO — от замера до финальной сдачи.
        </p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {workPhotos.map((src, i) => (
            <div key={src} className="overflow-hidden rounded-2xl border border-border">
              <Image src={src} alt={`Объект ZABORIO ${i + 1}`} width={800} height={600} className="h-52 w-full object-cover" loading="lazy" />
            </div>
          ))}
        </div>
      </div>
    </section>
    </>
  );
}
