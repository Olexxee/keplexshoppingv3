import type { GetProductsParams } from "../../../api/product/products.api";
import type {
  CatalogAggregate,
  CatalogToolbarModel,
  SelectOptionModel,
} from "../models";

const DEFAULT_SORT_OPTIONS: SelectOptionModel[] = [
  { label: "Newest", value: "createdAt" },
  { label: "Price: Low to High", value: "price" },
  { label: "Price: High to Low", value: "-price" },
];

const DEFAULT_PAGE_SIZE_OPTIONS: SelectOptionModel[] = [
  { label: "12", value: "12" },
  { label: "24", value: "24" },
  { label: "48", value: "48" },
];

function buildCategoryOptions(
  categories: CatalogAggregate["categories"],
): SelectOptionModel[] {
  return categories.map((category) => ({
    label: category.name,
    value: category.id,
  }));
}

export function adaptCatalogToolbar(
  aggregate: CatalogAggregate,
  filters: GetProductsParams,
): CatalogToolbarModel {
  return {
    searchPlaceholder: "Search products",
    totalResults: aggregate.totalProducts,
    categoryOptions: buildCategoryOptions(aggregate.categories),
    sortOptions: DEFAULT_SORT_OPTIONS,
    pageSizeOptions: DEFAULT_PAGE_SIZE_OPTIONS,
  };
}
