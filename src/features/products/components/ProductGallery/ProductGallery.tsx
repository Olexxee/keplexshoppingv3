import { useState } from "react";
import {
  Root,
  MainImage,
  ThumbnailList,
  Thumbnail,
} from "./ProductGallery.styles";
import type { ProductGalleryProps } from "./ProductGallery.types";

export function ProductGallery({ gallery, className }: ProductGalleryProps) {
  const [selectedId, setSelectedId] = useState(
    gallery.selectedImageId ?? gallery.images[0]?.id,
  );

  const selected =
    gallery.images.find((image) => image.id === selectedId) ??
    gallery.images[0];

  return (
    <Root className={className}>
      <MainImage>
        {selected && <img src={selected.url} alt={selected.alt} />}
      </MainImage>

      {gallery.images.length > 1 && (
        <ThumbnailList>
          {gallery.images.map((image) => (
            <Thumbnail
              key={image.id}
              $active={image.id === selected?.id}
              onClick={() => setSelectedId(image.id)}
            >
              <img src={image.url} alt={image.alt} />
            </Thumbnail>
          ))}
        </ThumbnailList>
      )}
    </Root>
  );
}
