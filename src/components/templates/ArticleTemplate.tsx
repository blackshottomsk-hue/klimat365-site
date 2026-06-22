import CTASection from "../sections/CTASection";
import GeoCoverageSection from "../sections/GeoCoverageSection";
import Breadcrumbs from "../ui/Breadcrumbs";
import Container from "../ui/Container";
import PageHero from "../ui/PageHero";
import Section from "../ui/Section";
import Link from "next/link";
type BlogContent = {
  toc?: string[];
  intro?: string;
  paragraphs?: string[];
  objections?: { title: string; answer: string }[];
  ctaTitle?: string;
  ctaText?: string;
  related?: { label: string; href: string }[];
};

type ArticleTemplateProps = {
  title: string;
  description: string;
  content?: BlogContent;
};

export default function ArticleTemplate({ title, description, content }: ArticleTemplateProps) {
  const toc =
    content?.toc ?? [
      "1. Исходные данные участка",
      "2. Сравнение материалов",
      "3. Монтаж и сроки",
      "4. Бюджет и эксплуатация",
      "5. Итоговые рекомендации",
    ];
  const paragraphs =
    content?.paragraphs ?? [
      "При выборе конструкции важно учитывать не только цену материала, но и тип грунта, ветровую нагрузку, требования по приватности и дальнейшие расходы на обслуживание.",
      "Ошибки на этапе подбора основания приводят к перекосу секций и дополнительным расходам. Поэтому мы всегда начинаем с замера и технической оценки участка, а не с шаблонной сметы.",
    ];
  const objections =
    content?.objections ?? [
      {
        title: "Возражение: «Мне нужен просто самый дешёвый вариант»",
        answer:
          "Дешевле на старте не всегда выгоднее в эксплуатации. Мы показываем стоимость владения: риск ремонта, обслуживания и возможной переделки.",
      },
      {
        title: "Возражение: «Не понимаю, чем отличаются материалы»",
        answer:
          "Сравниваем варианты не по рекламным обещаниям, а по параметрам: толщина, устойчивость, срок службы, внешний вид и ремонтопригодность.",
      },
    ];
  const related =
    content?.related ?? [
      { label: "Заборы", href: "/zabory" },
      { label: "Монтаж", href: "/montazh" },
      { label: "Цены", href: "/ceny" },
    ];

  return (
    <main>
      <PageHero title={title} description={description} />
      <Section>
        <Container className="grid gap-10 lg:grid-cols-[280px_1fr]">
          <aside className="rounded-2xl border border-border bg-white p-5">
            <p className="text-sm font-semibold text-text-dark">Оглавление</p>
            <ul className="mt-3 grid gap-2 text-sm text-text-secondary">
              {toc.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </aside>
          <article className="rounded-2xl border border-border bg-white p-6">
            <Breadcrumbs items={[{ label: "Главная", href: "/" }, { label: "Блог", href: "/blog" }, { label: title, href: "#" }]} />
            <h2 className="mt-4 text-3xl font-bold text-text-dark">{title}</h2>
            <p className="mt-4 text-text-secondary">
              {content?.intro ??
                "Ниже структурирован практический разбор от команды с 15+ летним опытом монтажа заборов. Подход основан на реальных объектах в СПб и ЛО: от дачных участков до промышленных площадок."}
            </p>
            <div className="mt-5 space-y-3 text-text-secondary">
              {paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {objections.map((item) => (
                <div key={item.title} className="rounded-xl border border-border bg-background-light p-4">
                  <p className="font-semibold text-text-dark">{item.title}</p>
                  <p className="mt-2 text-sm text-text-secondary">{item.answer}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 rounded-xl border border-brand/25 bg-brand/5 p-4">
              <p className="font-semibold text-text-dark">{content?.ctaTitle ?? "CTA внутри статьи"}</p>
              <p className="mt-1 text-sm text-text-secondary">
                {content?.ctaText ??
                  "Получите консультацию инженера и расчет под параметры вашего участка в день обращения."}
              </p>
            </div>
            <div className="mt-8">
              <p className="font-semibold text-text-dark">Related pages</p>
              <div className="mt-3 flex flex-wrap gap-3 text-sm">
                {related.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="font-semibold text-brand underline-offset-2 hover:text-brand-dark hover:underline"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </article>
        </Container>
      </Section>
      <GeoCoverageSection compact />
      <CTASection />
    </main>
  );
}

