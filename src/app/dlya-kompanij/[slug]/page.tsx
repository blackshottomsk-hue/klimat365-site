import type { Metadata } from "next";
import B2BTemplate from "../../../components/templates/B2BTemplate";
import { getB2BContent } from "../../../data/seo/b2bContent";
import { b2bCluster } from "../../../data/seo/clusters";
import { buildMetadata } from "../../../lib/seo";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return b2bCluster.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const page = b2bCluster.find((item) => item.slug === resolvedParams.slug);
  if (!page) return {};
  return buildMetadata({
    title: page.title,
    description: page.description,
    path: `/dlya-kompanij/${page.slug}`,
  });
}

export default async function B2BClusterPage({ params }: PageProps) {
  const resolvedParams = await params;
  const page = b2bCluster.find((item) => item.slug === resolvedParams.slug);
  if (!page) return null;
  const path = `/dlya-kompanij/${page.slug}`;

  return <B2BTemplate title={page.title} description={page.description} content={getB2BContent(path)} />;
}
