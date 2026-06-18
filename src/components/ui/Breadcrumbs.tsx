import Link from "next/link";

type Crumb = {
  label: string;
  href: string;
};

type BreadcrumbsProps = {
  items: Crumb[];
};

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb">
      <ol className="flex flex-wrap items-center gap-2 text-sm text-text-secondary">
        {items.map((item, idx) => (
          <li key={item.href} className="inline-flex items-center gap-2">
            {idx > 0 ? <span>/</span> : null}
            <Link href={item.href} className="underline-offset-2 hover:text-brand hover:underline">
              {item.label}
            </Link>
          </li>
        ))}
      </ol>
    </nav>
  );
}
