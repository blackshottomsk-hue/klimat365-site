import { cn } from "../../lib/utils";

type SelectProps = React.SelectHTMLAttributes<HTMLSelectElement>;

export default function Select({ className, children, ...props }: SelectProps) {
  return (
    <select
      className={cn(
        "w-full rounded-xl border border-border bg-white px-4 py-3 text-sm text-text-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/40",
        className,
      )}
      {...props}
    >
      {children}
    </select>
  );
}
