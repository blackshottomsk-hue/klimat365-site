import type { Metadata } from "next";
import { seoPageData } from "../../data/seo/pages";
import { buildMetadata } from "../../lib/seo";
import { blogPosts } from "../../data/seo/blogContent";
import PageHero from "../../components/ui/PageHero";
import Container from "../../components/ui/Container";
import Section from "../../components/ui/Section";
import Card from "../../components/ui/Card";
import CTASection from "../../components/sections/CTASection";
import GeoCoverageSection from "../../components/sections/GeoCoverageSection";
import Link from "next/link";

export const metadata: Metadata = buildMetadata(seoPageData.blog);

export default function BlogPage() {
  return (
    <main>
      <PageHero
        title="Блог о кондиционировании — советы, обзоры, инструкции"
        description="Полезные статьи от мастеров Климат 365: как выбрать, установить и обслуживать кондиционер в квартире, доме или офисе в СПб и Ленинградской области."
      />
      <Section>
        <Container>
          <p className="max-w-4xl text-text-secondary">
            В блоге собраны практические материалы по кондиционированию: от расчёта мощности
            и выбора марки до особенностей монтажа в новостройках Кудрово, Мурино и Новосаратовки.
            Статьи написаны на основе реального опыта монтажной бригады Климат 365.
          </p>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <Card key={post.slug}>
                <div className="flex flex-wrap gap-2">
                  {post.tags.slice(0, 2).map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-brand/10 px-2.5 py-0.5 text-xs font-medium text-brand"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="mt-3 text-base font-semibold leading-snug text-text-dark">
                  {post.title}
                </h3>
                <p className="mt-2 text-sm text-text-secondary line-clamp-3">
                  {post.description}
                </p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-xs text-text-secondary">
                    {new Date(post.date).toLocaleDateString("ru-RU", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                    {" · "}
                    {post.readTime} мин
                  </span>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-sm font-semibold text-brand underline-offset-2 transition hover:text-brand-dark hover:underline"
                  >
                    Читать →
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </Section>
      <Section className="bg-brand-dark text-white">
        <Container className="grid gap-5 md:grid-cols-3">
          <div>
            <h2 className="text-3xl font-bold text-white">Нужна помощь с кондиционером?</h2>
            <p className="mt-3 text-sm text-white/75">
              Мастера Климат 365 выезжают на консультацию, монтаж или ремонт по всему СПб и Ленобласти.
            </p>
          </div>
          <div className="rounded-xl border border-white/15 bg-brand/35 p-4 backdrop-blur-sm">
            <p className="text-sm font-semibold text-brand-accent">Монтаж под ключ</p>
            <p className="mt-2 text-sm text-white/85">
              Установка любых сплит-систем: от однокомнатной квартиры до многокомнатной с мульти-сплитом.
            </p>
          </div>
          <div className="rounded-xl border border-white/15 bg-brand/35 p-4 backdrop-blur-sm">
            <p className="text-sm font-semibold text-brand-accent">Гарантия 2 года</p>
            <p className="mt-2 text-sm text-white/85">
              На все монтажные работы — официальный договор и акт с указанием объёма заправленного фреона.
            </p>
          </div>
        </Container>
      </Section>
      <GeoCoverageSection compact />
      <CTASection />
    </main>
  );
}
