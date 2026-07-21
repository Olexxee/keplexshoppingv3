import { Badge } from "../../data-display/Badge";

interface LowStockBadgeProps {
  remaining?: number;
}

export function LowStockBadge({ remaining }: LowStockBadgeProps) {
  return (
    <Badge variant="warning" size="sm">
      {remaining ? `Only ${remaining} left` : "Low Stock"}
    </Badge>
  );
}
