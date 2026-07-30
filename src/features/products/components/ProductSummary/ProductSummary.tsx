import { ProductInfo } from "../ProductInfo";
import { PurchasePanel } from "../PurchasePanel";
import { Root } from "./ProductSummary.styles";
import type { ProductSummaryProps } from "./ProductSummary.types";

export function ProductSummary({
  info,
  purchase,
  quantity,
  selectedVariantId,
  onVariantChange,
  onQuantityChange,
  onAddToCart,
  onBuyNow,
  className,
}: ProductSummaryProps) {
  return (
    <Root className={className}>
      <ProductInfo info={info} />

      <PurchasePanel
        purchase={purchase}
        quantity={quantity}
        selectedVariantId={selectedVariantId}
        onVariantChange={onVariantChange}
        onQuantityChange={onQuantityChange}
        onAddToCart={onAddToCart}
        onBuyNow={onBuyNow}
      />
    </Root>
  );
}
