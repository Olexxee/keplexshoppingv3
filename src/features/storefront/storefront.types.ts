export type CatalogViewMode = "grid" | "list";

export type StorefrontSort =
  | "featured"
  | "newest"
  | "price-asc"
  | "price-desc"
  | "rating"
  | "popular";

export interface StorefrontFilters {
  search: string;

  category?: string;

  brand?: string;

  collection?: string;

  minPrice?: number;

  maxPrice?: number;

  sort: StorefrontSort;
}

export interface StorefrontPagination {
  page: number;

  limit: number;
}

export interface StorefrontUI {
  view: CatalogViewMode;

  filterDrawerOpen: boolean;
}

export interface FilterActions {
  update(filters: Partial<StorefrontFilters>): void;

  setSearch(search: string): void;

  setCategory(category?: string): void;

  setBrand(brand?: string): void;

  setCollection(collection?: string): void;

  setPriceRange(minPrice?: number, maxPrice?: number): void;

  setSort(sort: StorefrontSort): void;

  remove<K extends keyof StorefrontFilters>(key: K): void;

  clear(): void;
}

export interface PaginationActions {
  setPage(page: number): void;

  setLimit(limit: number): void;

  nextPage(): void;

  previousPage(): void;

  reset(): void;
}

export interface UIActions {
  setView(view: CatalogViewMode): void;

  setFilterDrawer(open: boolean): void;

  openFilters(): void;

  closeFilters(): void;

  toggleFilters(): void;

  reset(): void;
}

export interface StorefrontActions {
  filters: FilterActions;

  pagination: PaginationActions;

  ui: UIActions;
}

export interface StorefrontData {
  filters: StorefrontFilters;

  pagination: StorefrontPagination;

  ui: StorefrontUI;
}

export interface StorefrontStore extends StorefrontData {
  actions: StorefrontActions;
}
