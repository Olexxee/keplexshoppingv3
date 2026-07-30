import type { ProductGalleryModel } from "../presentation/ProductGallery.model";
import type { ProductInfoModel } from "../presentation";
import type { ProductPurchaseModel } from "../presentation";

export interface ProductHeroModel {
  gallery: ProductGalleryModel;
  info: ProductInfoModel;
  purchase: ProductPurchaseModel;
}
