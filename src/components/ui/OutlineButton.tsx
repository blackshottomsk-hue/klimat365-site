import { cn } from "../../lib/utils";

type OutlineButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
};

export default function OutlineButton({
  className,
  children,
  ...props
}: OutlineButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center rounded-xl border border-brand bg-transparent px-5 py-3 text-sm font-semibold text-brand transition duration-200 hover:bg-brand hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2",
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}
