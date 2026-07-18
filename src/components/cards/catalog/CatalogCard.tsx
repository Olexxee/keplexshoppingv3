import { forwardRef } from "react";
import { Card, CardBody } from "../../ui/card";
import { cva } from "class-variance-authority";
import { cn } from "../../../lib";

export const cardVariants = cva(
  "bg-background transition-all",
  {
    variants: {
      elevated: {
        true: "shadow-md",
        false: "",
      },

      bordered: {
        true: "border border-border",
        false: "",
      },

      interactive: {
        true:
          "cursor-pointer hover:-translate-y-1 hover:shadow-lg focus-visible:outline-none",
        false: "",
      },

      padding: {
        none: "",
        sm: "p-3",
        md: "p-4",
        lg: "p-6",
      },

      rounded: {
        none: "rounded-none",
        sm: "rounded-sm",
        md: "rounded-md",
        lg: "rounded-lg",
        xl: "rounded-xl",
        full: "rounded-full",
      },
    },

    defaultVariants: {
      elevated: false,
      bordered: true,
      interactive: false,
      padding: "md",
      rounded: "lg",
    },
  },
);

import { CatalogCardActions } from "./CatalogCardActions";
import { CatalogCardContent } from "./CatalogCardContent";
import { CatalogCardImage } from "./CatalogCardImage";

import type { CatalogCardProps } from "./catalog.types";

export const CatalogCard = forwardRef<HTMLDivElement, CatalogCardProps>(
  (
    {
      item,
      variant = "default",
      className,
      showActions = true,
      showCategory = true,
      showRating = true,
      onClick,
      onWishlist,
      onQuickView,
      onAddToCart,
      onBookService,

      ...props
    },
    ref,
  ) => {
    const image = item.images[0] ?? item.media[0]?.url ?? "";

    return (
      <Card
        ref={ref}
        interactive
        padding="none"
        className={cn(
          "group overflow-hidden",
          variant === "horizontal" && "md:flex",
          className,
        )}
        onClick={() => onClick?.(item)}
        {...props}
      >
        <CardBody>
          <CatalogCardImage item={item} image={image} onWishlist={onWishlist} />

          <div className="space-y-4 p-4">
            <CatalogCardContent
              item={item}
              showCategory={showCategory}
              showRating={showRating}
            />

            {showActions && (
              <CatalogCardActions
                item={item}
                onQuickView={onQuickView}
                onAddToCart={onAddToCart}
                onBookService={onBookService}
              />
            )}
          </div>
        </CardBody>
      </Card>
    );
  },
);

CatalogCard.displayName = "CatalogCard";
