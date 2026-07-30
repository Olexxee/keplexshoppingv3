import type{ ProductGalleryModel } from './ProductGallery.model';
import type{ ProductInfoModel } from './ProductInfo.model';
import type{ ProductPurchaseModel } from './ProductPurchase.model';

export interface ProductHeroModel {
  gallery: ProductGalleryModel;
  info: ProductInfoModel;
  purchase: ProductPurchaseModel;
}
