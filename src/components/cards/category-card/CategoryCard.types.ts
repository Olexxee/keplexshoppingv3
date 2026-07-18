import type { ElementType } from "react";
import type { PolymorphicComponentProps } from "../../../types/polymorphic";

type CategoryCardOwnProps = {
  /** Category image */
  image: string;

  /** Category title */
  title: string;

  /** Optional description */
  description?: string;

  /** Number of products */
  productCount?: number;

  /** Show arrow icon */
  showArrow?: boolean;

  /** Additional class */
  className?: string;
};

export type CategoryCardProps<C extends ElementType = "div"> =
  PolymorphicComponentProps<C, CategoryCardOwnProps>;
