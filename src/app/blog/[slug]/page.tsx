import type { Metadata } from "next";
import { blogPosts, getBlogPost } from "../../../data/seo/blogContent";
import { buildMetadata } from "../../../lib/seo";
import Breadcrumbs from "../../../components/ui/Breadcrumbs";
import Container from "../../../components/ui/Container";
import Section from "../../../components/ui/Section";
import Card from "../../../components/ui/Card";
import CTASection from "../../../components/sections/CTASection";
import GeoCoverageSection from "../../../components/sections/GeoCoverageSection";
import Link from "next/link";
import { notFound } from "next/navigation";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const post = getBlogPost(resolvedParams.slug);
  if (!post) return {};
  return buildMetadata({
    title: post.title,
    description: post.description,
    path: `/blog/${post.slug}`,
  });
}

export default async function BlogArticlePage({ params }: PageProps) {
  const resolvedParams = await params;
  const post = getBlogPost(resolvedParams.slug);
  if (!post) notFound();

  const related = blogPosts
    .filter((p) => p.slug !== post.slug && p.tags.some((t) => post.tags.includes(t)))
    .slice(0, 3);

  const fallbackRelated = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 3);
  const relatedPosts = related.length > 0 ? related : fallbackRelated;

  return (
    <main>
      <Section className="pb-0 pt-8">
        <Container>
          <Breadcrumbs
            items={[
              { label: "Главная", href: "/" },
              { label: "Блог", href: "/blog" },
              { label: post.title, href: "#" },
            ]}
          />
        </Container>
      </Section>
      <Section>
        <Container className="max-w-8xl grid gap-8 lg:grid-cols-[1fr_320px]">
          <article className="rounded-2xl border border-border bg-white p-6 md:p-8">
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-brand/10 px-2.5 py-0.5 text-xs font-medium text-brand"
                >
                  {tag}
                </span>
              ))}
            </div>
            <h1 className="mt-4 text-2xl font-bold leading-tight text-text-dark md:text-3xl">
              {post.title}
            </h1>
            <p className="mt-2 text-sm text-text-secondary">
              {new Date(post.date).toLocaleDateString("ru-RU", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
              {" · "}
              {post.readTime} минут чтения
            </p>
            <div
              className="prose prose-sm md:prose mt-6 max-w-none text-text-secondary
                prose-headings:text-text-dark prose-headings:font-bold
                prose-h2:text-xl prose-h2:mt-8 prose-h2:mb-3
                prose-h3:text-lg prose-h3:mt-6 prose-h3:mb-2
                prose-p:leading-relaxed prose-p:mb-4
                prose-ul:my-3 prose-ul:pl-5 prose-li:mb-1
                prose-ol:my-3 prose-ol:pl-5
                prose-table:w-full prose-table:text-sm
                prose-th:text-left prose-th:py-2 prose-th:px-3 prose-th:bg-background-light prose-th:font-semibold
                prose-td:py-2 prose-td:px-3 prose-td:border-b prose-td:border-border
                prose-strong:text-text-dark"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
            <div className="mt-8 rounded-xl border border-brand/25 bg-brand/5 p-5">
              <p className="font-semibold text-text-dark">
                Нужна установка или обслуживание кондиционера?
              </p>
              <p className="mt-1 text-sm text-text-secondary">
                Климат 365 — монтаж, ремонт и ТО кондиционеров в СПб и Ленобласти.
                Выезд мастера бесплатно. Гарантия 2 года на монтажные работы.
              </p>
              <Link
                href="/kontakty"
                className="mt-3 inline-block rounded-lg bg-brand px-4 py-2 text-sm font-semibold text-white transition hover:bg-brand-dark"
              >
                Оставить заявку
              </Link>
            </div>
          </article>
          <aside className="flex flex-col gap-5">
            <div className="rounded-2xl border border-border bg-white p-5">
              <p className="font-semibold text-text-dark">Похожие статьи</p>
              <ul className="mt-3 grid gap-3">
                {relatedPosts.map((related) => (
                  <li key={related.slug}>
                    <Link
                      href={`/blog/${related.slug}`}
                      className="block rounded-lg border border-border p-3 transition hover:border-brand/40 hover:bg-brand/5"
                    >
                      <p className="text-sm font-semibold leading-snug text-text-dark">
                        {related.title}
                      </p>
                      <p className="mt-1 text-xs text-text-secondary">
                        {related.readTime} мин чтения
                      </p>
                    </Link>
                  </li>
                ))}
              </ul>
              <Link
                href="/blog"
                className="mt-4 inline-block text-sm font-semibold text-brand underline-offset-2 hover:underline"
              >
                Все статьи блога →
              </Link>
            </div>
            <div className="rounded-2xl border border-brand/20 bg-brand/5 p-5">
              <p className="font-semibold text-text-dark">Климат 365</p>
              <p className="mt-2 text-sm text-text-secondary">
                Монтаж, обслуживание и ремонт кондиционеров в Санкт-Петербурге и Ленинградской области.
                Работаем в новых ЖК: Кудрово, Мурино, Новосаратовка.
              </p>
              <div className="mt-3 grid gap-2">
                <Link
                  href="/uslugi/montazh-kondicionerov"
                  className="text-sm font-semibold text-brand underline-offset-2 hover:underline"
                >
                  Монтаж кондиционеров
                </Link>
                <Link
                  href="/uslugi/obsluzhivanie-kondicionerov"
                  className="text-sm font-semibold text-brand underline-offset-2 hover:underline"
                >
                  Обслуживание и чистка
                </Link>
                <Link
                  href="/uslugi/remont-kondicionerov"
                  className="text-sm font-semibold text-brand underline-offset-2 hover:underline"
                >
                  Ремонт кондиционеров
                </Link>
                <Link
                  href="/ceny"
                  className="text-sm font-semibold text-brand underline-offset-2 hover:underline"
                >
                  Цены
                </Link>
              </div>
            </div>
          </aside>
        </Container>
      </Section>
      <GeoCoverageSection compact />
      <CTASection />
    </main>
  );
}
