import * as React from "react";

export type AsProp<C extends React.ElementType> = {
  as?: C;
};

export type PolymorphicRef<C extends React.ElementType> =
  React.ComponentPropsWithRef<C>["ref"];

export type PolymorphicComponentProps<
  C extends React.ElementType,
  Props = {},
> = Props &
  AsProp<C> &
  Omit<React.ComponentPropsWithoutRef<C>, keyof Props | "as">;
