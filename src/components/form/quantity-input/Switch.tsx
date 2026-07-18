import { cn } from "../../../lib/cn";

interface SwitchProps {
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  label?: string;
  disabled?: boolean;
  className?: string;
  size?: "sm" | "md" | "lg";
}

export const Switch = ({
  checked = false,
  onChange,
  label,
  disabled,
  className,
  size = "md",
}: SwitchProps) => {
  const sizeClasses = {
    sm: "w-8 h-4",
    md: "w-11 h-6",
    lg: "w-14 h-8",
  };

  const thumbSize = {
    sm: "w-3 h-3",
    md: "w-5 h-5",
    lg: "w-7 h-7",
  };

  const thumbTranslate = {
    sm: checked ? "translate-x-4" : "translate-x-0",
    md: checked ? "translate-x-5" : "translate-x-0",
    lg: checked ? "translate-x-6" : "translate-x-0",
  };

  return (
    <label className={cn("flex items-center gap-3 cursor-pointer", className)}>
      <div className="relative">
        <input
          type="checkbox"
          checked={checked}
          onChange={(e) => onChange?.(e.target.checked)}
          disabled={disabled}
          className="sr-only"
        />
        <div
          className={cn(
            "rounded-full transition-colors",
            sizeClasses[size],
            checked ? "bg-primary" : "bg-muted",
            disabled && "opacity-50 cursor-not-allowed",
          )}
        />
        <div
          className={cn(
            "absolute top-0.5 left-0.5 bg-white rounded-full shadow-sm transition-transform",
            thumbSize[size],
            thumbTranslate[size],
            disabled && "opacity-50",
          )}
        />
      </div>
      {label && <span className="text-sm text-foreground">{label}</span>}
    </label>
  );
};
