import type { Product } from "../../../../types/product.types";

export interface ProductCardImageProps {
  product: Product;
  isWishlisted?: boolean;
  onWishlist?: (product: Product) => void;

  onQuickView?: (product: Product) => void;
}
