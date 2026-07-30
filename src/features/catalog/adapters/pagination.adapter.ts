import type { CatalogAggregate, PaginationModel } from "../models";

export function adaptPagination(aggregate: CatalogAggregate): PaginationModel {
  return {
    page: aggregate.page,

    limit: aggregate.limit,

    totalItems: aggregate.total,

    totalPages: aggregate.totalPages,

    hasPrevious: aggregate.page > 1,

    hasNext: aggregate.page < aggregate.totalPages,
  };
}
