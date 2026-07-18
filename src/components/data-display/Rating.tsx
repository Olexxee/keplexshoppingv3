import { cn } from "../../lib/cn";
import { Star, StarHalf } from "lucide-react";

interface RatingProps {
  value: number;
  max?: number;
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
  color?: string;
  emptyColor?: string;
  showValue?: boolean;
  readonly?: boolean;
  onChange?: (value: number) => void;
}

export const Rating = ({
  value,
  max = 5,
  className,
  size = "md",
  color = "text-yellow-400",
  emptyColor = "text-muted",
  showValue = true,
  readonly = true,
  onChange,
}: RatingProps) => {
  const sizeClasses = {
    sm: "w-3 h-3",
    md: "w-4 h-4",
    lg: "w-5 h-5",
    xl: "w-6 h-6",
  };

  const starSizeClasses = {
    sm: 12,
    md: 16,
    lg: 20,
    xl: 24,
  };


  const handleClick = (rating: number) => {
    if (!readonly && onChange) {
      onChange(rating);
    }
  };

  return (
    <div
      className={cn("flex items-center gap-1.5", className)}
      role={readonly ? undefined : "radiogroup"}
    >
      <div className={cn("flex gap-0.5", !readonly && "cursor-pointer")}>
        {Array.from({ length: max }, (_, i) => {
          const rating = i + 1;
          const isFilled = rating <= Math.round(value);
          const isHalf = !isFilled && rating - 0.5 <= value;

          return (
            <button
              key={i}
              type="button"
              role="radio"
              aria-checked={isFilled}
              onClick={() => handleClick(rating)}
              className={cn(
                "focus:outline-none focus:ring-2 focus:ring-primary rounded-sm p-0.5",
                readonly && "cursor-default",
              )}
              disabled={readonly}
            >
              {isHalf ? (
                <StarHalf
                  className={cn(sizeClasses[size], color)}
                  fill="currentColor"
                  size={starSizeClasses[size]}
                />
              ) : (
                <Star
                  className={cn(
                    sizeClasses[size],
                    isFilled ? color : emptyColor,
                  )}
                  fill={isFilled ? "currentColor" : "none"}
                  size={starSizeClasses[size]}
                />
              )}
            </button>
          );
        })}
      </div>
      {showValue && (
        <span className="text-sm font-medium text-foreground ml-1">
          {value.toFixed(1)}
        </span>
      )}
    </div>
  );
};
