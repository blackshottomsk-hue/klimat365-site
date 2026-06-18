import type { Metadata } from "next";
import ServiceTemplate from "../../components/templates/ServiceTemplate";
import { getServiceContent } from "../../data/seo/serviceContent";
import { seoPageData } from "../../data/seo/pages";
import { buildMetadata } from "../../lib/seo";

export const metadata: Metadata = buildMetadata(seoPageData.kalitki);

export default function KalitkiPage() {
  const path = "/kalitki";
  const photos = [
    "/images/06-kalitki/20250615_133254.jpg",
    "/images/06-kalitki/20250615_133306.jpg",
    "/images/06-kalitki/20250615_133429.jpg",
    "/images/06-kalitki/20250615_133432.jpg",
    "/images/06-kalitki/20250615_133457.jpg",
    "/images/06-kalitki/20250615_133518.jpg",
    "/images/06-kalitki/249be54f-d68c-41ad-8730-7ad5113e0dba.jpg",
    "/images/06-kalitki/6f907204-1f97-42da-b3a5-811a526389fd.jpg",
    "/images/06-kalitki/ebf0a9e8-9f1b-4cc2-9219-bac86c8ef4b8.jpg",
  ];

  return (
    <ServiceTemplate
      title="Калитки"
      description="Изготовление и монтаж калиток из профнастила и штакетника: единый стиль с ограждением, надежная фурнитура и корректная работа в ежедневной эксплуатации."
      categoryTitle="Услуги"
      path={path}
      content={getServiceContent(path)}
      photos={photos}
    />
  );
}
