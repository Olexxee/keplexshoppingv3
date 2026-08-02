import { useMemo } from "react";
import { useQuery } from "@tanstack/react-query";
import { getCatalog } from "../services/catalog.service";
import { adaptCatalog } from "../adapters/catalog.adapter";
import {
  CATALOG_QUERY_KEY,
  CATALOG_STALE_TIME,
  CATALOG_GC_TIME,
} from "../utils/catalog.constants";
import { useStorefrontQuery } from "../../storefront/useStorefrontQuery";



export function useCatalog() {
  const queryParams = useStorefrontQuery();  
  const query = useQuery({
    queryKey: [CATALOG_QUERY_KEY, queryParams],
    queryFn: () => getCatalog(queryParams),
    staleTime: CATALOG_STALE_TIME,
    gcTime: CATALOG_GC_TIME,
  });

  const presentation = useMemo(() => {
    if (!query.data) return undefined;

    return adaptCatalog(query.data as any, queryParams);
  }, [query.data, queryParams]);

  return {
    ...query,
    presentation,
  };
}
