import { cn } from "../../../lib/cn";
import { Radio } from "./Radio";

interface RadioOption {
  value: string;
  label: string;
  disabled?: boolean;
}

interface RadioGroupProps {
  options: RadioOption[];
  value?: string;
  onChange?: (value: string) => void;
  label?: string;
  error?: string;
  className?: string;
  disabled?: boolean;
  direction?: "horizontal" | "vertical";
}

export const RadioGroup = ({
  options,
  value,
  onChange,
  label,
  error,
  className,
  disabled,
  direction = "vertical",
}: RadioGroupProps) => {
  return (
    <div className={cn("flex flex-col gap-2", className)}>
      {label && (
        <span className="text-sm font-medium text-foreground">{label}</span>
      )}
      <div
        className={cn(
          "flex gap-4",
          direction === "vertical" ? "flex-col" : "flex-row flex-wrap",
        )}
      >
        {options.map((option) => (
          <Radio
            key={option.value}
            label={option.label}
            name={label}
            value={option.value}
            checked={value === option.value}
            onChange={() => onChange?.(option.value)}
            disabled={disabled || option.disabled}
          />
        ))}
      </div>
      {error && <span className="text-sm text-destructive">{error}</span>}
    </div>
  );
};
