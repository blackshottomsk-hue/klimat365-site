import CTASection from "../sections/CTASection";
import GeoCoverageSection from "../sections/GeoCoverageSection";
import Card from "../ui/Card";
import Container from "../ui/Container";
import PageHero from "../ui/PageHero";
import Section from "../ui/Section";
import Link from "next/link";
import type { B2BContent } from "../../data/seo/b2bContent";

type B2BTemplateProps = {
  title: string;
  description: string;
  content?: B2BContent;
};

export default function B2BTemplate({ title, description, content }: B2BTemplateProps) {
  const segments =
    content?.segments ??
    ["Застройщики", "ТСЖ и ЖК", "Промышленные объекты"].map((item) => ({
      title: item,
      text: "Формируем отдельный график работ и комплектацию под ваш формат проекта и требуемые сроки.",
    }));
  const risks =
    content?.risks ?? [
      "Срыв сроков ввода объекта из-за неуправляемого подрядчика.",
      "Размытая ответственность между производством и монтажом.",
      "Нестабильное качество на больших объемах.",
      "Проблемы с закрывающими документами и согласованием этапов.",
    ];
  const process =
    content?.process ?? [
      "Назначаем ответственного менеджера проекта с единым каналом коммуникации.",
      "Формируем календарный график и контрольные точки приемки.",
      "Ведем проектную отчетность по этапам и объемам.",
      "Закрываем документы своевременно, без «бумажных хвостов».",
    ];
  const steps =
    content?.steps ?? ["Заявка", "Согласование", "Договор", "Выполнение"].map((step) => ({
      title: step,
      text: "Четкий этап с понятными сроками и ответственными.",
    }));

  return (
    <main>
      <PageHero title={title} description={description} />
      <Section>
        <Container className="grid gap-4 md:grid-cols-3">
          {segments.map((item) => (
            <Card key={item.title}>
              <h3 className="text-lg font-semibold text-text-dark">{item.title}</h3>
              <p className="mt-2 text-sm text-text-secondary">
                {item.text}
              </p>
            </Card>
          ))}
        </Container>
      </Section>
      <Section className="bg-background-light">
        <Container>
          <h2 className="text-3xl font-bold text-text-dark">{content?.productionTitle ?? "Производственные возможности"}</h2>
          <p className="mt-3 max-w-4xl text-text-secondary">
            {content?.productionText ??
              "Собственная производственная база позволяет выпускать типовые и индивидуальные решения под крупные объемы. Две штатные бригады обеспечивают стабильный темп монтажей и контроль качества на объекте."}
          </p>
        </Container>
      </Section>
      <Section>
        <Container className="grid gap-4 md:grid-cols-2">
          <Card>
            <h3 className="text-xl font-semibold text-text-dark">Какие риски B2B мы снимаем</h3>
            <ul className="mt-3 grid gap-2 text-sm text-text-secondary">
              {risks.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </Card>
          <Card>
            <h3 className="text-xl font-semibold text-text-dark">Как строим работу с корпоративными заказчиками</h3>
            <ul className="mt-3 grid gap-2 text-sm text-text-secondary">
              {process.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </Card>
        </Container>
      </Section>
      <Section>
        <Container className="grid gap-4 md:grid-cols-4">
          {steps.map((step) => (
            <Card key={step.title}>
              <p className="font-semibold text-text-dark">{step.title}</p>
              <p className="mt-2 text-sm text-text-secondary">{step.text}</p>
            </Card>
          ))}
        </Container>
      </Section>
      <Section className="bg-brand-dark text-white">
        <Container>
          <h2 className="text-3xl font-bold text-white">{content?.documentsTitle ?? "Документы и гарантии"}</h2>
          <p className="mt-3 max-w-4xl text-white/85">
            {content?.documentsText ??
              "Подготовим договор, акты, закрывающие документы и гарантийные обязательства. Работаем в белую, принимаем безналичный расчет, сопровождаем проект от запуска до сдачи."}
          </p>
        </Container>
      </Section>
      <Section>
        <Container className="grid gap-4 md:grid-cols-2">
          <Card>
            <h3 className="text-xl font-semibold text-text-dark">Что получает бизнес-заказчик</h3>
            <ul className="mt-3 grid gap-2 text-sm text-text-secondary">
              <li>• Прозрачное коммерческое предложение с детализацией по этапам.</li>
              <li>• Единый проектный менеджер и понятный канал коммуникации.</li>
              <li>• Согласованный график реализации и контроль выполнения сроков.</li>
              <li>• Официальный документооборот и гарантийные обязательства.</li>
            </ul>
          </Card>
          <Card>
            <h3 className="text-xl font-semibold text-text-dark">Следующий шаг по проекту</h3>
            <p className="mt-3 text-sm text-text-secondary">
              Отправьте вводные по объекту, и мы подготовим коммерческое
              предложение с техническим решением, этапностью и бюджетным
              ориентиром под ваш формат закупки.
            </p>
            <div className="mt-4 flex flex-wrap gap-3 text-sm font-semibold">
              <Link href="/kontakty" className="text-brand hover:text-brand-dark">
                Обсудить проект →
              </Link>
              <Link href="/portfolio" className="text-brand hover:text-brand-dark">
                Смотреть кейсы →
              </Link>
            </div>
          </Card>
        </Container>
      </Section>
      <GeoCoverageSection compact />
      <CTASection />
    </main>
  );
}

