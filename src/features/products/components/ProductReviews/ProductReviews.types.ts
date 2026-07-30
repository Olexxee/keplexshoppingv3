import type { ProductReviewModel } from "../../presentation/ProductReview.model";
import type { RatingModel } from "../../../../models/commerce/RatingModel";

export interface ProductReviewsProps {
  rating: RatingModel;

  reviews: ProductReviewModel[];

  className?: string;
}