import { adaptProductCard } from "../../products/adapters";

import type { ProductGridModel, CatalogAggregate } from "../models";

export function adaptProductGrid(
  aggregate: CatalogAggregate,
): ProductGridModel {
  return {
    products: aggregate.products.map(adaptProductCard),
  };
}
