import type { CatalogAggregate } from "../aggregates/CatalogAggregate";
import type { CatalogPresentationModel } from "../models";
import { adaptCatalogGrid } from "./adaptCatalogGrid";
import { adaptCatalogToolbar } from "./adaptCatalogToolbar";
import { adaptCatalogFilters } from "./adaptCatalogFilters";
import { adaptCatalogPagination } from "./adaptCatalogPagination";

export function adaptCatalog(
  aggregate: CatalogAggregate,
): CatalogPresentationModel {
  return {
    toolbar: adaptCatalogToolbar(aggregate),

    grid: adaptCatalogGrid(aggregate),

    filters: adaptCatalogFilters(aggregate),

    pagination: adaptCatalogPagination(aggregate),
  };
}
