import type { Product } from "../../../types/product.types";
import type { Review } from "../../../types/review.types";

export interface ProductAggregate {
  product: Product;

  reviews: Review[];

  relatedProducts: Product[];
}
