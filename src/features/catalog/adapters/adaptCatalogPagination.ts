import type { CatalogAggregate } from "../aggregates/CatalogAggregate";
import type { CatalogPaginationModel } from "../models";


export function adaptCatalogPagination(
  aggregate: CatalogAggregate,
): CatalogPaginationModel {
  return aggregate.pagination;
}
