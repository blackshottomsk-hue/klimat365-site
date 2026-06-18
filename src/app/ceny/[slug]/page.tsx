import type { Metadata } from "next";
import ServiceTemplate from "../../../components/templates/ServiceTemplate";
import { pricesCluster } from "../../../data/seo/clusters";
import { getServiceContent } from "../../../data/seo/serviceContent";
import { buildMetadata } from "../../../lib/seo";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return pricesCluster.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const page = pricesCluster.find((item) => item.slug === resolvedParams.slug);
  if (!page) return {};
  return buildMetadata({
    title: `${page.title} в СПб и Ленобласти`,
    description: `${page.description} Получите предварительный расчет и сравнение комплектаций под ваш участок.`,
    path: `/ceny/${page.slug}`,
  });
}

export default async function PricesClusterPage({ params }: PageProps) {
  const resolvedParams = await params;
  const page = pricesCluster.find((item) => item.slug === resolvedParams.slug);
  if (!page) return null;
  const path = `/ceny/${page.slug}`;

  const photosBySlug: Record<string, string[]> = {
    vorota: [
      "/images/05-vorota/DSC09304.jpg",
      "/images/05-vorota/DSC09310.jpg",
      "/images/05-vorota/DSC09386.jpg",
      "/images/05-vorota/DSC09489.jpg",
      "/images/05-vorota/DSC09497.jpg",
      "/images/05-vorota/DSC09593.jpg",
    ],
    montazh: [
      "/images/07-montazh/20250823_152035.jpg",
      "/images/07-montazh/20250828_104200.jpg",
      "/images/07-montazh/20250908_084037.jpg",
      "/images/07-montazh/20250908_084113.jpg",
      "/images/07-montazh/20251012_131600.jpg",
      "/images/07-montazh/20251012_131622.jpg",
    ],
  };

  const photos = photosBySlug[resolvedParams.slug] ?? [
    "/images/04-zabory/DSC09309.jpg",
    "/images/04-zabory/DSC09324.jpg",
    "/images/04-zabory/DSC09367.jpg",
    "/images/04-zabory/DSC09450.jpg",
    "/images/04-zabory/DSC09468.jpg",
    "/images/04-zabory/DSC09476.jpg",
  ];

  return <ServiceTemplate title={page.title} description={page.description} categoryTitle="Цены" path={path} content={getServiceContent(path)} photos={photos} />;
}
