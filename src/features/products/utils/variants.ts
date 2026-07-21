import type { Product, ProductVariant } from "../../../types/product.types";

/**
 * Returns the default variant for a product.
 * Currently defaults to the first variant.
 */
export function getDefaultVariant(
  product: Product,
): ProductVariant | undefined {
  return product.variants?.[0];
}

/**
 * Finds a variant by its id.
 */
export function getVariantById(
  product: Product,
  variantId: string,
): ProductVariant | undefined {
  return product.variants.find((variant) => variant.id === variantId);
}

/**
 * Returns true if the product has more than one variant.
 */
export function hasVariants(product: Product): boolean {
  return product.variants.length > 1;
}
