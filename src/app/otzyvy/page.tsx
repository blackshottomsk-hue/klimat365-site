import type { Metadata } from "next";
import CatalogTemplate from "../../components/templates/CatalogTemplate";
import { seoPageData } from "../../data/seo/pages";
import { buildMetadata } from "../../lib/seo";
import Image from "next/image";

export const metadata: Metadata = buildMetadata(seoPageData.otzyvy);

export default function OtzyvyPage() {
  return (
    <>
    <CatalogTemplate
      title="Отзывы"
      description="Отзывы клиентов о работе ZABORIO: как прошли замер, монтаж и сдача объекта, и что получили по качеству, срокам и прозрачности сметы."
      items={[
        {
          title: "Отзывы частных клиентов",
          href: "/dlya-chastnyh",
          description: "Реальный опыт владельцев домов и дач: прозрачность сметы, качество монтажа, соблюдение сроков.",
        },
        {
          title: "Отзывы компаний",
          href: "/dlya-kompanij",
          description: "Опыт корпоративного сотрудничества: этапность работ, отчетность и предсказуемый результат на объекте.",
        },
        {
          title: "Смотреть выполненные объекты",
          href: "/portfolio",
          description: "Подтверждение отзывов на практике — фото и типовые решения по реальным объектам.",
        },
        {
          title: "FAQ перед заказом",
          href: "/faq",
          description: "Ответы на ключевые вопросы, которые чаще всего возникают до подписания договора.",
        },
        {
          title: "Получить консультацию",
          href: "/kontakty",
          description: "Разберем ваш объект и предложим формат работ с прозрачной сметой и этапами.",
        },
      ]}
    />
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-text-dark sm:text-4xl">Наши объекты</h2>
        <p className="mt-4 max-w-3xl text-text-secondary">Фотографии выполненных работ — подтверждение качества на практике.</p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            "/images/03-portfolio/c3def239-d19e-4c52-807c-fd92a4626dfc.jpg",
            "/images/03-portfolio/c00f2d89-7840-49d7-afc8-61906d849cda.jpg",
            "/images/03-portfolio/d3789f3a-32af-4f16-8c1a-8989a8444730.jpg",
            "/images/04-zabory/DSC09644.jpg",
            "/images/05-vorota/DSC09489.jpg",
            "/images/06-kalitki/20250615_133518.jpg",
          ].map((src, i) => (
            <div key={src} className="overflow-hidden rounded-2xl border border-border">
              <Image src={src} alt={`Выполненный объект ${i + 1}`} width={800} height={600} className="h-52 w-full object-cover" loading="lazy" />
            </div>
          ))}
        </div>
      </div>
    </section>
    </>
  );
}
