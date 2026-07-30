import type { Product } from "../../../types/product.types";
import type { ProductGalleryModel } from "../presentation";
import { getDefaultVariant } from "../domain/variants";
import { createGalleryModels, getPrimaryImage } from "../domain";



export function adaptProductGallery(product: Product): ProductGalleryModel {
  const variant = getDefaultVariant(product);

  const primary = getPrimaryImage(variant?.images ?? []);

  const images = createGalleryModels(variant?.images ?? []).map((image) => ({
    ...image,
    alt: image.alt ?? "",
  }));

  return {
    images,
    selectedImageId: primary?.id,
  };
}
