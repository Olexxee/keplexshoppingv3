import { useStorefrontStore } from "../storefront.store";

export const useUI = () => useStorefrontStore((state) => state.ui);

export const useView = () => useStorefrontStore((state) => state.ui.view);

export const useFilterDrawer = () =>
  useStorefrontStore((state) => state.ui.filterDrawerOpen);
