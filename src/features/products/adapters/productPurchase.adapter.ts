import type { Product } from "../../../types/product.types";
import type { ProductPurchaseModel } from "../models";

import {
  getDefaultVariant,
  hasVariants,
} from "../utils";

export function adaptProductPurchase(product: Product): ProductPurchaseModel {
  const variant = getDefaultVariant(product);

  const stock = variant?.stock ?? 0;

  return {
    variantId: variant?.id ?? "",

    quantity: 1,

    minQuantity: 1,

    maxQuantity: stock,

    stock,

    hasVariants: hasVariants(product),

    canPurchase: stock > 0,
  };
}
