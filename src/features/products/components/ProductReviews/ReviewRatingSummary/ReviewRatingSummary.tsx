import { Rating } from "../../../../../components/commerce/rating/ProductRating";
import { Root, Left, Right, Score, Count } from "./ReviewRatingSummary.styles";
import type { ReviewRatingSummaryProps } from "./ReviewRatingSummary.types";

export function ReviewRatingSummary({
  rating,
  className,
}: ReviewRatingSummaryProps) {
  return (
    <Root className={className}>
      <Left>
        <Score>{rating.value.toFixed(1)}</Score>

        <Count>
          {rating.reviewCount} review
          {rating.reviewCount !== 1 ? "s" : ""}
        </Count>
      </Left>

      <Right>
        <Rating size={"sm"} {...rating} />
      </Right>
    </Root>
  );
}
