import { cn } from "../../../lib/cn";
import { Check } from "lucide-react";

interface VariantOption {
  id: string;
  label: string;
  value: string;
  disabled?: boolean;
}

interface VariantSelectorProps {
  variants: VariantOption[];
  selectedId?: string;
  onChange?: (variantId: string) => void;
  className?: string;
  size?: "sm" | "md" | "lg";
}

export const VariantSelector = ({
  variants,
  selectedId,
  onChange,
  className,
  size = "md",
}: VariantSelectorProps) => {
  const sizeClasses = {
    sm: "px-3 py-1 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg",
  };

  return (
    <div className={cn("flex flex-wrap gap-2", className)}>
      {variants.map((variant) => {
        const isSelected = selectedId === variant.id;
        return (
          <button
            key={variant.id}
            type="button"
            onClick={() => onChange?.(variant.id)}
            disabled={variant.disabled}
            className={cn(
              "relative rounded-lg border-2 transition-all",
              sizeClasses[size],
              isSelected
                ? "border-primary bg-primary/5 text-foreground"
                : "border-border-primary hover:border-border-secondary",
              variant.disabled && "opacity-50 cursor-not-allowed",
            )}
          >
            {variant.label}
            {isSelected && (
              <Check className="absolute -top-1 -right-1 w-4 h-4 text-primary bg-background rounded-full" />
            )}
          </button>
        );
      })}
    </div>
  );
};
