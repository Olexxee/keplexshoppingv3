import { forwardRef } from "react";
import { Card } from "../../ui/card/Card";
import { cn } from "../../../lib/cn";
import { contentCardVariants } from "../content-card/ContentCard.variants";
import type { ContentCardProps } from "../content-card/ContentCard.types";
import type { PolymorphicRef } from "../../../types/polymorphic";

// The public, generic-preserving signature consumers will see
type ContentCardComponent = (<C extends React.ElementType = "div">(
  props: ContentCardProps<C> & { ref?: PolymorphicRef<C> },
) => React.ReactElement | null) & { displayName?: string };

// Internal implementation: intentionally loosely typed, no generics here.
// forwardRef itself can't express "generic over C", so we don't ask it to.
const ContentCardImpl = forwardRef<any, ContentCardProps<any>>(
  (
    {
      as,
      children,
      className,
      interactive = true,
      size,
      appearance,
      aspectRatio = "video",
      ...props
    },
    ref,
  ) => {
    const Component = as ?? "div";

    return (
      <Card
        as={Component}
        ref={ref}
        elevated
        padding="none"
        rounded="lg"
        interactive={interactive}
        className={cn(
          contentCardVariants({
            size,
            appearance,
            aspectRatio,
          }),
          "overflow-hidden",
          className,
        )}
        {...props}
      >
        {children}
      </Card>
    );
  },
);

ContentCardImpl.displayName = "ContentCard";

// Cast once, at the export boundary, to the precise polymorphic type
export const ContentCard = ContentCardImpl as ContentCardComponent;
