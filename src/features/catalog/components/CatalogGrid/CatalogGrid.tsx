import { ProductCard } from "../../../../components/commerce/product-card/ProductCard";
import type { Product } from "../../../../types";
import { Root } from "./CatalogGrid.styles";
import type { CatalogGridProps } from "./CatalogGrid.types";

export function CatalogGrid({ grid }: CatalogGridProps) {
  return (
    <Root>
      {grid.products.map((product: Product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </Root>
  );
}
