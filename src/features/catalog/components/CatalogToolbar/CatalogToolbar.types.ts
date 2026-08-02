import type { CatalogViewMode, StorefrontFilters } from "../../../storefront/storefront.types";
import type { StorefrontSort } from "../../CatalogToolbar/CatalogToolbarProps";
import type { CatalogToolbarModel } from "../../models";

export interface CatalogToolbarProps {
  model: CatalogToolbarModel;

  onSearch(value: string): void;

  onSort(sort: StorefrontSort): void;

  onViewChange(view: CatalogViewMode): void;

  onOpenFilters(): void;

  onClearFilters(): void;

  onRemoveFilter(key: keyof StorefrontFilters): void;
}