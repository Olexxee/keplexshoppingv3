import type { CatalogItem } from "@/types/catalog";

export interface CatalogCardProps {
  item: CatalogItem;

  variant?: "default" | "horizontal";

  className?: string;

  showCategory?: boolean;

  showRating?: boolean;

  showActions?: boolean;

  onClick?: (item: CatalogItem) => void;

  onWishlist?: (item: CatalogItem) => void;

  onQuickView?: (item: CatalogItem) => void;

  onAddToCart?: (item: CatalogItem) => void;

  onBookService?: (item: CatalogItem) => void;
}
