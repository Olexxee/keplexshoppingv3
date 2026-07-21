import type { Category } from "../../../types/catalog.types";
import type { Product } from "../../../types/product.types";


export interface CatalogAggregate {
  products: Product[];
  categories: Category[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}
