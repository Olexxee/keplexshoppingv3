import type { ElementType } from "react";
import type { CategoryCardModel } from "../models";
import type { PolymorphicComponentProps } from "../../../types/polymorphic";

type CategoryCardOwnProps = {
  category: CategoryCardModel;

  showArrow?: boolean;

  className?: string;
};

export type CategoryCardProps<C extends ElementType = "div"> =
  PolymorphicComponentProps<C, CategoryCardOwnProps>;
