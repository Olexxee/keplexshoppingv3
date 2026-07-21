import { forwardRef } from "react";
import { Card } from "../../ui/card";
import { ProductCardContent } from "./ProductCardContent";
import { ProductCardImage } from "./ProductCardImage";
import type { ProductCardProps } from "./ProductCard.types";

export const ProductCard = forwardRef<HTMLDivElement, ProductCardProps<"div">>(
  (
    {
      as,
      product,
      className,

      onAddToCart,
      ...props
    },
    ref,
  ) => {
    return (
      <Card
        ref={ref}
        as={as}
        interactive
        padding="none"
        className={className}
        {...props}
      >
        <ProductCardImage product={product} />
        <ProductCardContent product={product} onAddToCart={onAddToCart} />
      </Card>
    );
  },
);

ProductCard.displayName = "ProductCard";
