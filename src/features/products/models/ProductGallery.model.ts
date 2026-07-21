export interface ProductGalleryImageModel {
  id: string;

  url: string;

  alt?: string;

  isPrimary: boolean;
}

export interface ProductGalleryModel {
  images: ProductGalleryImageModel[];

  selectedImageId?: string;
}
