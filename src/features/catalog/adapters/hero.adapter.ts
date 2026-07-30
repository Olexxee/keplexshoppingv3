import type { CatalogHeroModel } from "../models";
import type { GetProductsParams } from "../../../api/product/products.api";

export function adaptCatalogHero(
  filters?: GetProductsParams,
): CatalogHeroModel {
  if (filters?.search) {
    return {
      eyebrow: "Search Results",
      title: `Results for "${filters.search}"`,
      description: "Browse products matching your search.",
    };
  }

  return {
    eyebrow: "Shop",

    title: "Catalog",

    description: "Browse our complete collection of products.",
  };
}
