import type { Product } from "../../../types/product.types";
import type { ProductHeroModel } from "../models";
import { adaptProductGallery } from "./productGallery.adapter";
import { adaptProductInfo } from "./productInfo.adapter";
import { adaptProductPurchase } from "./productPurchase.adapter";




export function adaptProductHero(product: Product): ProductHeroModel {
  return {
    gallery: adaptProductGallery(product),

    info: adaptProductInfo(product),

    purchase: adaptProductPurchase(product),
  };
}
