import { forwardRef } from "react";
import { cn } from "../../../lib/cn";
import { cardVariants } from "./Card.variants";
import type { CardComponentRef, CardElement, CardProps } from "./Card.types";

// Public, generic-preserving signature
type CardComponent = (<C extends CardElement = "div">(
  props: CardProps<C> & { ref?: CardComponentRef<C> },
) => React.ReactElement | null) & { displayName?: string };

const CardImpl = forwardRef<any, any>(
  (
    {
      as,
      elevated,
      bordered,
      interactive,
      padding,
      rounded,
      className,
      ...props
    }: CardProps<any>,
    ref: CardComponentRef<any>,
  ) => {
    const Component = as ?? "div";

    return (
      <Component
        ref={ref}
        className={cn(
          cardVariants({
            elevated,
            bordered,
            interactive,
            padding,
            rounded,
          }),
          className,
        )}
        {...props}
      />
    );
  },
);

CardImpl.displayName = "Card";

// Cast once, at the export boundary
export const Card = CardImpl as CardComponent;
