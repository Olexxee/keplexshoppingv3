import type { ProductPresentationModel } from "../models/";
import type { AdaptProductParams } from "../ProductFeature.types";
import {
  adaptProductCard,
  adaptProductGallery,
  adaptProductInfo,
  adaptProductPurchase,
  adaptProductReviews,
  adaptRelatedProducts,
} from ".";


export function adaptProduct({
  product,
  reviews,
  relatedProducts,
}: AdaptProductParams): ProductPresentationModel {
  return {
    info: adaptProductInfo(product),

    gallery: adaptProductGallery(product),

    purchase: adaptProductPurchase(product),

    reviews: adaptProductReviews(reviews),

    relatedProducts: adaptRelatedProducts(relatedProducts),

    card: adaptProductCard(product),
  };
}
