type SectionTitleProps = {
  title: string;
  subtitle?: string;
  centered?: boolean;
};

export default function SectionTitle({ title, subtitle, centered }: SectionTitleProps) {
  return (
    <div className={centered ? "text-center" : ""}>
      <h2 className="text-3xl font-bold tracking-tight text-text-dark sm:text-4xl">{title}</h2>
      {subtitle ? <p className="mt-4 text-text-secondary">{subtitle}</p> : null}
    </div>
  );
}
