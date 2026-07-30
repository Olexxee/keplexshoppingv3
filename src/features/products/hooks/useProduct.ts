import { useMemo } from "react";
import { useQuery } from "@tanstack/react-query";
import { adaptProduct } from "../adapters";
import { PRODUCT_GC_TIME, PRODUCT_STALE_TIME } from "../product.constants";
import { productKeys } from "../queryKeys"
import type { UseProductResult } from "../ProductFeature.types";
import { getProductDetails } from "../services/productDetails.service";



export function useProduct(slug: string): UseProductResult {
  const query = useQuery({
    queryKey: productKeys.detail(slug),

    queryFn: () => getProductDetails(slug),

    enabled: Boolean(slug),

    staleTime: PRODUCT_STALE_TIME,

    gcTime: PRODUCT_GC_TIME,
  });

  const presentation = useMemo(() => {
    if (!query.data) {
      return undefined;
    }

    return adaptProduct(query.data);
  }, [query.data]);

  return {
    product: query.data?.product,

    aggregate: query.data,

    presentation,

    isLoading: query.isLoading,

    isFetching: query.isFetching,

    error: query.error,

    refetch: query.refetch,
  };
}
