import type { ProductImage } from "../../../types/product.types";
import type { ImageModel } from "../../../models/commerce";

export function getPrimaryImage(
  images: ProductImage[] = [],
): ProductImage | undefined {
  return images.find((image) => image.isPrimary) ?? images[0];
}

export function createImageModel(image?: ProductImage): ImageModel | undefined {
  if (!image) {
    return undefined;
  }

  return {
    id: image.id,
    url: image.url,
    alt: image.alt,
  };
}

export function createGalleryModels(images: ProductImage[] = []): ImageModel[] {
  return images.map(createImageModel).filter(Boolean) as ImageModel[];
}
