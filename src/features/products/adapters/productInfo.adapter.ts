import type { Product } from "../../../types/product.types";
import type { ProductInfoModel } from "../presentation";
import { getDefaultVariant } from "../domain";
import {
  createPriceModel,
  createRatingModel,
} from "../domain";
import { createAvailabilityModel } from "../presentation";



export function adaptProductInfo(product: Product): ProductInfoModel {
  const variant = getDefaultVariant(product);
  const priceModel = createPriceModel(variant);
  const ratingModel = createRatingModel(product);
  const availabilityModel = createAvailabilityModel(variant?.stock ?? 0);

  return {
    brand: product.brand?.name,

    title: product.name,

    shortDescription: product.description,

    sku: variant?.sku,

    price: priceModel as any,

    rating: ratingModel as any,

    availability: availabilityModel as any,
  };
}
