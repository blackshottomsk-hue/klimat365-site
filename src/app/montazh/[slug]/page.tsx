import type { Metadata } from "next";
import ServiceTemplate from "../../../components/templates/ServiceTemplate";
import { montazhCluster } from "../../../data/seo/clusters";
import { getServiceContent } from "../../../data/seo/serviceContent";
import { buildMetadata } from "../../../lib/seo";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return montazhCluster.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const page = montazhCluster.find((item) => item.slug === resolvedParams.slug);
  if (!page) return {};
  return buildMetadata({
    title: page.title,
    description: page.description,
    path: `/montazh/${page.slug}`,
  });
}

export default async function MontazhClusterPage({ params }: PageProps) {
  const resolvedParams = await params;
  const page = montazhCluster.find((item) => item.slug === resolvedParams.slug);
  if (!page) return null;
  const path = `/montazh/${page.slug}`;

  const photos = [
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

  return <ServiceTemplate title={page.title} description={page.description} categoryTitle="Монтаж" path={path} content={getServiceContent(path)} photos={photos} />;
}
