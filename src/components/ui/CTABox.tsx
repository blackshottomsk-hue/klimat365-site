import Link from "next/link";
import Card from "./Card";

type CTABoxProps = {
  title: string;
  description: string;
};

export default function CTABox({ title, description }: CTABoxProps) {
  return (
    <Card className="border-0 bg-brand-dark p-8 text-white shadow-md hover:border-0 hover:shadow-lg">
      <h3 className="text-2xl font-bold">{title}</h3>
      <p className="mt-3 text-white/90">{description}</p>
      <Link
        href="/kontakty"
        className="mt-6 inline-flex items-center justify-center rounded-xl bg-white px-5 py-3 text-sm font-semibold text-brand-dark transition duration-200 hover:bg-brand-accent"
      >
        Оставить заявку
      </Link>
    </Card>
  );
}
