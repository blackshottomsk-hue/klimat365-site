type IconBoxProps = {
  icon?: React.ReactNode;
  title: string;
};

export default function IconBox({ icon, title }: IconBoxProps) {
  return (
    <div className="inline-flex items-center gap-3 rounded-xl border border-border bg-background-light px-4 py-3">
      <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-brand/10 text-brand">
        {icon ?? "■"}
      </span>
      <span className="text-sm font-medium text-text-dark">{title}</span>
    </div>
  );
}
