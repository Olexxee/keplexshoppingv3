import type { Product, ProductVariant } from "../../../types/product.types";

export function getDefaultVariant(
  product: Product,
): ProductVariant | undefined {
  return product.variants.find((v) => v.isDefault) ?? product.variants[0];
}

export function getVariantById(
  product: Product,
  variantId: string,
): ProductVariant | undefined {
  return product.variants.find((variant) => variant.id === variantId);
}

export function hasVariants(product: Product): boolean {
  return product.variants.length > 1;
}

export function getAvailableVariants(product: Product): ProductVariant[] {
  return product.variants.filter((variant) => variant.stock > 0);
}

