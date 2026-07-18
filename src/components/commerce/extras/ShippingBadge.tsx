import { cn } from "../../../lib/cn";
import { Badge } from "../../data-display/Badge";
import { Truck, Plane } from "lucide-react";

interface ShippingBadgeProps {
  type: "local" | "imported";
  estimatedDays?: number;
  className?: string;
  showIcon?: boolean;
  size?: "sm" | "md" | "lg";
}

export const ShippingBadge = ({
  type,
  estimatedDays,
  className,
  showIcon = true,
  size = "md",
}: ShippingBadgeProps) => {
  const config = {
    local: {
      label: "Local Shipping",
      variant: "success" as const,
      icon: Truck,
    },
    imported: {
      label: "Imported",
      variant: "warning" as const,
      icon: Plane,
    },
  };

  const { label, variant, icon: Icon } = config[type];

  return (
    <Badge variant={variant} size={size} className={cn("gap-1.5", className)}>
      {showIcon && <Icon size={size === "sm" ? 12 : 14} />}
      {label}
      {estimatedDays && (
        <span className="text-xs opacity-75">{estimatedDays} days</span>
      )}
    </Badge>
  );
};
