import { forwardRef } from "react";
import { ContentCard } from "../../cards/content-card/ContentCard";
import { ProductCardContent } from "./ProductCardContent";
import { ProductCardImage } from "./ProductCardImage";
import type { ProductCardProps } from "./types/ProductCard.types";


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
      <ContentCard
        ref={ref}
        as={as}
        interactive
        className={className}
        {...props}
      >
        <ProductCardImage product={product} />
        <ProductCardContent product={product} onAddToCart={onAddToCart} />
      </ContentCard>
    );
  },
);

ProductCard.displayName = "ProductCard";
