import type { Metadata } from "next";
import B2BTemplate from "../../components/templates/B2BTemplate";
import { getB2BContent } from "../../data/seo/b2bContent";
import { seoPageData } from "../../data/seo/pages";
import { buildMetadata } from "../../lib/seo";

export const metadata: Metadata = buildMetadata(seoPageData.b2b);

export default function DlyaKompanijPage() {
  const path = "/dlya-kompanij";
  return (
    <B2BTemplate
      title="Для компаний"
      description="B2B-сотрудничество для застройщиков, ТСЖ, промышленных и коммерческих объектов: четкий график, прозрачная смета, закрывающие документы и персональный менеджер проекта."
      content={getB2BContent(path)}
    />
  );
}
