import {
  getProducts,
  getCategories,
} from "../../../api/product/products.api";
import type { GetProductsParams } from "../../../api/product/products.api";
import type { CatalogAggregate } from "../aggregates/CatalogAggregate";


export async function getCatalog(
  filters: GetProductsParams = {},
): Promise<CatalogAggregate> {
  const [productsResult, categoriesResult] = await Promise.all([
    getProducts(filters),
    getCategories(),
  ]);

  return {
    products: productsResult.items,

    categories: categoriesResult,

    totalProducts: productsResult.total,

    page: productsResult.page,

    limit: productsResult.limit,

    totalPages: productsResult.totalPages,
  };
}