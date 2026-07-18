import type { ProductVariant } from "./product.types";

export interface WishlistItem {
  id: string;
  userId: string;
  variantId: string;
  createdAt: string;
  variant?: ProductVariant & {
    product?: {
      id: string;
      name: string;
      slug: string;
      brand?: {
        id: string;
        name: string;
        slug: string;
      };
      category?: {
        id: string;
        name: string;
        slug: string;
      };
    };
  };
}

export interface WishlistResponse {
  data: WishlistItem[];
  meta?: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}

export interface AddToWishlistPayload {
  variantId: string;
}

export interface BatchCheckResponse {
  [variantId: string]: boolean;
}
