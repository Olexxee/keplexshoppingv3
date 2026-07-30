import type { AvailabilityModel } from "../../../models/commerce";

export interface PurchaseVariantModel {
  id: string;

  label: string;

  available: boolean;
}

export interface ProductPurchaseModel {
  variantId: string;

  variants: PurchaseVariantModel[];

  stock: number;

  availability: AvailabilityModel;

  canPurchase: boolean;

  hasVariants: boolean;
}
