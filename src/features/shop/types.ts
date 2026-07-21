import type { CatalogItem } from "../..//types/catalog.types";

export interface ShopFeatureState {
  loading: boolean;
  error: boolean;

  products: CatalogItem[];

  total: number;
  page: number;
  pages: number;
}