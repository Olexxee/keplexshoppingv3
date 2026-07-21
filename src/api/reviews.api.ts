// reviews.api.ts
import { api } from "../lib/api";
import type {
  Review,
  ReviewResponse,
  ReviewStats,
  CreateReviewPayload,
  UpdateReviewPayload,
  ModerateReviewPayload,
  AddReviewResponsePayload,
} from "../types/review.types";

export interface GetReviewsParams {
  page?: number;
  limit?: number;
  status?: "PENDING" | "APPROVED" | "REJECTED";
  userId?: string;
  search?: string;
  startDate?: string;
  endDate?: string;
}

export interface ReviewsResponse {
  data: Review[];
  meta: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}

// ============ Customer API ============
export const reviewsApi = {
  /**
   * Get reviews for a variant (Public)
   */
  getVariantReviews: async (
    variantId: string,
    params?: { page?: number; limit?: number },
  ): Promise<ReviewsResponse> => {
    const response = await api.get(`/api/reviews/variant/${variantId}`, {
      params,
    });
    return response.data;
  },

  /**
   * Get review stats for a variant (Public)
   */
  getVariantReviewStats: async (variantId: string): Promise<ReviewStats> => {
    const response = await api.get(`/api/reviews/variant/${variantId}/stats`);
    return response.data.data;
  },

  /**
   * Create a review (Customer)
   */
  createReview: async (payload: CreateReviewPayload): Promise<Review> => {
    const response = await api.post("/api/reviews", payload);
    return response.data.data;
  },

  /**
   * Get my reviews (Customer)
   */
  getMyReviews: async (params?: GetReviewsParams): Promise<ReviewsResponse> => {
    const response = await api.get("/api/reviews/me", { params });
    return response.data;
  },

  /**
   * Get review by ID (Customer)
   */
  getReviewById: async (id: string): Promise<Review> => {
    const response = await api.get(`/api/reviews/${id}`);
    return response.data.data;
  },

  /**
   * Update review (Customer)
   */
  updateReview: async (
    id: string,
    payload: UpdateReviewPayload,
  ): Promise<Review> => {
    const response = await api.patch(`/api/reviews/${id}`, payload);
    return response.data.data;
  },

  /**
   * Delete review (Customer)
   */
  deleteReview: async (id: string): Promise<void> => {
    await api.delete(`/api/reviews/${id}`);
  },

  /**
   * Mark review as helpful (Customer)
   */
  markHelpful: async (id: string): Promise<Review> => {
    const response = await api.patch(`/api/reviews/${id}/helpful`);
    return response.data.data;
  },
};

// ============ Admin API ============
export const adminReviewsApi = {
  /**
   * Get all reviews (Admin)
   */
  getAllReviews: async (
    params?: GetReviewsParams,
  ): Promise<ReviewsResponse> => {
    const response = await api.get("/api/reviews/admin/all", { params });
    return response.data;
  },

  /**
   * Moderate review (Admin)
   */
  moderateReview: async (
    id: string,
    payload: ModerateReviewPayload,
  ): Promise<Review> => {
    const response = await api.patch(
      `/api/reviews/admin/${id}/moderate`,
      payload,
    );
    return response.data.data;
  },

  /**
   * Add admin response to review (Admin)
   */
  addReviewResponse: async (
    id: string,
    payload: AddReviewResponsePayload,
  ): Promise<ReviewResponse> => {
    const response = await api.post(
      `/api/reviews/admin/${id}/response`,
      payload,
    );
    return response.data.data;
  },

  /**
   * Delete admin response (Admin)
   */
  deleteReviewResponse: async (responseId: string): Promise<void> => {
    await api.delete(`/api/reviews/admin/response/${responseId}`);
  },
};
