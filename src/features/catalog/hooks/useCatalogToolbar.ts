import type { CatalogFilterModel } from "../models";

export function useCatalogToolbar(
  filters: CatalogFilterModel,

  updateFilters: (values: Partial<CatalogFilterModel>) => void,
) {
  return {
    onSearch(search: string) {
      updateFilters({
        search,

        page: 1,
      });
    },

    onCategory(categoryId?: string) {
      updateFilters({
        categoryId,

        page: 1,
      });
    },

    onSort(
      sortBy: string,

      sortOrder: "asc" | "desc",
    ) {
      updateFilters({
        sortBy,

        sortOrder,
      });
    },
  };
}
