// types/review.types.ts
import type { ProductVariant } from "./product.types";

export interface Review {
  id: string;
  userId: string;
  variantId: string;
  orderId?: string;
  rating: number;
  title?: string;
  comment?: string;
  images?: any;
  isVerified: boolean;
  status: "PENDING" | "APPROVED" | "REJECTED";
  helpfulCount: number;
  notHelpfulCount: number;
  createdAt: string;
  updatedAt: string;
  user?: {
    id: string;
    fullName: string;
  };
  
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
  responses?: ReviewResponse[];
}

export interface ReviewResponse {
  id: string;
  reviewId: string;
  userId: string;
  comment: string;
  createdAt: string;
  user?: {
    id: string;
    fullName: string;
  };
}

export interface CreateReviewPayload {
  variantId: string;
  orderId?: string;
  rating: number;
  title?: string;
  comment?: string;
  images?: any;
}

export interface UpdateReviewPayload {
  rating?: number;
  title?: string;
  comment?: string;
}

export interface ModerateReviewPayload {
  status: "APPROVED" | "REJECTED";
  response?: string;
}

export interface AddReviewResponsePayload {
  comment: string;
}

export interface ReviewStats {
  averageRating: number;
  totalReviews: number;
  ratingDistribution: {
    1: number;
    2: number;
    3: number;
    4: number;
    5: number;
  };
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
