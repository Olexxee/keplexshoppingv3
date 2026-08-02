import type { StoreApi } from "zustand";
import type { CatalogViewMode, StorefrontStore } from "../storefront.types";
import { INITIAL_UI } from "../storefront.constants";


type Store = StoreApi<StorefrontStore>;

export function createUIActions(
  set: Store["setState"],
  get: Store["getState"],
) {
  return {
    setView(view: CatalogViewMode) {
      set((state: StorefrontStore) => ({
        ui: {
          ...state.ui,
          view,
        },
      }));
    },

    openFilters() {
      set((state: StorefrontStore) => ({
        ui: {
          ...state.ui,
          filterDrawerOpen: true,
        },
      }));
    },

    closeFilters() {
      set((state: StorefrontStore) => ({
        ui: {
          ...state.ui,
          filterDrawerOpen: false,
        },
      }));
    },

    setFilterDrawer(open: boolean) {
      set((state: StorefrontStore) => ({
        ui: {
          ...state.ui,
          filterDrawerOpen: open,
        },
      }));
    },

    toggleFilters() {
      const { ui } = get();

      set((state: StorefrontStore) => ({
        ui: {
          ...state.ui,
          filterDrawerOpen: !ui.filterDrawerOpen,
        },
      }));
    },

    reset() {
      set({
        ui: INITIAL_UI as StorefrontStore["ui"],
      });
    },
  };
}
