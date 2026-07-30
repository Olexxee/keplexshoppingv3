import type { ImageModel } from "../../../models/commerce";

export interface ProductGalleryImageModel {
  id: string;
  url: string;
  alt?: string;
  isPrimary: boolean;
}

export interface ProductGalleryModel {
  images: ImageModel[];
  selectedImageId?: string;
}
