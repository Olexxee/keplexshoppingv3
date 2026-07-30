import type { ProductPurchaseModel } from "../../models";

export interface PurchasePanelProps {
  purchase: ProductPurchaseModel;

  quantity: number;

  selectedVariantId?: string;

  onVariantChange?(id: string): void;

  onQuantityChange?(quantity: number): void;

  onAddToCart?(): void;

  onBuyNow?(): void;

  className?: string;
}
