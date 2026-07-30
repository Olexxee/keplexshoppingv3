import type { GetProductsParams } from "../../../api/product/products.api";

import type { CatalogAggregate, CatalogToolbarModel } from "../models";

export function adaptCatalogToolbar(
  aggregate: CatalogAggregate,
  filters: GetProductsParams,
): CatalogToolbarModel {
  return {
    totalProducts: aggregate.total,

    search: filters.search ?? "",

    selectedCategory: filters.categoryId,

    sortBy: filters.sortBy ?? "createdAt",

    sortOrder: filters.sortOrder ?? "desc",
  };
}
