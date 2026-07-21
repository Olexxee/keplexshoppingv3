import type { ProductAggregate, ProductPresentationModel } from "../models";
import {
  adaptProductCard,
  adaptProductGallery,
  adaptProductInfo,
  adaptProductPurchase,
  adaptProductReviews,
  adaptRelatedProducts,
} from ".";

export function adaptProduct(
  aggregate: ProductAggregate,
): ProductPresentationModel {
  const { product, reviews, relatedProducts } = aggregate;

  return {
    info: adaptProductInfo(product),

    gallery: adaptProductGallery(product),

    purchase: adaptProductPurchase(product),

    reviews: adaptProductReviews(reviews),

    relatedProducts: adaptRelatedProducts(relatedProducts),

    card: adaptProductCard(product),
  };
}
