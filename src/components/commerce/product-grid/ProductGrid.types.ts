import type { ProductCardModel } from "../../../features/products/presentation/ProductCard.model";

export interface ProductGridProps {
  products: ProductCardModel[];

  emptyMessage?: string;
}
