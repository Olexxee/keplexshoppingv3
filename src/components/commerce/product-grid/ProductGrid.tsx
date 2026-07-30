import { Typography } from "../../typography/Typography";
import { ProductCard } from "../product-card/ProductCard";
import * as S from "./ProductGrid.styles";

import type { ProductGridProps } from "./ProductGrid.types";

export function ProductGrid({
  products,
  emptyMessage = "No products found.",
}: ProductGridProps) {
  if (!products.length) {
    return (
      <S.EmptyState>
        <Typography variant="body" color="secondary">
          {emptyMessage}
        </Typography>
      </S.EmptyState>
    );
  }

  return (
    <S.Root>
      {products.map((product) => (
        <ProductCard key={product.id} product={product as any} />
      ))}
    </S.Root>
  );
}
