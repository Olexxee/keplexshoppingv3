import { useState } from "react";
import {
  Root,
  Preview,
  PreviewImage,
  ThumbnailList,
  Thumbnail,
} from "./ProductGallery.styles";

import type { ProductGalleryProps } from "./ProductGallery.types";

export function ProductGallery({ gallery, className }: ProductGalleryProps) {
  const [selectedId, setSelectedId] = useState(gallery.selectedImageId);

  const selectedImage =
    gallery.images.find((image) => image.id === selectedId) ??
    gallery.images[0];

  return (
    <Root className={className}>
      <Preview>
        {selectedImage && (
          <PreviewImage src={selectedImage.url} alt={selectedImage.alt} />
        )}
      </Preview>

      <ThumbnailList>
        {gallery.images.map((image) => (
          <Thumbnail
            key={image.id}
            $active={image.id === selectedImage?.id}
            onClick={() => setSelectedId(image.id)}
          >
            <img src={image.url} alt={image.alt} />
          </Thumbnail>
        ))}
      </ThumbnailList>
    </Root>
  );
}
