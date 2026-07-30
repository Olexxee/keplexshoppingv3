import { Root, Indicator, Label } from "./StockInfo.styles";
import type { StockInfoProps } from "./StockInfo.types";

export function StockInfo({ availability }: StockInfoProps) {
  const statusMap: Record<string, "in-stock" | "low-stock" | "out-of-stock"> = {
    inStock: "in-stock",
    lowStock: "low-stock",
    outOfStock: "out-of-stock",
  };

  return (
    <Root>
      <Indicator $status={statusMap[availability.status]} />

      <Label>{availability.label}</Label>
    </Root>
  );
}
