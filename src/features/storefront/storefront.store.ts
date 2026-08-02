import { create } from "zustand";
import {
  INITIAL_FILTERS,
  INITIAL_PAGINATION,
  INITIAL_UI,
} from "./storefront.constants";
import type { StorefrontStore } from "./storefront.types";
import {
  createFilterActions,
  createPaginationActions,
  createUIActions,
} from "./actions";




export const useStorefrontStore = create<StorefrontStore>()((set, get) => ({
  filters: INITIAL_FILTERS as StorefrontStore["filters"],

  pagination: INITIAL_PAGINATION,

  ui: INITIAL_UI as StorefrontStore["ui"],

  actions: {
    filters: createFilterActions(set, get),
    pagination: createPaginationActions(set, get),
    ui: createUIActions(set, get),
  },
}));
