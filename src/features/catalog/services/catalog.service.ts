import { getProducts } from "../../../api/product/products.api";
import { getCategories } from "../../../api/category.api";
import type { CatalogAggregate } from "../models";
import type { GetProductsParams } from "@/api/product/products.api";

export async function getCatalog(
  query: GetProductsParams,
): Promise<CatalogAggregate> {
  const [productsResult, categories] = await Promise.all([
    getProducts(query),
    getCategories(),
  ]);

  return {
    products: productsResult.data,

    pagination: productsResult.meta,

    categories,
  };
}
