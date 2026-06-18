import Container from "./Container";
import Section from "./Section";
import Breadcrumbs from "./Breadcrumbs";
import { absoluteUrl, breadcrumbSchema } from "../../lib/seo";

type PageHeroProps = {
  title: string;
  description: string;
  backgroundImage?: string;
};

export default function PageHero({ title, description, backgroundImage }: PageHeroProps) {
  const breadcrumbs = [
    { label: "Главная", href: "/" },
    { label: title, href: "#" },
  ];

  return (
    <Section className={backgroundImage ? "relative overflow-hidden text-white" : "bg-background-light"}>
      {backgroundImage ? (
        <>
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url('${backgroundImage}')` }}
            aria-hidden="true"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/35 to-black/5" aria-hidden="true" />
        </>
      ) : null}
      <Container className={backgroundImage ? "relative" : undefined}>
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(
              breadcrumbSchema([
                { name: "Главная", item: absoluteUrl("/") },
                { name: title },
              ]),
            ),
          }}
        />
        <Breadcrumbs items={breadcrumbs} />
        <h1 className={`mt-5 text-4xl font-bold tracking-tight sm:text-5xl ${backgroundImage ? "text-white" : "text-text-dark"}`}>
          {title}
        </h1>
        <p className={`mt-4 max-w-2xl ${backgroundImage ? "text-white/85" : "text-text-secondary"}`}>
          {description}
        </p>
      </Container>
    </Section>
  );
}
