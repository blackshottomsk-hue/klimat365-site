import type { Metadata } from "next";
import ServiceTemplate from "../../components/templates/ServiceTemplate";
import { getServiceContent } from "../../data/seo/serviceContent";
import { seoPageData } from "../../data/seo/pages";
import { buildMetadata } from "../../lib/seo";

export const metadata: Metadata = buildMetadata(seoPageData.blagoustroystvoUchastka);

export default function BlagoustroystvoUchastkaPage() {
  const path = "/blagoustroystvo-uchastka";
  return (
    <ServiceTemplate
      title="Благоустройство участка"
      description="Комплекс работ по подготовке основания, отсыпке, установке ливневых лотков, бордюров и укладке покрытий с прозрачной детализацией по стоимости."
      categoryTitle="Монтаж"
      path={path}
      content={getServiceContent(path)}
      photos={[
        "/images/04-zabory/DSC09309.jpg",
        "/images/04-zabory/DSC09324.jpg",
        "/images/07-montazh/20250823_152035.jpg",
        "/images/07-montazh/20250828_104200.jpg",
        "/images/07-montazh/20250908_084037.jpg",
        "/images/07-montazh/20251012_131600.jpg",
      ]}
    />
  );
}
