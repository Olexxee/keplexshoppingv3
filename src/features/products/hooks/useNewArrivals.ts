import { useQuery } from "@tanstack/react-query";
import { getNewArrivals } from "../services";
import { productKeys } from "../queryKeys";
import { PRODUCT_GC_TIME, PRODUCT_STALE_TIME } from "../product.constants";

export function useNewArrivals(limit?: number) {
  return useQuery({
    queryKey: productKeys.newest(),

    queryFn: () => getNewArrivals(limit),

    staleTime: PRODUCT_STALE_TIME,

    gcTime: PRODUCT_GC_TIME,
  });
}
