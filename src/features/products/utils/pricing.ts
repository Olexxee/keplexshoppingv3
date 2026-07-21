import type { ProductVariant } from "../../../types/product.types";
import type { PriceModel } from "../../../models/commerce";

export function createPriceModel(variant?: ProductVariant): PriceModel {
  return {
    current: variant?.price ?? 0,
    compareAt: variant?.compareAtPrice,
  };
}

export function calculateDiscountPercentage(
  current: number,
  compareAt?: number,
): number {
  if (!compareAt || compareAt <= current) {
    return 0;
  }

  return Math.round(((compareAt - current) / compareAt) * 100);
}

export function calculateSavings(current: number, compareAt?: number): number {
  if (!compareAt || compareAt <= current) {
    return 0;
  }

  return compareAt - current;
}
