import { leningradOblastDirections, southSpbDistricts } from "../../data/seo/geo";
import Card from "../ui/Card";
import Container from "../ui/Container";
import Section from "../ui/Section";

type GeoCoverageSectionProps = {
  title?: string;
  compact?: boolean;
};

export default function GeoCoverageSection({
  title = "Где работаем и почему это важно для сроков",
  compact = false,
}: GeoCoverageSectionProps) {
  return (
    <Section className="bg-background-light">
      <Container>
        <h2 className="text-3xl font-bold text-text-dark sm:text-4xl">{title}</h2>
        <p className="mt-4 max-w-4xl text-text-secondary">
          Специализируемся на Ленинградской области и южных районах Санкт-Петербурга.
          Это позволяет быстро выезжать на замер, не срывать график монтажа и держать
          стабильную логистику материалов без лишних транспортных наценок.
        </p>

        <div className={`mt-6 grid gap-4 ${compact ? "md:grid-cols-2" : "md:grid-cols-3"}`}>
          <Card>
            <h3 className="text-xl font-semibold text-text-dark">Юг Санкт-Петербурга</h3>
            <ul className="mt-3 grid gap-2 text-sm text-text-secondary">
              {southSpbDistricts.map((district) => (
                <li key={district}>• {district}</li>
              ))}
            </ul>
          </Card>

          <Card>
            <h3 className="text-xl font-semibold text-text-dark">Ленинградская область</h3>
            <ul className="mt-3 grid gap-2 text-sm text-text-secondary">
              {leningradOblastDirections.map((district) => (
                <li key={district}>• {district}</li>
              ))}
            </ul>
          </Card>

          <Card className={compact ? "md:col-span-2" : ""}>
            <h3 className="text-xl font-semibold text-text-dark">Что это дает клиенту</h3>
            <ul className="mt-3 grid gap-2 text-sm text-text-secondary">
              <li>• Быстрый выезд замерщика по приоритетным локациям.</li>
              <li>• Реалистичные сроки и меньше рисков переносов.</li>
              <li>• Оптимальная логистика без переплаты за дальние выезды.</li>
              <li>• Техрешения на основе практики по местным грунтам и климату.</li>
            </ul>
          </Card>
        </div>
      </Container>
    </Section>
  );
}
