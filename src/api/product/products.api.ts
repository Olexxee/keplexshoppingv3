import { api } from "../../lib/api";
import type { Product, ProductVariant } from "../../types/product.types";

export interface GetProductsParams {
  page?: number;
  limit?: number;
  categoryId?: string;
  brandId?: string;
  collectionId?: string;
  status?: "DRAFT" | "ACTIVE" | "ARCHIVED";
  isFeatured?: boolean;
  isNew?: boolean;
  isBestSeller?: boolean;
  minPrice?: number;
  maxPrice?: number;
  search?: string;
  sortBy?: "name" | "createdAt" | "updatedAt" | "price";
  sortOrder?: "asc" | "desc";
}

export interface ProductsResponse {
  data: Product[];
  meta: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}

export const getProducts = async (
  params?: GetProductsParams,
): Promise<ProductsResponse> => {
  const response = await api.get("/api/products", { params });
  return response.data;
};

export const getFeaturedProducts = async (params?: {
  limit?: number;
  categoryId?: string;
}): Promise<Product[]> => {
  const response = await api.get("/api/products/featured", { params });
  return response.data.data;
};

export const getNewArrivals = async (params?: {
  limit?: number;
  categoryId?: string;
}): Promise<Product[]> => {
  const response = await api.get("/api/products/new-arrivals", { params });
  return response.data.data;
};

export const getBestSellers = async (params?: {
  limit?: number;
  categoryId?: string;
}): Promise<Product[]> => {
  const response = await api.get("/api/products/best-sellers", { params });
  return response.data.data;
};

export const getProductBySlug = async (slug: string): Promise<Product> => {
  const response = await api.get(`/api/products/slug/${slug}`);
  return response.data.data;
};

export const getProductById = async (id: string): Promise<Product> => {
  const response = await api.get(`/api/products/${id}`);
  return response.data.data;
};

export const getRelatedProducts = async (
  productId: string,
  params?: { limit?: number },
): Promise<Product[]> => {
  const response = await api.get(`/api/products/${productId}/related`, {
    params,
  });
  return response.data.data;
};

export const getProductVariants = async (
  productId: string,
): Promise<ProductVariant[]> => {
  const response = await api.get(`/api/products/${productId}/variants`);
  return response.data.data;
};
