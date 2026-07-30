import type { ProductHeroModel } from "../../models";

export interface ProductHeroProps {
  hero: ProductHeroModel;

  quantity: number;

  selectedVariantId?: string;

  onVariantChange?(variantId: string): void;

  onQuantityChange?(quantity: number): void;

  onAddToCart?(): void;

  onBuyNow?(): void;
}
