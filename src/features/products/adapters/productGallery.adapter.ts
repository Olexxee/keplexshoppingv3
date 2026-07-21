import type { Product } from "../../../types/product.types";

import type { ProductGalleryModel } from "../models";

import { getDefaultVariant, getPrimaryImage, mapGalleryImages } from "../utils";

export function adaptProductGallery(product: Product): ProductGalleryModel {
  const variant = getDefaultVariant(product);

  const primaryImage = getPrimaryImage(variant?.images ?? []);

  // mapGalleryImages accepts only the images array; mark primary afterwards
  const rawImages = mapGalleryImages(variant?.images ?? []);

  const images = rawImages.map((img) => ({
    ...img,
    isPrimary: img.id === primaryImage?.id,
  }));

  return {
    images,
    selectedImageId: primaryImage?.id,
  };
}
