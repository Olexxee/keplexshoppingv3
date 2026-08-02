import { useStorefrontStore } from "../storefront.store";

export const usePagination = () =>
  useStorefrontStore((state) => state.pagination);

export const usePage = () =>
  useStorefrontStore((state) => state.pagination.page);

export const useLimit = () =>
  useStorefrontStore((state) => state.pagination.limit);
