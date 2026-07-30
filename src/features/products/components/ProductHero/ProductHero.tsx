import { ProductGallery } from "../ProductGallery";
import { ProductSummary } from "../ProductSummary";

import { Root } from "./ProductHero.styles";

import type { ProductHeroProps } from "./ProductHero.types";

export function ProductHero({
  hero,
  quantity,
  selectedVariantId,
  onVariantChange,
  onQuantityChange,
  onAddToCart,
  onBuyNow,
}: ProductHeroProps) {
  return (
    <Root>
      <ProductGallery gallery={hero.gallery} />

      <ProductSummary
        info={hero.info}
        purchase={hero.purchase}
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
