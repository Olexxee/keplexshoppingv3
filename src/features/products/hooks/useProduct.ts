import { useMemo } from "react";
import { useQuery } from "@tanstack/react-query";
import { getProduct, getProductReviews, getRelatedProducts } from "../services";
import { adaptProduct } from "../adapters";

async function fetchProductData(slug: string) {
  const [product, reviews, relatedProducts] = await Promise.all([
    getProduct(slug),

    getProductReviews(slug),

    getRelatedProducts(slug),
  ]);

  return {
    product,
    reviews,
    relatedProducts,
  };
}

export function useProduct(slug: string) {
  const query = useQuery({
    queryKey: ["product", slug],

    queryFn: () => fetchProductData(slug),
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