import { useMemo } from "react";
import { useStorefrontStore } from "./storefront.store";

export function useStorefrontQuery() {
  const filters = useStorefrontStore((state) => state.filters);

  const pagination = useStorefrontStore((state) => state.pagination);

  return useMemo(
    () => ({
      ...filters,
      ...pagination,
    }),
    [filters, pagination],
  );
}
