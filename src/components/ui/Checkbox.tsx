type CheckboxProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label: string;
};

export default function Checkbox({ label, id, ...props }: CheckboxProps) {
  const checkboxId = id ?? label.replace(/\s+/g, "-").toLowerCase();

  return (
    <label htmlFor={checkboxId} className="inline-flex items-center gap-2 text-sm text-text-secondary">
      <input
        id={checkboxId}
        type="checkbox"
        className="h-4 w-4 rounded border-border text-brand focus:ring-brand/40"
        {...props}
      />
      {label}
    </label>
  );
}
