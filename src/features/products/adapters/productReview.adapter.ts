import type { Review } from "../../../types/review.types";
import type { ProductReviewModel } from "../presentation";

export function adaptProductReviews(reviews: Review[]): ProductReviewModel[] {
  return reviews.map((review) => ({
    id: review.id,

    author: review.user?.fullName ?? "",

    title: review.title ?? "",

    comment: review.comment ?? "",

    rating: {
      value: review.rating,
      count: 1,
      reviewCount: 1,
      formatted: `${review.rating}/5`,
    },

    createdAt: new Date(review.createdAt),
  }));
}
