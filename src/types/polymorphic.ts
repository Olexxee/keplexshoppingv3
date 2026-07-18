import type {
  ComponentPropsWithoutRef,
  ComponentPropsWithRef,
  ElementType,
} from "react";

export type AsProp<C extends ElementType> = {
  as?: C;
};

export type PolymorphicRef<C extends ElementType> =
  ComponentPropsWithRef<C>["ref"];

export type PolymorphicComponentProps<
  C extends ElementType,
  Props = {},
> = Props & AsProp<C> & Omit<ComponentPropsWithoutRef<C>, keyof Props | "as">;
