import { ProductInfo } from "../ProductInfo";
import { PurchasePanel } from "../PurchasePanel";

import { Root } from "./ProductSummary.styles";

import type { ProductSummaryProps } from "./ProductSummary.types";

export function ProductSummary({
  info,
  purchase,
  className,
}: ProductSummaryProps) {
  return (
    <Root className={className}>
      <ProductInfo info={info} />
      <PurchasePanel purchase={purchase} />
    </Root>
  );
}
