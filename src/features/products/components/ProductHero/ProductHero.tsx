import { ProductGallery } from "../ProductGallery";
import { ProductSummary } from "../ProductSummary/ProductSummary";
import { Root } from "./ProductHero.styles";
import type { ProductHeroProps } from "./ProductHero.types";

export function ProductHero({
  gallery,
  info,
  purchase,
  className,
}: ProductHeroProps) {
  return (
    <Root className={className}>
      <ProductGallery gallery={gallery} />
      <ProductSummary info={info} purchase={purchase} />
    </Root>
  );
}
