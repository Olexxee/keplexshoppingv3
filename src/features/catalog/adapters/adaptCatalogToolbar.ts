import type { CatalogAggregate } from "../aggregates/CatalogAggregate";

import type { CatalogToolbarModel } from "../models";

export function adaptCatalogToolbar(
  aggregate: CatalogAggregate,
): CatalogToolbarModel {
  return {
    totalResults: aggregate.pagination.total,
  };
}
