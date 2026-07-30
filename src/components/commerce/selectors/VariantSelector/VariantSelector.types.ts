import type { ProductPurchaseModel } from "../../../../features/products/models";

export interface VariantSelectorProps {
  purchase: ProductPurchaseModel;

  selectedVariantId?: string;

  onChange?(variantId: string): void;
}
