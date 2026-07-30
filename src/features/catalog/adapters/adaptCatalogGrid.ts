import type { CatalogAggregate } from "../aggregates/CatalogAggregate";
import type { CatalogGridModel } from "../models";
import { adaptProductCard } from "../../../components/commerce/product-card/types";

export function adaptCatalogGrid(
  aggregate: CatalogAggregate,
): CatalogGridModel {
  return {
    products: aggregate.products.map(adaptProductCard),
  };
}
