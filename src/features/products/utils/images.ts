import type { ProductImage } from "../../../types/product.types";
import type { ImageModel } from "../../../models/commerce";

export function getPrimaryImage(
  images: ProductImage[] = [],
): ProductImage | undefined {
  return images.find((image) => image.isPrimary) ?? images[0];
}

export function mapGalleryImages(images: ProductImage[] = []): ImageModel[] {
  return images.map((image) => ({
    id: image.id,
    url: image.url,
    alt: image.alt,
  }));
}
