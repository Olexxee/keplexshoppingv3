import type { Product } from "../../../types/product.types";

export interface ProductCardContentProps {
  product: Product;
  onAddToCart?: (product: Product) => void;
}
