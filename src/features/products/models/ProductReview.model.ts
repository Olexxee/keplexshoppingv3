export interface ProductReviewModel {
  id: string;

  author: string;

  avatar?: string;

  rating: number;

  title?: string;

  comment: string;

  createdAt: Date;
}
