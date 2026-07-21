import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../services";
import { productKeys } from "../queryKeys";
import { PRODUCT_GC_TIME, PRODUCT_STALE_TIME } from "../product.constants";
import type { GetProductsParams } from "../../../api/product.api";

export function useProducts(filters?: GetProductsParams) {
  return useQuery({
    queryKey: productKeys.list(filters),

    queryFn: () => getProducts(filters),

    staleTime: PRODUCT_STALE_TIME,

    gcTime: PRODUCT_GC_TIME,
  });
}
