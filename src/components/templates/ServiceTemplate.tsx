import CTASection from "../sections/CTASection";
import GeoCoverageSection from "../sections/GeoCoverageSection";
import FAQSection from "../sections/FAQSection";
import StepsSection from "../sections/StepsSection";
import ContactSection from "../sections/ContactSection";
import Breadcrumbs from "../ui/Breadcrumbs";
import Button from "../ui/Button";
import Card from "../ui/Card";
import Container from "../ui/Container";
import PageHero from "../ui/PageHero";
import Section from "../ui/Section";
import { faqSchemaPlaceholder, serviceSchema } from "../../lib/seo";
import type { ServiceContent } from "../../data/seo/serviceContent";
import Link from "next/link";
import Image from "next/image";

type ServiceTemplateProps = {
  title: string;
  description: string;
  categoryTitle?: string;
  path?: string;
  content?: ServiceContent;
  photos?: string[];
  heroImage?: string;
};

export default function ServiceTemplate({
  title,
  description,
  categoryTitle,
  path = "/uslugi",
  content,
  photos,
  heroImage,
}: ServiceTemplateProps) {
  return (
    <main>
      <PageHero title={title} description={description} backgroundImage={heroImage} />
      <script type="application/ld+json" suppressHydrationWarning dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchemaPlaceholder()) }} />
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            serviceSchema({
              name: title,
              description,
              path,
            }),
          ),
        }}
      />
      <Section>
        <Container>
          <Breadcrumbs items={[{ label: "Главная", href: "/" }, { label: categoryTitle ?? "Услуги", href: "#" }, { label: title, href: "#" }]} />
          <div className="mt-6 rounded-2xl bg-brand-dark p-7 text-white">
            <h2 className="text-2xl font-bold text-white">Коммерческий оффер</h2>
            <p className="mt-3 max-w-3xl text-white/85">
              {content?.lead ??
                `Выполняем ${title.toLowerCase()} с опорой на 15+ лет практики. За
              спиной команды 5000+ монтажей, 2 собственные бригады и свое
              производство, поэтому даем прогнозируемые сроки и качество.`}
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/kalkulyator-zabora">
                <Button>Получить расчет</Button>
              </Link>
              <Link
                href="/portfolio"
                className="inline-flex rounded-xl border border-white/35 px-5 py-3 text-sm font-semibold text-white transition duration-200 hover:border-brand-accent hover:text-brand-accent"
              >
                Смотреть объекты
              </Link>
            </div>
          </div>
        </Container>
      </Section>
      <Section className="bg-background-light">
        <Container className="grid gap-4 md:grid-cols-3">
          <Card>
            <h2 className="text-2xl font-bold text-text-dark">Ориентир по цене</h2>
            <p className="mt-2 text-sm text-text-secondary">
              Предварительный диапазон стоимости зависит от длины, высоты, типа
              основания и комплектации. Точную смету фиксируем после замера.
            </p>
            <p className="mt-4 text-2xl font-extrabold text-brand">{content?.priceFrom ?? "от 2 300 ₽/м.п."}</p>
            <Link href="/ceny" className="mt-4 inline-block text-sm font-semibold text-brand hover:text-brand-dark">
              Смотреть детализацию цен →
            </Link>
          </Card>
          <Card>
            <h2 className="text-2xl font-bold text-text-dark">Гарантии и документы</h2>
            <ul className="mt-3 grid gap-2 text-sm text-text-secondary">
              <li>• Официальный договор с фиксацией объема и сроков.</li>
              <li>• Прозрачная смета до старта работ.</li>
              <li>• Гарантийные обязательства на монтажные работы.</li>
              <li>• Фотофиксация этапов и закрывающие документы.</li>
            </ul>
          </Card>
          <Card>
            <h2 className="text-2xl font-bold text-text-dark">Похожие услуги</h2>
            <ul className="mt-3 grid gap-2 text-sm">
              {(content?.related ?? [
                { label: "Заборы под ключ", href: "/zabory" },
                { label: "Ворота и автоматика", href: "/vorota" },
                { label: "Технологии монтажа", href: "/montazh" },
                { label: "Портфолио объектов", href: "/portfolio" },
              ]).map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-brand hover:text-brand-dark">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </Card>
        </Container>
      </Section>
      {content ? (
        <Section>
          <Container className="grid gap-4 md:grid-cols-2">
            <Card>
              <h2 className="text-2xl font-bold text-text-dark">Практические акценты по объекту</h2>
              <ul className="mt-3 grid gap-2 text-sm text-text-secondary">
                {content.practicalPoints.map((point) => (
                  <li key={point}>• {point}</li>
                ))}
              </ul>
            </Card>
            <Card>
              <h2 className="text-2xl font-bold text-text-dark">Где решение подходит лучше всего</h2>
              <ul className="mt-3 grid gap-2 text-sm text-text-secondary">
                {content.suitableFor.map((point) => (
                  <li key={point}>• {point}</li>
                ))}
              </ul>
            </Card>
          </Container>
        </Section>
      ) : null}
      {content?.workItems?.length ? (
        <Section className="bg-background-light">
          <Container>
            <h2 className="text-3xl font-bold text-text-dark">Типовые работы и ориентиры цен</h2>
            <div className="mt-6 overflow-x-auto rounded-2xl border border-border bg-white">
              <table className="w-full min-w-[640px] border-collapse text-sm">
                <thead>
                  <tr className="bg-background-light">
                    <th className="border-b border-border px-4 py-3 text-left font-semibold text-text-dark">Наименование работ</th>
                    <th className="border-b border-border px-4 py-3 text-left font-semibold text-text-dark">Ед. изм.</th>
                    <th className="border-b border-border px-4 py-3 text-left font-semibold text-text-dark">Цена</th>
                  </tr>
                </thead>
                <tbody>
                  {content.workItems.map((item) => (
                    <tr key={`${item.name}-${item.unit}`}>
                      <td className="border-b border-border px-4 py-3 text-text-secondary">{item.name}</td>
                      <td className="border-b border-border px-4 py-3 text-text-secondary">{item.unit}</td>
                      <td className="border-b border-border px-4 py-3 font-semibold text-text-dark">{item.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-xs text-text-secondary">
              Итоговая стоимость уточняется после замера и зависит от объема, глубины,
              сложности доступа и сопутствующих работ на объекте.
            </p>
          </Container>
        </Section>
      ) : null}
      <Section>
        <Container>
          <h2 className="text-3xl font-bold text-text-dark">Что входит в работу по этому направлению</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {[
              "Технический разбор участка и сценария эксплуатации.",
              "Подбор 2-3 рабочих вариантов комплектации под бюджет.",
              "Детальная смета с фиксацией ключевых условий в договоре.",
              "Подготовка материалов и организация этапов монтажа.",
              "Контроль качества на узловых точках проекта.",
              "Финальная сдача с актами и гарантийными обязательствами.",
            ].map((item) => (
              <Card key={item}>
                <p className="text-sm text-text-secondary">• {item}</p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>
      <Section className="bg-background-light">
        <Container className="grid gap-4 md:grid-cols-2">
          <Card>
            <h2 className="text-2xl font-bold text-text-dark">Как проверить подрядчика до подписания</h2>
            <ul className="mt-3 grid gap-2 text-sm text-text-secondary">
              <li>• Есть ли прозрачная смета по строкам, а не «цена от» без деталей.</li>
              <li>• Прописаны ли этапы, сроки и ответственность сторон в договоре.</li>
              <li>• Учитываются ли грунт, нагрузки и специфика именно вашего объекта.</li>
              <li>• Есть ли реальные кейсы и подтвержденный опыт по похожим задачам.</li>
            </ul>
          </Card>
          <Card>
            <h2 className="text-2xl font-bold text-text-dark">Следующий логичный шаг</h2>
            <p className="mt-3 text-sm text-text-secondary">
              Отправьте параметры объекта, и мы подготовим понятное предложение с
              вариантами комплектации, ориентиром по срокам и бюджету. Без
              давления - только практичные решения под вашу задачу.
            </p>
            <div className="mt-4 flex flex-wrap gap-3 text-sm font-semibold">
              <Link href="/kalkulyator-zabora" className="text-brand hover:text-brand-dark">
                Рассчитать стоимость →
              </Link>
              <Link href="/kontakty" className="text-brand hover:text-brand-dark">
                Связаться с инженером →
              </Link>
            </div>
          </Card>
        </Container>
      </Section>
      <Section className="bg-background-light">
        <Container className="grid gap-4 md:grid-cols-3">
          {[
            "Собственная производственная база",
            "Фиксированная смета и договор",
            "Опыт работы с частными и B2B объектами",
          ].map((item) => (
            <Card key={item}>
              <h3 className="text-lg font-semibold text-text-dark">{item}</h3>
              <p className="mt-2 text-sm text-text-secondary">
                Реальные инженерные решения под грунт, ветровую нагрузку и задачу
                конкретного участка.
              </p>
            </Card>
          ))}
        </Container>
      </Section>
      <Section>
        <Container className="grid gap-4 md:grid-cols-2">
          <Card>
            <h3 className="text-xl font-semibold text-text-dark">Главные боли клиентов до старта работ</h3>
            <ul className="mt-3 grid gap-2 text-sm text-text-secondary">
              <li>• Нет понимания, как выбрать конструкцию под конкретный участок.</li>
              <li>• Непрозрачные сметы и риск внезапных допработ.</li>
              <li>• Сомнения, выдержит ли ограждение нагрузку и сезонную эксплуатацию.</li>
              <li>• Страх сорванных сроков и слабого контроля на объекте.</li>
            </ul>
          </Card>
          <Card>
            <h3 className="text-xl font-semibold text-text-dark">Как мы это закрываем</h3>
            <ul className="mt-3 grid gap-2 text-sm text-text-secondary">
              <li>• Подбираем решение после технического разбора участка, а не «по шаблону».</li>
              <li>• Даем детальную смету по строкам с понятной комплектацией.</li>
              <li>• Учитываем грунт, ветровую нагрузку и режим эксплуатации при расчете.</li>
              <li>• Фиксируем этапы, сроки и ответственность в договоре.</li>
            </ul>
          </Card>
        </Container>
      </Section>
      <Section>
        <Container className="grid gap-4 md:grid-cols-2">
          {[
            "Оптимальное решение по бюджету",
            "Усиленная комплектация под повышенные нагрузки",
          ].map((item) => (
            <Card key={item}>
              <h3 className="text-lg font-semibold text-text-dark">{item}</h3>
              <p className="mt-2 text-sm text-text-secondary">
                Подбираем конфигурацию, которая дает баланс стоимости, срока службы
                и внешнего вида.
              </p>
            </Card>
          ))}
        </Container>
      </Section>
      <Section className="bg-background-light">
        <Container>
          <h2 className="text-3xl font-bold text-text-dark">Возражения, которые разбираем заранее</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {(content?.objections ?? [
              {
                title: "«У конкурентов дешевле»",
                answer:
                  "Сравниваем предложения по техническим параметрам: толщина, шаг столбов, тип основания, крепеж, гарантия. Разница в цене почти всегда объяснима комплектацией.",
              },
              {
                title: "«Боюсь скрытых платежей»",
                answer:
                  "Предупреждаем о возможных рисках после замера и вносим это в смету до начала работ. Вы заранее понимаете финансовые рамки проекта.",
              },
            ]).map((objection) => (
              <Card key={objection.title}>
                <h3 className="font-semibold text-text-dark">{objection.title}</h3>
                <p className="mt-2 text-sm text-text-secondary">{objection.answer}</p>
              </Card>
            ))}
            <Card>
              <h3 className="font-semibold text-text-dark">«Сделаю позже, когда будет время»</h3>
              <p className="mt-2 text-sm text-text-secondary">
                Откладывание часто повышает стоимость и увеличивает сроки. Помогаем выбрать
                оптимальный период и поэтапный формат, если нужен гибкий бюджет.
              </p>
            </Card>
            <Card>
              <h3 className="font-semibold text-text-dark">«Нужны гарантии и документы»</h3>
              <p className="mt-2 text-sm text-text-secondary">
                Работаем официально: договор, акты, гарантийные обязательства, прозрачная
                фиксация выполненных этапов и итоговой комплектации.
              </p>
            </Card>
          </div>
        </Container>
      </Section>
      <Section className="bg-brand-dark text-white">
        <Container>
          <h2 className="text-3xl font-bold text-white">Блок доверия</h2>
          <p className="mt-3 max-w-4xl text-white/85">
            Работаем официально: договор, прозрачная смета, гарантийные
            обязательства. Показываем реальные объекты, отзывы и промежуточные
            этапы монтажа, чтобы клиент видел качество еще до подписания.
          </p>
        </Container>
      </Section>
      <Section>
        <Container>
          <h2 className="text-3xl font-bold text-text-dark">Фото объектов</h2>
          <p className="mt-3 max-w-3xl text-text-secondary">
            Ниже типовые примеры объектов по этому направлению. Для детального
            разбора комплектации и стоимости каждого кейса переходите в портфолио.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {(photos ?? []).map((src, index) => (
              <div key={src} className="overflow-hidden rounded-2xl border border-border bg-background-light">
                <Image
                  src={src}
                  alt={`${title} — объект ${index + 1}`}
                  width={800}
                  height={600}
                  className="h-48 w-full object-cover"
                  loading="lazy"
                />
              </div>
            ))}
            {!photos?.length && Array.from({ length: 3 }).map((_, index) => (
              <div key={index} className="rounded-2xl border border-border bg-background-light p-4">
                <div className="h-40 rounded-xl bg-white" />
                <p className="mt-3 text-sm font-semibold text-text-dark">Объект {index + 1}</p>
                <p className="mt-1 text-xs text-text-secondary">Краткий кейс: конфигурация, сроки и итоговая комплектация</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>
      <GeoCoverageSection />
      <StepsSection />
      <FAQSection />
      <CTASection />
      <ContactSection />
    </main>
  );
}

