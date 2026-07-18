import { Heart } from "lucide-react";
import { Badge } from "../../data-display/Badge";
import { Button } from "../../button/Button";
import { Image } from "../../image/Image";
import type { CatalogItem } from "../../../types/catalog.types";

interface CatalogCardImageProps {
  item: CatalogItem;
  image: string;
  onWishlist?: (item: CatalogItem) => void;
}

export function CatalogCardImage({
  item,
  image,
  onWishlist,
}: CatalogCardImageProps) {
  return (
    <div className="relative overflow-hidden">
      <Image
        src={image}
        alt={item.name}
        aspectRatio="square"
        fit="cover"
        rounded="none"
        className="transition-transform duration-300 group-hover:scale-105"
      />

      <div className="absolute left-3 top-3">
        <Badge variant={item.itemType === "PRODUCT" ? "info" : "success"}>
          {item.itemType}
        </Badge>
      </div>

      <Button
        variant="secondary"
        size="icon"
        rounded="full"
        className="absolute right-3 top-3 shadow-md"
        onClick={(e) => {
          e.stopPropagation();
          onWishlist?.(item);
        }}
      >
        <Heart size={16} />
      </Button>
    </div>
  );
}
