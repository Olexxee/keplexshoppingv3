import type { CatalogAggregate } from "../aggregates/CatalogAggregate";

import type { CatalogFiltersModel } from "../models";

export function adaptCatalogFilters(
  aggregate: CatalogAggregate,
): CatalogFiltersModel {
  return {
    categories: aggregate.categories,
  };
}
