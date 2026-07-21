import type { Review } from "../../../types/review.types";
import type { ProductReviewModel } from "../models/ProductReview.model";

export function adaptProductReviews(reviews: Review[]): ProductReviewModel[] {
  return reviews.map((review) => ({
    id: review.id,

    author: review.user.name,

    // avatar: review.user.avatar,

    title: review.title,

    comment: review.comment,

    rating: {
      value: review.rating,
      reviewCount: 1,
    },

    createdAt: review.createdAt,
  }));
}
