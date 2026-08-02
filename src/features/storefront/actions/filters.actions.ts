import type { StoreApi } from "zustand";
import type {
  StorefrontStore,
  StorefrontFilters,
} from "../storefront.types";
import { INITIAL_FILTERS } from "../storefront.constants";



type Store = StoreApi<StorefrontStore>;

export function createFilterActions(
  set: Store["setState"],
  get: Store["getState"],
) {
  const update = (partial: Partial<StorefrontFilters>) => {
    set((state) => ({
      filters: {
        ...state.filters,
        ...partial,
      },

      pagination: {
        ...state.pagination,
        page: 1,
      },
    }));
  };

  return {
    update,

    setSearch(search: string) {
      update({
        search,
      });
    },

    setCategory(category?: string) {
      update({
        category,
      });
    },

    setBrand(brand?: string) {
      update({
        brand,
      });
    },

    setCollection(collection?: string) {
      update({
        collection,
      });
    },

    setPriceRange(minPrice?: number, maxPrice?: number) {
      update({
        minPrice,
        maxPrice,
      });
    },

    setSort(sort: StorefrontFilters["sort"]) {
      update({
        sort,
      });
    },

    remove<K extends keyof StorefrontFilters>(key: K) {
      update({
        [key]: undefined,
      } as Partial<StorefrontFilters>);
    },

    clear() {
      set((state) => {
        const filters: StorefrontFilters = {
          ...INITIAL_FILTERS,
        };

        return {
          filters,

          pagination: {
            ...state.pagination,
            page: 1,
          },
        };
      });
    },
  };
}
