import { useQuery } from "@tanstack/react-query";

import { getBestSellers } from "../services";

import { productKeys } from "../queryKeys";

import { PRODUCT_GC_TIME, PRODUCT_STALE_TIME } from "../product.constants";

export function useBestSellers(limit?: number) {
  return useQuery({
    queryKey: productKeys.bestSellers(),

    queryFn: () => getBestSellers(limit),

    staleTime: PRODUCT_STALE_TIME,

    gcTime: PRODUCT_GC_TIME,
  });
}
