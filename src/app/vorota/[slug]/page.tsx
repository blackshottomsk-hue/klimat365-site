import type { Metadata } from "next";
import ServiceTemplate from "../../../components/templates/ServiceTemplate";
import { gatesCluster } from "../../../data/seo/clusters";
import { getServiceContent } from "../../../data/seo/serviceContent";
import { buildMetadata } from "../../../lib/seo";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return gatesCluster.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const page = gatesCluster.find((item) => item.slug === resolvedParams.slug);
  if (!page) return {};
  return buildMetadata({
    title: page.title,
    description: page.description,
    path: `/vorota/${page.slug}`,
  });
}

export default async function GatesClusterPage({ params }: PageProps) {
  const resolvedParams = await params;
  const page = gatesCluster.find((item) => item.slug === resolvedParams.slug);
  if (!page) return null;
  const path = `/vorota/${page.slug}`;

  const photos = [
    "/images/05-vorota/DSC09304.jpg",
    "/images/05-vorota/DSC09310.jpg",
    "/images/05-vorota/DSC09386.jpg",
    "/images/05-vorota/DSC09489.jpg",
    "/images/05-vorota/DSC09497.jpg",
    "/images/05-vorota/DSC09593.jpg",
  ];

  return <ServiceTemplate title={page.title} description={page.description} categoryTitle="Ворота" path={path} content={getServiceContent(path)} photos={photos} />;
}
