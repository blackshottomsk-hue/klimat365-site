import type { Metadata } from "next";
import ArticleTemplate from "../../../components/templates/ArticleTemplate";
import { blogCluster } from "../../../data/seo/clusters";
import { getBlogContent } from "../../../data/seo/blogContent";
import { buildMetadata } from "../../../lib/seo";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return blogCluster.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const page = blogCluster.find((item) => item.slug === resolvedParams.slug);
  if (!page) return {};
  return buildMetadata({
    title: page.title,
    description: page.description,
    path: `/blog/${page.slug}`,
  });
}

export default async function BlogArticlePage({ params }: PageProps) {
  const resolvedParams = await params;
  const page = blogCluster.find((item) => item.slug === resolvedParams.slug);
  if (!page) return null;
  const path = `/blog/${page.slug}`;

  return <ArticleTemplate title={page.title} description={page.description} content={getBlogContent(path)} />;
}
