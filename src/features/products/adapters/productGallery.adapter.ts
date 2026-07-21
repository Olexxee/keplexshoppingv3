import type { Product } from "../../../types/product.types";

import type { ProductGalleryModel } from "../models";

import { getDefaultVariant, getPrimaryImage, mapGalleryImages } from "../utils";

export function adaptProductGallery(product: Product): ProductGalleryModel {
  const variant = getDefaultVariant(product);

  const images = mapGalleryImages(variant?.images ?? []);

  const primaryImage = getPrimaryImage(variant?.images ?? []);

  return {
    images,
    selectedImageId: primaryImage?.id,
  };
}
