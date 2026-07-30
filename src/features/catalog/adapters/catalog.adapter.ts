import type { CatalogAggregate, CatalogPresentationModel } from "../models";
import type { GetProductsParams } from "../../../api/product/products.api";
import { adaptCatalogHero } from "./hero.adapter";
import { adaptCatalogToolbar } from "./toolbar.adapter";
import { adaptCategoryGrid } from "./categoryGrid.adapter";
import { adaptProductGrid } from "./productGrid.adapter";
import { adaptPagination } from "./pagination.adapter";


export function adaptCatalog(
  aggregate: CatalogAggregate,
  filters: GetProductsParams,
): CatalogPresentationModel {
  return {
    hero: adaptCatalogHero(filters),
    toolbar: adaptCatalogToolbar(aggregate, filters),
    categories: adaptCategoryGrid(aggregate.categories) as unknown as CatalogPresentationModel["categories"],
    product: adaptProductGrid(aggregate) as unknown as CatalogPresentationModel["product"],
    grid: adaptProductGrid(aggregate) as unknown as CatalogPresentationModel["grid"],
    pagination: adaptPagination(aggregate),
  };
}
