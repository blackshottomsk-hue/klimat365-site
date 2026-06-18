import type { Metadata } from "next";
import CTASection from "../../components/sections/CTASection";
import ContactSection from "../../components/sections/ContactSection";
import FAQSection from "../../components/sections/FAQSection";
import GeoCoverageSection from "../../components/sections/GeoCoverageSection";
import Card from "../../components/ui/Card";
import Container from "../../components/ui/Container";
import PageHero from "../../components/ui/PageHero";
import Section from "../../components/ui/Section";
import { gatesCluster } from "../../data/seo/clusters";
import { seoPageData } from "../../data/seo/pages";
import { buildMetadata } from "../../lib/seo";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = buildMetadata(seoPageData.vorota);

export default function VorotaPage() {
  const gateCards = gatesCluster.map((item) => ({
    title: item.title,
    href: `/vorota/${item.slug}`,
    description: item.description,
  }));

  const comparison = [
    {
      title: "Откатные ворота",
      bestFor: "Узкие проезды и регулярный въезд",
      pluses: "Комфорт, экономия места у въезда, удобная интеграция автоматики",
      note: "Важно правильно рассчитать зону отката и основание",
      href: "/vorota/otkatnye",
    },
    {
      title: "Распашные ворота",
      bestFor: "Классические частные объекты и умеренный трафик",
      pluses: "Простая конструкция, доступный бюджет, ремонтопригодность",
      note: "Нужен свободный ход створок и корректные опоры",
      href: "/vorota/raspashnye",
    },
    {
      title: "Автоматические ворота",
      bestFor: "Объекты с ежедневной интенсивной эксплуатацией",
      pluses: "Удобство, безопасность, контроль доступа",
      note: "Ключевой фактор - правильный подбор привода и настройка",
      href: "/vorota/avtomaticheskie",
    },
  ];

  const pains = [
    "Неясно, какой тип ворот подойдет под конкретный въезд.",
    "Страх скрытых доплат по автоматике и монтажу.",
    "Сомнения, что ворота будут стабильно работать зимой.",
    "Риск выбрать «дешево сейчас» и переплатить на ремонтах позже.",
  ];

  const answers = [
    "Подбираем тип ворот после замера и технического разбора площадки.",
    "Даем прозрачную смету: отдельно конструкция, автоматика, монтаж, допработы.",
    "Настраиваем систему под реальные нагрузки и сезонную эксплуатацию.",
    "Показываем разницу по стоимости владения, а не только стартовую цену.",
  ];

  const steps = [
    "Заявка и предварительная консультация по задаче объекта.",
    "Выезд замерщика и анализ конфигурации въезда.",
    "Подготовка сметы с вариантами комплектации и сроками.",
    "Согласование, договор и запуск производства/монтажа.",
    "Монтаж, настройка, проверка и официальная сдача объекта.",
  ];

  return (
    <main>
      <PageHero
        title="Ворота"
        description="Расширенный раздел по воротам ZABORIO: подбираем конфигурацию под ваш проезд, режим эксплуатации и бюджет. Прозрачная смета, четкие сроки и контроль качества на каждом этапе."
      />

      <Section>
        <Container>
          <div className="rounded-2xl bg-brand-dark p-7 text-white">
            <h2 className="text-3xl font-bold text-white">Ворота под ключ без хаоса и сюрпризов</h2>
            <p className="mt-3 max-w-4xl text-white/85">
              Работаем как сервис: сначала технический разбор объекта, затем прозрачная смета,
              фиксированные этапы и договор. Вы понимаете, сколько стоит проект, когда он будет
              готов и какой результат получите на сдаче.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <Link href="/kalkulyator-zabora" className="rounded-xl bg-white px-5 py-3 text-sm font-semibold text-brand">
                Рассчитать стоимость
              </Link>
              <Link href="/kontakty" className="rounded-xl border border-white/35 px-5 py-3 text-sm font-semibold text-white">
                Вызвать замерщика
              </Link>
            </div>
          </div>
        </Container>
      </Section>

      <Section className="bg-background-light">
        <Container>
          <h2 className="text-3xl font-bold text-text-dark">Виды ворот и готовые решения</h2>
          <p className="mt-3 max-w-4xl text-text-secondary">
            Ниже ключевые направления с отдельными страницами. По каждому решению вы получите
            понятные ориентиры цены, сценарии применения и рекомендации по комплектации.
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {gateCards.map((item) => (
              <Card key={item.href}>
                <h3 className="text-xl font-semibold text-text-dark">{item.title}</h3>
                <p className="mt-2 text-sm text-text-secondary">{item.description}</p>
                <Link href={item.href} className="mt-4 inline-block text-sm font-semibold text-brand hover:text-brand-dark">
                  Перейти к решению →
                </Link>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <h2 className="text-3xl font-bold text-text-dark">Сравнение: какие ворота выбрать</h2>
          <div className="mt-6 grid gap-4 lg:grid-cols-3">
            {comparison.map((item) => (
              <Card key={item.title}>
                <h3 className="text-xl font-semibold text-text-dark">{item.title}</h3>
                <p className="mt-3 text-sm text-text-secondary">
                  <span className="font-semibold text-text-dark">Лучше всего подходит:</span> {item.bestFor}
                </p>
                <p className="mt-2 text-sm text-text-secondary">
                  <span className="font-semibold text-text-dark">Преимущества:</span> {item.pluses}
                </p>
                <p className="mt-2 text-sm text-text-secondary">
                  <span className="font-semibold text-text-dark">Важно учесть:</span> {item.note}
                </p>
                <Link href={item.href} className="mt-4 inline-block text-sm font-semibold text-brand hover:text-brand-dark">
                  Подробнее →
                </Link>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="bg-background-light">
        <Container className="grid gap-4 md:grid-cols-2">
          <Card>
            <h2 className="text-2xl font-bold text-text-dark">Частые боли клиентов</h2>
            <ul className="mt-3 grid gap-2 text-sm text-text-secondary">
              {pains.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </Card>
          <Card>
            <h2 className="text-2xl font-bold text-text-dark">Как ZABORIO это решает</h2>
            <ul className="mt-3 grid gap-2 text-sm text-text-secondary">
              {answers.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </Card>
        </Container>
      </Section>

      <Section>
        <Container className="grid gap-4 md:grid-cols-3">
          <Card>
            <h2 className="text-2xl font-bold text-text-dark">Ориентир по бюджету</h2>
            <p className="mt-3 text-sm text-text-secondary">
              Стоимость зависит от типа ворот, ширины проезда, автоматики и сложности монтажа.
              Даем ориентир до замера и фиксируем итог после согласования.
            </p>
            <p className="mt-4 text-2xl font-extrabold text-brand">от 62 000 ₽ до 210 000 ₽</p>
            <Link href="/ceny/vorota" className="mt-4 inline-block text-sm font-semibold text-brand hover:text-brand-dark">
              Смотреть детализацию цен →
            </Link>
          </Card>
          <Card>
            <h2 className="text-2xl font-bold text-text-dark">Этапы работы</h2>
            <ul className="mt-3 grid gap-2 text-sm text-text-secondary">
              {steps.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </Card>
          <Card>
            <h2 className="text-2xl font-bold text-text-dark">Полезные переходы</h2>
            <ul className="mt-3 grid gap-2 text-sm">
              <li><Link href="/portfolio" className="text-brand hover:text-brand-dark">Портфолио воротных групп</Link></li>
              <li><Link href="/blog/kak-vybrat-zabor" className="text-brand hover:text-brand-dark">Как выбрать решение без переплаты</Link></li>
              <li><Link href="/faq" className="text-brand hover:text-brand-dark">FAQ по срокам, гарантии и документам</Link></li>
              <li><Link href="/kontakty" className="text-brand hover:text-brand-dark">Связаться с инженером</Link></li>
            </ul>
          </Card>
        </Container>
      </Section>

      <Section className="bg-background-light">
        <Container>
          <h2 className="text-3xl font-bold text-text-dark sm:text-4xl">Фото выполненных ворот</h2>
          <p className="mt-4 max-w-3xl text-text-secondary">Реальные объекты: откатные и распашные ворота, воротные группы с калитками.</p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              "/images/05-vorota/DSC09304.jpg",
              "/images/05-vorota/DSC09310.jpg",
              "/images/05-vorota/DSC09386.jpg",
              "/images/05-vorota/DSC09489.jpg",
              "/images/05-vorota/DSC09497.jpg",
              "/images/05-vorota/DSC09593.jpg",
              "/images/05-vorota/20250315_131656.jpg",
              "/images/05-vorota/20250315_173402.jpg",
            ].map((src, i) => (
              <div key={src} className="overflow-hidden rounded-2xl border border-border">
                <Image src={src} alt={`Ворота — объект ${i + 1}`} width={800} height={600} className="h-48 w-full object-cover" loading="lazy" />
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <GeoCoverageSection compact title="Устанавливаем ворота в СПб и Ленинградской области" />
      <FAQSection />
      <CTASection />
      <ContactSection />
    </main>
  );
}
