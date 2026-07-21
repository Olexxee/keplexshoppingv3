import type { CatalogToolbarModel } from "./CatalogToolbarModel";
import type { CatalogGridModel } from "./CatalogGridModel";
import type { CatalogFiltersModel } from "./CatalogFiltersModel";
import type { CatalogPaginationModel } from "./CatalogPaginationModel";

export interface CatalogPresentationModel {
  toolbar: CatalogToolbarModel;

  grid: CatalogGridModel;

  filters: CatalogFiltersModel;

  pagination: CatalogPaginationModel;
}
