import type { ElementType } from "react";
import type {
  PolymorphicComponentProps,
  PolymorphicRef,
} from "../../../types/polymorphic";
export type CardElement = ElementType;

type CardOwnProps = {
  elevated?: boolean;
  bordered?: boolean;
  interactive?: boolean;

  padding?: "none" | "sm" | "md" | "lg";

  rounded?: "none" | "sm" | "md" | "lg" | "xl" | "full";
};

export type CardProps<C extends CardElement = "div"> =
  PolymorphicComponentProps<C, CardOwnProps>;

export type CardComponentRef<C extends CardElement> = PolymorphicRef<C>;
