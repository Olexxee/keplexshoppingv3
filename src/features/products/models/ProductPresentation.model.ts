import type { ProductCardModel } from "./ProductCard.model";
import type { ProductGalleryModel } from "./ProductGallery.model";
import type { ProductInfoModel } from "./ProductInfo.model";
import type { ProductPurchaseModel } from "./ProductPurchase.model";
import type { ProductReviewModel } from "./ProductReview.model";
import type { RelatedProductsModel } from "./RelatedProducts.model";

export interface ProductPresentationModel {
  info: ProductInfoModel;

  gallery: ProductGalleryModel;

  purchase: ProductPurchaseModel;

  reviews: ProductReviewModel[];

  relatedProducts: RelatedProductsModel;

  card: ProductCardModel;
}
