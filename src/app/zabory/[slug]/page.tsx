import type { Metadata } from "next";
import ServiceTemplate from "../../../components/templates/ServiceTemplate";
import { fenceCluster } from "../../../data/seo/clusters";
import { getServiceContent } from "../../../data/seo/serviceContent";
import { buildMetadata } from "../../../lib/seo";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return fenceCluster.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const page = fenceCluster.find((item) => item.slug === resolvedParams.slug);
  if (!page) return {};
  return buildMetadata({
    title: page.title,
    description: page.description,
    path: `/zabory/${page.slug}`,
  });
}

export default async function FenceClusterPage({ params }: PageProps) {
  const resolvedParams = await params;
  const page = fenceCluster.find((item) => item.slug === resolvedParams.slug);
  if (!page) return null;
  const path = `/zabory/${page.slug}`;
  const heroImages: Record<string, string> = {
    "iz-profnastila": "/images/profnastil-hero-bg.jpg",
    "3d-setka": "/images/3d-setka-hero-bg.jpg",
  };
  const heroImage = heroImages[page.slug] ?? "/images/zabory-hero-bg.png";

  const defaultPhotos = [
    "/images/04-zabory/DSC09309.jpg",
    "/images/04-zabory/DSC09324.jpg",
    "/images/04-zabory/DSC09367.jpg",
    "/images/04-zabory/DSC09450.jpg",
    "/images/04-zabory/DSC09468.jpg",
    "/images/04-zabory/DSC09476.jpg",
  ];
  const photosBySlug: Record<string, string[]> = {
    "iz-evroshtaketnika": [
      "/images/04-zabory/evroshtaketnik/0b8a30b8-d27c-4ceb-af49-ae0f5225da37.jpg",
      "/images/04-zabory/evroshtaketnik/5c34e79e-eea9-409c-a185-6d665bca0483.jpg",
      "/images/04-zabory/evroshtaketnik/8cf1ab1e-2a7f-4639-8437-648d879d5825.jpg",
      "/images/04-zabory/evroshtaketnik/99cf99de-f719-46aa-8965-e6e8a3563b36.jpg",
      "/images/04-zabory/evroshtaketnik/166c1faf-e3db-4395-bca2-70b739c99a54.jpg",
      "/images/04-zabory/evroshtaketnik/888a2842-a9fe-4a63-ac1c-5fb179031ed3.jpg",
      "/images/04-zabory/evroshtaketnik/e7fa760d-7257-4adf-a3f8-26e93163633e.jpg",
      "/images/04-zabory/evroshtaketnik/e723bb7c-31e5-4be1-a498-eb3fd0e6e6cc.jpg",
      "/images/04-zabory/evroshtaketnik/e3948d4f-813d-457a-b565-f189cd038fa9.jpg",
      "/images/04-zabory/evroshtaketnik/ebf0a9e8-9f1b-4cc2-9219-bac86c8ef4b8.jpg",
      "/images/04-zabory/evroshtaketnik/DSC09559.jpg",
      "/images/04-zabory/evroshtaketnik/DSC09589.jpg",
      "/images/04-zabory/evroshtaketnik/DSC09591.jpg",
      "/images/04-zabory/evroshtaketnik/DSC09605.jpg",
      "/images/04-zabory/evroshtaketnik/DSC09636.jpg",
      "/images/04-zabory/evroshtaketnik/DSC09653.jpg",
      "/images/04-zabory/evroshtaketnik/DSC09661.jpg",
    ],
    "iz-profnastila": [
      "/images/04-zabory/profnastil/DSC09480.jpg",
      "/images/04-zabory/profnastil/DSC09487.jpg",
      "/images/04-zabory/profnastil/DSC09513.jpg",
      "/images/04-zabory/profnastil/DSC09520.jpg",
      "/images/04-zabory/profnastil/DSC09709.jpg",
      "/images/04-zabory/profnastil/DSC09717.jpg",
      "/images/04-zabory/profnastil/DSC09307.jpg",
      "/images/04-zabory/profnastil/DSC09514.jpg",
      "/images/04-zabory/profnastil/DSC09523.jpg",
      "/images/04-zabory/profnastil/DSC09730.jpg",
      "/images/04-zabory/profnastil/DSC09756.jpg",
      "/images/04-zabory/profnastil/DSC09763.jpg",
      "/images/04-zabory/profnastil/photo_2025-07-12_13-39-22.jpg",
    ],
  };
  const photos = photosBySlug[page.slug] ?? defaultPhotos;

  return (
    <ServiceTemplate
      title={page.title}
      description={page.description}
      categoryTitle="Заборы"
      path={path}
      content={getServiceContent(path)}
      photos={photos}
      heroImage={heroImage}
    />
  );
}
