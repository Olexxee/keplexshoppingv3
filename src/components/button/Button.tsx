import * as React from "react";
import type { ElementType, ReactNode } from "react";
import type { VariantProps } from "class-variance-authority";
import { Loader2 } from "lucide-react";
import { cn } from "../../lib/cn";
import type {
  PolymorphicComponentProps,
  PolymorphicRef,
} from "../../types/polymorphic";

import { buttonVariants } from "./button.variants";

type ButtonOwnProps = VariantProps<typeof buttonVariants> & {
  loading?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
};

export type ButtonProps<C extends ElementType = "button"> =
  PolymorphicComponentProps<C, ButtonOwnProps>;

type ButtonComponent = <C extends ElementType = "button">(
  props: ButtonProps<C> & {
    ref?: PolymorphicRef<C>;
  },
) => React.ReactElement | null;

export const Button = React.forwardRef(function Button<
  C extends ElementType = "button",
>(
  {
    as,
    className,
    variant,
    size,
    rounded,
    fullWidth,
    loading = false,
    leftIcon,
    rightIcon,
    children,
    disabled,
    ...props
  }: ButtonProps<C>,
  ref: React.Ref<any>,
) {
  const Component = as || "button";

  const isButton = Component === "button";

  return (
    <Component
      ref={ref}
      className={cn(
        buttonVariants({
          variant,
          size,
          rounded,
          fullWidth,
        }),
        className,
      )}
      {...(isButton
        ? {
            disabled: disabled || loading,
          }
        : {
            "aria-disabled": disabled || loading,
          })}
      {...props}
    >
      {loading ? <Loader2 size={16} className="animate-spin" /> : leftIcon}

      {children}

      {!loading && rightIcon}
    </Component>
  );
}) as ButtonComponent;
