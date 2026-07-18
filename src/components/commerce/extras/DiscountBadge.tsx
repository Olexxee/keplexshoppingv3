import { cn } from "../../../lib/cn";
import { Badge } from "../../data-display/Badge";
import { Tag } from "lucide-react";

interface DiscountBadgeProps {
  discount: number;
  className?: string;
  variant?: "default" | "success" | "warning" | "danger" | "info";
  showIcon?: boolean;
  size?: "sm" | "md" | "lg";
  label?: string;
}

export const DiscountBadge = ({
  discount,
  className,
  variant = "danger",
  showIcon = true,
  size = "md",
  label = "OFF",
}: DiscountBadgeProps) => {
  return (
    <Badge variant={variant} size={size} className={cn("gap-1", className)}>
      {showIcon && <Tag size={size === "sm" ? 12 : 14} />}-{discount}% {label}
    </Badge>
  );
};
