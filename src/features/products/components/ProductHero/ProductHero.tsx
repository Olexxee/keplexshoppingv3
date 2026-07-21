import { ProductGallery } from "../ProductGallery";
import { ProductSummary } from "./ProductSummary";

import { Root } from "./ProductHero.styles";

import type { ProductHeroProps } from "./ProductHero.types";

export function ProductHero({
  product,
  quantity,
  selectedVariantId,
  onVariantChange,
  onQuantityChange,
  onAddToCart,
  onBuyNow,
}: ProductHeroProps) {
  return (
    <Root>
      <ProductGallery images={product.variants[0]?.images ?? []} />

      <ProductSummary
        product={product}
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
