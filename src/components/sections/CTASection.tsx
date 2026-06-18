import CTABox from "../ui/CTABox";
import Container from "../ui/Container";
import Section from "../ui/Section";

export default function CTASection() {
  return (
    <Section className="bg-background-light">
      <Container>
        <CTABox
          title="Получите расчёт под ваш участок"
          description="Подготовим понятную смету по позициям, предложим 2-3 варианта комплектации и сразу объясним, где реально можно сэкономить без потери надежности."
        />
        <div className="mt-4 grid gap-3 text-sm text-text-secondary md:grid-cols-3">
          <p>• Прозрачная стоимость без скрытых строк</p>
          <p>• Техническое решение под грунт и нагрузку</p>
          <p>• Официальный договор и гарантийные обязательства</p>
        </div>
      </Container>
    </Section>
  );
}
