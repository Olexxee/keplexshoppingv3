import type { Review } from "../../../types/review.types";
import type { RatingModel } from "../../../models/commerce";
import type { Product } from "../../../types/product.types";



export function getAverageRating(reviews: Review[]): number {
  if (!reviews.length) {
    return 0;
  }

  return (
    reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length
  );
}

export function getReviewCount(reviews: Review[]): number {
  return reviews.length;
}


export function createRatingModel(product: Product): RatingModel {
  const reviewCount = product.totalReviews ?? 0;
  const value = product.avgRating ?? 0;

  return {
    value,
    reviewCount,
    count: reviewCount,
    formatted: value.toFixed(1),
  };
}

export function createReviewRatingModel(review: Review): RatingModel {
  return {
    value: review.rating,
    reviewCount: 1,
    count: 1,
    formatted: review.rating.toFixed(1),
  };
}
