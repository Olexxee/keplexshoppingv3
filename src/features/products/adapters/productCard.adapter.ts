import type { Product } from "../../../types/product.types";
import type { ProductCardModel } from "../models";
import {
  createAvailabilityModel,
  createPriceModel,
  getDefaultVariant,
  getPrimaryImage,
} from "../utils";



export function adaptProductCard(product: Product): ProductCardModel {
  const variant = getDefaultVariant(product);

  const image = getPrimaryImage(variant?.images ?? []);

  const stock = variant?.stock ?? 0;

  return {
    id: product.id,

    slug: product.slug,

    brand: product.brand?.name,

    title: product.name,

    image: image
      ? {
          id: image.id,
          url: image.url,
          alt: image.alt,
        }
      : undefined,

    price: createPriceModel(variant),

    rating: {
      value: product.avgRating ?? 0,
      reviewCount: product.totalReviews ?? 0,
    },

    availability: createAvailabilityModel(stock),

    isNew: product.isNew,

    isBestSeller: product.isBestSeller,
  };
}
