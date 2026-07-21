import { useMemo } from "react";
import { useQuery } from "@tanstack/react-query";
import { adaptProduct } from "../adapters";
import { PRODUCT_GC_TIME, PRODUCT_STALE_TIME } from "../product.constants";
import { productKeys } from "../queryKeys";
import { getProductDetails } from "../services";
import type { UseProductResult } from "../ProductFeature.types";



export function useProduct(slug: string): UseProductResult {
  const query = useQuery({
    queryKey: productKeys.detail(slug),

    queryFn: () => getProductDetails(slug),

    enabled: !!slug,

    staleTime: PRODUCT_STALE_TIME,

    gcTime: PRODUCT_GC_TIME,
  });

  const presentation = useMemo(() => {
    if (!query.data) {
      return undefined;
    }

    return adaptProduct({
      product: query.data.product,
      reviews: query.data.reviews,
      relatedProducts: query.data.relatedProducts,
    });
  }, [query.data]);

  return {
    product: query.data?.product,

    presentation,

    isLoading: query.isLoading,

    isFetching: query.isFetching,

    error: query.error,

    refetch: query.refetch,
  };
}
