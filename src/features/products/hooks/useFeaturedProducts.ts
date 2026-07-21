import { useQuery } from "@tanstack/react-query";
import { getFeaturedProducts } from "../services";
import { productKeys } from "../queryKeys";
import { PRODUCT_STALE_TIME, PRODUCT_GC_TIME } from "../product.constants";

export function useFeaturedProducts(limit?: number) {
  return useQuery({
    queryKey: productKeys.featured(),

    queryFn: () => getFeaturedProducts(limit),

    staleTime: PRODUCT_STALE_TIME,

    gcTime: PRODUCT_GC_TIME,
  });
}
