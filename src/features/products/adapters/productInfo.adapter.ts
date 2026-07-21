import type { Product } from "../../../types/product.types";
import type { ProductInfoModel } from "../models";
import {
  createAvailabilityModel,
  createPriceModel,
  getDefaultVariant,
} from "../utils";



export function adaptProductInfo(product: Product): ProductInfoModel {
  const variant = getDefaultVariant(product);

  return {
    brand: product.brand?.name,

    title: product.name,

    shortDescription: product.shortDescription,

    sku: variant?.sku,

    price: createPriceModel(variant),

    rating: {
      value: product.avgRating ?? 0,
      reviewCount: product.totalReviews ?? 0,
    },

    availability: createAvailabilityModel(variant?.stock ?? 0),
  };
}
