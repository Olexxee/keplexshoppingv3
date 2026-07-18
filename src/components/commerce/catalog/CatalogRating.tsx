import { ProductRating } from "../products/ProductRating";

interface CatalogRatingProps {
  rating?: number;
  totalReviews?: number;
}

export function CatalogRating({
  rating = 0,
  totalReviews = 0,
}: CatalogRatingProps) {
  if (!rating) {
    return null;
  }

  return (
    <ProductRating rating={rating} totalReviews={totalReviews} size="sm" />
  );
}
