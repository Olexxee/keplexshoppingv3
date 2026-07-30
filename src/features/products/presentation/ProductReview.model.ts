import type { RatingModel } from "../../../models/commerce";

export interface ProductReviewModel {
  id: string;

  author: string;

  avatar?: string;

  title?: string;

  comment: string;

  rating: RatingModel;

  createdAt: Date;
}
