// wishlist.api.ts
import { api } from "../lib/api";
import type {
  WishlistItem,
  WishlistResponse,
  AddToWishlistPayload,
} from "../types/wishlist.types";

export interface GetWishlistParams {
  page?: number;
  limit?: number;
}

export interface BatchCheckResponse {
  [variantId: string]: boolean;
}

export const wishlistApi = {
  /**
   * Get user's wishlist
   */
  getWishlist: async (
    params?: GetWishlistParams,
  ): Promise<WishlistResponse> => {
    const response = await api.get("/api/wishlist", { params });
    return response.data;
  },

  /**
   * Add item to wishlist
   */
  addToWishlist: async (
    payload: AddToWishlistPayload,
  ): Promise<WishlistItem> => {
    const response = await api.post("/api/wishlist", payload);
    return response.data.data;
  },

  /**
   * Remove item from wishlist
   */
  removeFromWishlist: async (variantId: string): Promise<void> => {
    await api.delete(`/api/wishlist/${variantId}`);
  },

  /**
   * Clear wishlist
   */
  clearWishlist: async (): Promise<void> => {
    await api.delete("/api/wishlist/clear");
  },

  /**
   * Check if variant is in wishlist
   */
  checkInWishlist: async (variantId: string): Promise<boolean> => {
    const response = await api.get(`/api/wishlist/${variantId}/check`);
    return response.data.data.inWishlist;
  },

  /**
   * Batch check multiple variants
   */
  batchCheckWishlist: async (
    variantIds: string[],
  ): Promise<BatchCheckResponse> => {
    const response = await api.post("/api/wishlist/batch-check", {
      variantIds,
    });
    return response.data.data;
  },
};
