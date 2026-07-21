export interface ProductPurchaseModel {
  [x: string]: any;
  variantId: string;

  stock: number;

  quantity: number;

  minQuantity: number;

  maxQuantity: number;

  canPurchase: boolean;

  hasVariants: boolean;
}
