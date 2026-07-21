import { api } from "../../../lib/api";

import type { Product } from "../../../types/product.types";
import type { Review } from "../../../types/review.types";
import type { ProductFilters } from "../ProductFeature.types";
import type { PaginatedResponse } from "../../../lib/";

export async function getProducts(
  filters?: ProductFilters,
): Promise<PaginatedResponse<Product>> {
  const { data } = await api.get("/products", {
    params: filters,
  });

  return data.data;
}

export async function searchProducts(query: string): Promise<Product[]> {
  const { data } = await api.get("/products/search", {
    params: { query },
  });

  return data.data;
}

export async function getProduct(slug: string): Promise<Product> {
  const { data } = await api.get(`/products/${slug}`);

  return data.data;
}

export async function getRelatedProducts(slug: string): Promise<Product[]> {
  const { data } = await api.get(`/products/${slug}/related`);

  return data.data;
}

export async function getProductReviews(slug: string): Promise<Review[]> {
  const { data } = await api.get(`/products/${slug}/reviews`);

  return data.data;
}

export async function getFeaturedProducts(): Promise<Product[]> {
  const { data } = await api.get("/products/featured");

  return data.data;
}

export async function getNewProducts(): Promise<Product[]> {
  const { data } = await api.get("/products/new");

  return data.data;
}

export async function getBestSellerProducts(): Promise<Product[]> {
  const { data } = await api.get("/products/best-sellers");

  return data.data;
}
