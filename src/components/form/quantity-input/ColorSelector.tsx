import { cn } from "../../../lib/cn";
import { Check } from "lucide-react";

interface ColorOption {
  id: string;
  name: string;
  hex: string;
  image?: string;
}

interface ColorSelectorProps {
  colors: ColorOption[];
  selectedId?: string;
  onChange?: (colorId: string) => void;
  size?: "sm" | "md" | "lg";
  className?: string;
  showLabel?: boolean;
}

export const ColorSelector = ({
  colors,
  selectedId,
  onChange,
  size = "md",
  className,
  showLabel = true,
}: ColorSelectorProps) => {
  const sizeClasses = {
    sm: "w-6 h-6",
    md: "w-8 h-8",
    lg: "w-10 h-10",
  };

  return (
    <div className={cn("flex flex-wrap gap-3", className)}>
      {colors.map((color) => {
        const isSelected = selectedId === color.id;
        return (
          <button
            key={color.id}
            type="button"
            onClick={() => onChange?.(color.id)}
            className="group flex items-center gap-2"
          >
            <div
              className={cn(
                "relative rounded-full border-2 transition-all",
                sizeClasses[size],
                isSelected
                  ? "border-primary"
                  : "border-transparent hover:border-border-primary",
              )}
            >
              <div
                className="w-full h-full rounded-full"
                style={{ backgroundColor: color.hex }}
              />
              {isSelected && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <Check
                    size={size === "sm" ? 12 : 16}
                    className="text-white drop-shadow-lg"
                  />
                </div>
              )}
            </div>
            {showLabel && (
              <span
                className={cn(
                  "text-sm transition-colors",
                  isSelected
                    ? "text-foreground font-medium"
                    : "text-muted-foreground",
                )}
              >
                {color.name}
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
};
