import type { Metadata } from "next";
import FenceProposalCalculator from "../../components/calculator/FenceProposalCalculator";
import { buildMetadata } from "../../lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Калькулятор стоимости забора и КП | ZABORIO",
  description:
    "Онлайн-калькулятор ZABORIO для расчета заборов, ворот и калиток под параметры участка. Помогает получить предварительную смету и коммерческое предложение.",
  path: "/kalkulyator-zabora",
});

export default function KalkulyatorPage() {
  return <FenceProposalCalculator />;
}
