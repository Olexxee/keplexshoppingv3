import { Root, List } from "./ProductReviews.styles";

import { ReviewCard } from "./ReviewCard";
import { EmptyReviews } from "./EmptyReviews";
import { ReviewRatingSummary } from "./ReviewRatingSummary";

import type { ProductReviewsProps } from "./ProductReviews.types";

export function ProductReviews({
  rating,
  reviews,
  className,
}: ProductReviewsProps) {
  return (
    <Root className={className}>
      <ReviewRatingSummary rating={rating} />

      {reviews.length === 0 ? (
        <EmptyReviews />
      ) : (
        <List>
          {reviews.map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </List>
      )}
    </Root>
  );
}
