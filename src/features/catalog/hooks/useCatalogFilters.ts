import { useState } from "react";
import type { CatalogFilterModel } from "../models";
import { DEFAULT_LIMIT, DEFAULT_PAGE } from "../catalog.constants";

export function useCatalogFilters() {
  const [filters, setFilters] = useState<CatalogFilterModel>({
    page: DEFAULT_PAGE,

    limit: DEFAULT_LIMIT,

    sortBy: "createdAt",

    sortOrder: "desc",
  });

  function updateFilters(values: Partial<CatalogFilterModel>) {
    setFilters((previous) => ({
      ...previous,

      ...values,
    }));
  }

  function resetFilters() {
    setFilters({
      page: DEFAULT_PAGE,

      limit: DEFAULT_LIMIT,

      sortBy: "createdAt",

      sortOrder: "desc",
    });
  }

  return {
    filters,

    updateFilters,

    resetFilters,
  };
}
