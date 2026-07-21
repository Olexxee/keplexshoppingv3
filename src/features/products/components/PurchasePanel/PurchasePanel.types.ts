import type { Product } from "../../../../types/product.types";

export interface PurchasePanelProps {
  product: Product;

  quantity: number;

  selectedVariantId?: string;

  onVariantChange?: (variantId: string) => void;

  onQuantityChange?: (quantity: number) => void;

  onAddToCart?: () => void;

  onBuyNow?: () => void;

  className?: string;
}
