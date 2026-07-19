import type { Brand } from "../../../types/brand.types";
import type { ElementType } from "react";
import type { PolymorphicComponentProps } from "../../../types/polymorphic";

type BrandCardOwnProps = {
  brand: Brand;
  verified?: boolean;
  className?: string;
};

export type BrandCardProps<C extends ElementType = "div"> =
  PolymorphicComponentProps<C, BrandCardOwnProps>;