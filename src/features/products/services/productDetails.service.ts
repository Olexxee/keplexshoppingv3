import { getProductBySlug, getRelatedProducts } from "../../../api/product/products.api";
import { reviewsApi } from "../../../api/reviews.api";
import type { ProductAggregate } from "../models";

export async function getProductDetails(
  slug: string,
): Promise<ProductAggregate> {
  const product = await getProductBySlug(slug);

  const [reviewsResult, relatedResult] = await Promise.allSettled([
    reviewsApi.getReviewById(product.id),
    getRelatedProducts(product.id),
  ]);

  const reviews =
    reviewsResult.status === "fulfilled"
      ? Array.isArray(reviewsResult.value)
        ? reviewsResult.value
        : [reviewsResult.value]
      : [];

  const relatedProducts =
    relatedResult.status === "fulfilled"
      ? relatedResult.value
      : [];

  return {
    product,
    reviews,
    relatedProducts,
  };
}
