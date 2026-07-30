import type { ProductInfoModel, ProductPurchaseModel } from "../../models";

export interface ProductSummaryProps {
  info: ProductInfoModel;

  purchase: ProductPurchaseModel;

  quantity: number;

  selectedVariantId?: string;

  onVariantChange?(variantId: string): void;

  onQuantityChange?(quantity: number): void;

  onAddToCart?(): void;

  onBuyNow?(): void;

  className?: string;
}
