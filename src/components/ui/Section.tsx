import { cn } from "../../lib/utils";

type SectionProps = {
  children: React.ReactNode;
  className?: string;
};

export default function Section({ children, className }: SectionProps) {
  return <section className={cn("py-14 sm:py-16 lg:py-20", className)}>{children}</section>;
}
