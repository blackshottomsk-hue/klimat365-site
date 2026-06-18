import type { Metadata } from "next";
import ServiceTemplate from "../../components/templates/ServiceTemplate";
import { getServiceContent } from "../../data/seo/serviceContent";
import { seoPageData } from "../../data/seo/pages";
import { buildMetadata } from "../../lib/seo";

export const metadata: Metadata = buildMetadata(seoPageData.podgotovkaUchastka);

export default function PodgotovkaUchastkaPage() {
  const path = "/podgotovka-uchastka";
  return (
    <ServiceTemplate
      title="Подготовка участка и уборка территории"
      description="Расчистка территории, корчевка, перенос грунта и планировка участка перед монтажными работами. Закрываем весь подготовительный цикл с прозрачной сметой и контролем этапов."
      categoryTitle="Монтаж"
      path={path}
      content={getServiceContent(path)}
      photos={[
        "/images/07-montazh/20250927_080820 (2).jpg",
        "/images/07-montazh/20250927_084210 (2).jpg",
        "/images/07-montazh/20251012_131622.jpg",
        "/images/07-montazh/249be54f-d68c-41ad-8730-7ad5113e0dba.jpg",
        "/images/07-montazh/6f907204-1f97-42da-b3a5-811a526389fd.jpg",
        "/images/07-montazh/20250908_084004.jpg",
      ]}
    />
  );
}
