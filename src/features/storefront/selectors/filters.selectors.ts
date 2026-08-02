import { useStorefrontStore } from "../storefront.store";

export const useFilters = () => useStorefrontStore((state) => state.filters);

export const useSearch = () =>
  useStorefrontStore((state) => state.filters.search);

export const useCategory = () =>
  useStorefrontStore((state) => state.filters.category);

export const useBrand = () =>
  useStorefrontStore((state) => state.filters.brand);

export const useCollection = () =>
  useStorefrontStore((state) => state.filters.collection);

export const useSort = () => useStorefrontStore((state) => state.filters.sort);
