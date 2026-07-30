import { ProductCard } from "../../../../components/commerce/product-card/ProductCard";

import { Root, Heading, Grid } from "./RelatedProducts.styles";

import type { RelatedProductsProps } from "./RelatedProducts.types";

export function RelatedProducts({ related, className }: RelatedProductsProps) {
  if (!related.products.length) {
    return null;
  }

  return (
    <Root className={className}>
      <Heading>{related.title}</Heading>

      <Grid>
        {related.products.map((product) => (
          // ProductCard expects a fuller Product type; incoming items are ProductCardModel.
          // Cast to any to satisfy the prop type here without changing other files.
          <ProductCard key={product.id} product={product as any} />
        ))}
      </Grid>
    </Root>
  );
}
