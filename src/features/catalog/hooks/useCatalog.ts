import { useMemo } from "react";
import { useQuery } from "@tanstack/react-query";
import { getCatalog } from "../services/catalog.service";
import { adaptCatalog } from "../adapters/catalog.adapter";
import {
  CATALOG_QUERY_KEY,
  CATALOG_STALE_TIME,
  CATALOG_GC_TIME,
} from "../utils/catalog.constants";
import type { GetProductsParams } from "../../../api/product/products.api";


export function useCatalog(filters: GetProductsParams = {}) {
  const query = useQuery({
    queryKey: [CATALOG_QUERY_KEY, filters],

    queryFn: () => getCatalog(filters),

    staleTime: CATALOG_STALE_TIME,

    gcTime: CATALOG_GC_TIME,
  });

  const presentation = useMemo(() => {
    if (!query.data) {
      return undefined;
    }

    return adaptCatalog(query.data, filters);
  }, [query.data, filters]);

  return {
    ...query,

    presentation,
  };
}
