import * as React from "react";
import type { ElementType } from "react";
import type { VariantProps } from "class-variance-authority";
import { cn } from "../../lib/cn";
import type {
  PolymorphicComponentProps,
  PolymorphicRef,
} from "../../types/polymorphic";

import { typographyVariants } from "./typography.variants";

type TypographyOwnProps = VariantProps<typeof typographyVariants>;

export type TypographyProps<C extends ElementType = "p"> =
  PolymorphicComponentProps<C, TypographyOwnProps>;

type TypographyComponent = <C extends ElementType = "p">(
  props: TypographyProps<C> & {
    ref?: PolymorphicRef<C>;
  },
) => React.ReactElement | null;

export const Typography = React.forwardRef<any, TypographyProps<any>>(
  function Typography(
    {
      as,
      className,
      variant,
      color,
      weight,
      align,
      truncate,
      ...props
    }: TypographyProps<any>,
    ref: PolymorphicRef<any>,
  ) {
    const Component = as || "p";

    return (
      <Component
        ref={ref}
        className={cn(
          typographyVariants({
            variant,
            color,
            weight,
            align,
            truncate,
          }),
          className,
        )}
        {...props}
      />
    );
  },
) as unknown as TypographyComponent;

(Typography as any).displayName = "Typography";
