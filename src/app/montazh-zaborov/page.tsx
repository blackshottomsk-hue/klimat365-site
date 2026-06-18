import type { Metadata } from "next";
import ServiceTemplate from "../../components/templates/ServiceTemplate";
import { getServiceContent } from "../../data/seo/serviceContent";
import { buildMetadata } from "../../lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Монтаж заборов в СПб и ЛО | ZABORIO",
  description:
    "Профессиональный монтаж заборов под ключ: подбор технологии под грунт, прозрачные этапы работ, фиксация сроков и официальная гарантия от ZABORIO.",
  path: "/montazh-zaborov",
});

const montazhPhotos = [
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

export default function MontazhZaborovPage() {
  const path = "/montazh-zaborov";
  return (
    <ServiceTemplate
      title="Монтаж заборов"
      description="Технологии и этапы монтажа под разные типы участков: от первичного замера до приемки готового объекта с документами."
      categoryTitle="Монтаж"
      path={path}
      content={getServiceContent(path)}
      photos={montazhPhotos}
    />
  );
}
