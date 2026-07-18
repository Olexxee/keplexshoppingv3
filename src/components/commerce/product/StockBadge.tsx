import { cn } from "../../../lib/cn";
import { Badge } from "../../data-display/Badge";

interface StockBadgeProps {
  quantity: number;
  className?: string;
  showQuantity?: boolean;
  thresholds?: {
    low: number;
    medium: number;
  };
}

export const StockBadge = ({
  quantity,
  className,
  showQuantity = true,
  thresholds = { low: 5, medium: 20 },
}: StockBadgeProps) => {
  const getStatus = () => {
    if (quantity <= 0)
      return { label: "Out of Stock", variant: "danger" as const };
    if (quantity <= thresholds.low)
      return { label: "Low Stock", variant: "warning" as const };
    if (quantity <= thresholds.medium)
      return { label: "In Stock", variant: "info" as const };
    return { label: "In Stock", variant: "success" as const };
  };

  const status = getStatus();

  return (
    <Badge variant={status.variant} className={cn("gap-1.5", className)}>
      <span
        className={cn(
          "inline-block w-1.5 h-1.5 rounded-full",
          quantity > 0 ? "bg-current" : "bg-current/50",
        )}
      />
      {status.label}
      {showQuantity && quantity > 0 && (
        <span className="text-xs opacity-75">({quantity} left)</span>
      )}
    </Badge>
  );
};
