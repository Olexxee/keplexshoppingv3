import { useStorefrontStore } from "../storefront.store";
import { useFilters, usePagination, useUI } from "../selectors";


export function useStorefront(p0: (state: any) => any) {
  const filters = useFilters();

  const pagination = usePagination();

  const ui = useUI();

  const actions = useStorefrontStore((state) => state.actions);

  return {
    filters,

    pagination,

    ui,

    actions,
  };
}
