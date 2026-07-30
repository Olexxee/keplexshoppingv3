import type { Category } from "../../../types/catalog.types";
import type { Product } from "../../../types/product.types";

export interface CatalogAggregate {
  categories: Category[];

  products: Product[];

  totalProducts: number;

  page: number;

  limit: number;
}
