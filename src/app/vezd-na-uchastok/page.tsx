import type { Metadata } from "next";
import ServiceTemplate from "../../components/templates/ServiceTemplate";
import { getServiceContent } from "../../data/seo/serviceContent";
import { seoPageData } from "../../data/seo/pages";
import { buildMetadata } from "../../lib/seo";

export const metadata: Metadata = buildMetadata(seoPageData.vezdNaUchastok);

export default function VezdNaUchastokPage() {
  const path = "/vezd-na-uchastok";
  return (
    <ServiceTemplate
      title="Устройство въезда на участок"
      description="Устройство въезда, подготовка подпорных стенок ливневой трубы и сопутствующие работы с прозрачным расчетом по этапам."
      categoryTitle="Монтаж"
      path={path}
      content={getServiceContent(path)}
      photos={[
        "/images/05-vorota/DSC09304.jpg",
        "/images/05-vorota/DSC09310.jpg",
        "/images/05-vorota/DSC09386.jpg",
        "/images/07-montazh/20250927_080820 (2).jpg",
        "/images/07-montazh/20250927_084210 (2).jpg",
        "/images/07-montazh/20251012_131622.jpg",
      ]}
    />
  );
}
