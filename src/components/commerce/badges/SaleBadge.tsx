import { Badge } from "../../data-display/Badge";

interface SaleBadgeProps {
  percentage?: number;
}

export function SaleBadge({ percentage }: SaleBadgeProps) {
  return (
    <Badge variant="danger" size="sm">
      {percentage ? `-${percentage}%` : "Sale"}
    </Badge>
  );
}
