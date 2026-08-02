import type { StorefrontSort } from "../../storefront";

export type CatalogViewMode = "grid" | "list";

export interface ActiveFilterModel {
  id: string;

  label: string;
}

export interface CatalogToolbarModel {
  search: string;

  sort: StorefrontSort;

  view: CatalogViewMode;

  resultCount: number;

  activeFilters: number;

  filters: ActiveFilterModel[];
}

export interface CatalogToolbarProps {
  model: CatalogToolbarModel;

  onSearch(value: string): void;

  onSort(sort: StorefrontSort): void;

  onViewChange(view: CatalogViewMode): void;

  onOpenFilters(): void;

  onClearFilters(): void;

  onRemoveFilter(id: string): void;
}
