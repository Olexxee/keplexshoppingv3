import type {
  ProductGalleryModel,
  ProductInfoModel,
  ProductPurchaseModel,
} from "../../models";



export interface ProductHeroProps {
  gallery: ProductGalleryModel;
  info: ProductInfoModel;
  purchase: ProductPurchaseModel;
  className?: string;
}
