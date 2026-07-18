import type { CatalogItem } from "../../types/catalog.types";
import type { Collection } from "../../types/collection.types";

export interface HomeData {
  featuredProducts: CatalogItem[];
  collections: Collection[];
}