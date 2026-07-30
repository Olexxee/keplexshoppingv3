import type { Product } from "../../../types/product.types";
import type { ProductHeroModel } from "../models";

import { adaptProductGallery, adaptProductInfo, adaptProductPurchase } from ".";

export function adaptProductHero(product: Product): ProductHeroModel {
  return {
    gallery: adaptProductGallery(product),

    info: adaptProductInfo(product),

    purchase: adaptProductPurchase(product),
  };
}
