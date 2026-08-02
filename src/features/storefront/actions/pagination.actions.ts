import type { StoreApi } from "zustand";

import type { StorefrontStore } from "../storefront.types";
import { INITIAL_PAGINATION } from "../storefront.constants";

type Store = StoreApi<StorefrontStore>;

export function createPaginationActions(
  set: Store["setState"],
  get: Store["getState"],
) {
  return {
    setPage(page: number) {
      set((state: StorefrontStore) => ({
        pagination: {
          ...state.pagination,
          page,
        },
      }));
    },

    setLimit(limit: number) {
      set(() => ({
        pagination: {
          page: 1,
          limit,
        },
      }));
    },

    nextPage() {
      const { pagination } = get();

      set((state: StorefrontStore) => ({
        pagination: {
          ...state.pagination,
          page: pagination.page + 1,
        },
      }));
    },

    previousPage() {
      const { pagination } = get();

      if (pagination.page <= 1) {
        return;
      }

      set((state: StorefrontStore) => ({
        pagination: {
          ...state.pagination,
          page: pagination.page - 1,
        },
      }));
    },

    reset() {
      set({
        pagination: INITIAL_PAGINATION,
      });
    },
  };
}
