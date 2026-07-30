import type { RatingModel } from "../../../models/commerce";
import type { ProductReviewModel } from "./ProductReview.model";

export interface ProductReviewsSectionModel {
  rating: RatingModel;

  reviews: ProductReviewModel[];
}
