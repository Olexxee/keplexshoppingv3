import { ProductPrice } from "../../commerce/price/ProductPrice";
import { RatingStars } from "../../commerce/rating/ProductRating/ProductRating";
import { AddToCartButton } from "../../commerce/cart/AddToCartButton";
import {
  Brand,
  Content,
  Footer,
  PriceRow,
  RatingRow,
  Title,
} from "./ProductCard.styles";
import type { ProductCardContentProps } from "./ProductCardContent.types";

export function ProductCardContent({
  product,
  onAddToCart,
}: ProductCardContentProps) {
  const variant = product.variants[0];

  if (!variant || variant.price === undefined) {
    return null;
  }

  return (
    <Content>
      {product.brand && <Brand>{product.brand.name}</Brand>}

      <Title>{product.name}</Title>

      <RatingRow>
        <RatingStars
          value={product.avgRating ?? 0}
          size="sm"
        />
      </RatingRow>

      <PriceRow>
        <ProductPrice
          price={variant.price}
          compareAtPrice={variant.compareAtPrice}
          size="md"
        />
      </PriceRow>

      <Footer>
        <AddToCartButton
          disabled={variant.stock <= 0}
          onAddToCart={() => onAddToCart?.(product)} productId={""}        />
      </Footer>
    </Content>
  );
}
