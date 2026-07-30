import type { Product } from "../../../types/product.types";
import type { ProductPurchaseModel } from "../presentation";
import { getDefaultVariant, hasVariants } from "../domain";
import { createAvailabilityModel } from "../presentation";


export function adaptProductPurchase(product: Product): ProductPurchaseModel {
  const variant = getDefaultVariant(product);
  const availability = createAvailabilityModel(variant?.stock ?? 0);

  return {
    variantId: variant?.id ?? "",
    variants:
      product.variants?.map((variant) => ({
        id: variant.id,
        label: variant.color ?? variant.size ?? variant.sku,
        value: variant.color ?? variant.size,

        available: variant.stock > 0,
      })) ?? [],
    stock: availability.stock,
    availability,
    hasVariants: hasVariants(product),
    canPurchase: availability.canPurchase,
  };
}
