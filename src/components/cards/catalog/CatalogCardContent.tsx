import { ProductPrice } from "../../commerce/product/ProductPrice";
import { ProductRating } from "../../commerce/product/ProductRating";
import { Typography } from "../../typography/Typography";
import type { CatalogItem } from "../../../types/catalog.types";

interface CatalogCardContentProps {
  item: CatalogItem;
  showCategory: boolean;
  showRating: boolean;
}

export function CatalogCardContent({
  item,
  showCategory,
  showRating,
}: CatalogCardContentProps) {
  const price = Number(item.price);

  const originalPrice = item.compareAtPrice
    ? Number(item.compareAtPrice)
    : undefined;

  return (
    <>
      {showCategory && item.category && (
        <Typography variant="caption" color="muted">
          {item.category.name}
        </Typography>
      )}

      <Typography variant="body" weight="semibold" className="line-clamp-2">
        {item.name}
      </Typography>

      <ProductPrice amount={price} originalPrice={originalPrice} />

      {showRating && <ProductRating rating={4.8} totalReviews={24} />}
    </>
  );
}
