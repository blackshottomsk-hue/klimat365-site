import type { Metadata } from "next";
import ServiceTemplate from "../../components/templates/ServiceTemplate";
import { getServiceContent } from "../../data/seo/serviceContent";
import { seoPageData } from "../../data/seo/pages";
import { buildMetadata } from "../../lib/seo";

export const metadata: Metadata = buildMetadata(seoPageData.drenazhnyeRaboty);

export default function DrenazhnyeRabotyPage() {
  const path = "/drenazhnye-raboty";
  return (
    <ServiceTemplate
      title="Дренажные работы"
      description="Устройство дренажной системы, копка траншей, монтаж труб и колодцев, установка дождеприемников и сопутствующие земляные работы с прозрачной детализацией по стоимости."
      categoryTitle="Монтаж"
      path={path}
      content={getServiceContent(path)}
      photos={[
        "/images/07-montazh/20250823_152035.jpg",
        "/images/07-montazh/20250828_104200.jpg",
        "/images/07-montazh/20250828_104210.jpg",
        "/images/07-montazh/20250908_084037.jpg",
        "/images/07-montazh/20250908_084113.jpg",
        "/images/07-montazh/20251012_131600.jpg",
      ]}
    />
  );
}
