import { Root } from "./StockInfo.styles";
import type { StockInfoProps } from "./StockInfo.types";


export function StockInfo({ purchase }: StockInfoProps) {
  return <Root>{purchase.availability.label}</Root>;
}
