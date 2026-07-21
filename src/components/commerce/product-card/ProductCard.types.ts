import type { ElementType } from "react";
import type { Product, PolymorphicComponentProps } from "../../../types";

type ProductCardOwnProps = {
  product: Product;
  className?: string;
  isWishlisted?: boolean;
  onAddToCart?: (product: Product) => void;
  onWishlist?: (product: Product) => void;
  onQuickView?: (product: Product) => void;
};

export type ProductCardProps<C extends ElementType = "div"> =
  PolymorphicComponentProps<C, ProductCardOwnProps>;
