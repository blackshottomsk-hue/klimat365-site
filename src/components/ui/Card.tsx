import { cn } from "../../lib/utils";

type CardProps = {
  children: React.ReactNode;
  className?: string;
};

export default function Card({ children, className }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-border bg-white p-6 shadow-card transition duration-200 hover:border-brand/40 hover:shadow-card-hover",
        className,
      )}
    >
      {children}
    </div>
  );
}
