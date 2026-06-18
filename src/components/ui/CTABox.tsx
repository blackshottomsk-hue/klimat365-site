import Card from "./Card";
import Link from "next/link";

type CTABoxProps = {
  title: string;
  description: string;
};

export default function CTABox({ title, description }: CTABoxProps) {
  return (
    <Card className="border-0 bg-[linear-gradient(135deg,#1E5F2C,#2E7D3E)] p-8 text-white shadow-md hover:border-0 hover:shadow-lg">
      <h3 className="text-2xl font-bold">{title}</h3>
      <p className="mt-3 text-white/90">{description}</p>
      <Link
        href="/kalkulyator-zabora"
        className="mt-6 inline-flex items-center justify-center rounded-xl bg-white px-5 py-3 text-sm font-semibold text-brand-dark transition duration-200 hover:bg-brand-accent"
      >
        Рассчитать стоимость
      </Link>
    </Card>
  );
}
