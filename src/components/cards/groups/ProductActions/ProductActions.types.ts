export interface ProductActionsProps {
  quantity?: number;
  showQuantity?: boolean;
  showBuyNow?: boolean;
  addToCartDisabled?: boolean;
  buyNowDisabled?: boolean;
  onQuantityChange?: (value: number) => void;
  onAddToCart?: () => void;
  onBuyNow?: () => void;
  className?: string;
}
