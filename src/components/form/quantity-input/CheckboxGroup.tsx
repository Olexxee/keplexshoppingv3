import { cn } from "../../../lib/cn";
import { Checkbox } from "./Checkbox";

interface CheckboxOption {
  value: string;
  label: string;
  disabled?: boolean;
}

interface CheckboxGroupProps {
  options: CheckboxOption[];
  values?: string[];
  onChange?: (values: string[]) => void;
  label?: string;
  error?: string;
  className?: string;
  disabled?: boolean;
}

export const CheckboxGroup = ({
  options,
  values = [],
  onChange,
  label,
  error,
  className,
  disabled,
}: CheckboxGroupProps) => {
  const handleToggle = (value: string) => {
    if (disabled) return;
    const newValues = values.includes(value)
      ? values.filter((v) => v !== value)
      : [...values, value];
    onChange?.(newValues);
  };

  return (
    <div className={cn("flex flex-col gap-2", className)}>
      {label && (
        <span className="text-sm font-medium text-foreground">{label}</span>
      )}
      <div className="flex flex-col gap-2">
        {options.map((option) => (
          <Checkbox
            key={option.value}
            label={option.label}
            checked={values.includes(option.value)}
            onChange={() => handleToggle(option.value)}
            disabled={disabled || option.disabled}
          />
        ))}
      </div>
      {error && <span className="text-sm text-destructive">{error}</span>}
    </div>
  );
};
