export interface CatalogToolbarModel {
  [key: string]: unknown;
}

export type StorefrontSort = string;

export interface CatalogToolbarProps {
  model: CatalogToolbarModel;

  onSearch(value: string): void;

  onSort(sort: StorefrontSort): void;

  onViewChange(view: "grid" | "list"): void;

  onOpenFilters(): void;

  onClearFilters(): void;
}
