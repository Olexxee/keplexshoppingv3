import { forwardRef } from "react";
import { ArrowRight } from "lucide-react";

import { Typography } from "../../typography/Typography";
import {
  ContentCard,
  ContentCardImage,
  ContentCardOverlay,
} from "../../cards/content-card";

import type { CategoryCardProps } from "./CategoryCard.types";
import type { PolymorphicRef } from "../../../types/polymorphic";

type CategoryCardComponent = <C extends React.ElementType = "div">(
  props: CategoryCardProps<C> & {
    ref?: PolymorphicRef<C>;
  },
) => React.ReactElement | null;

const CategoryCardImpl = forwardRef<any, CategoryCardProps<any>>(
  ({ as, category, showArrow = true, className, ...props }, ref) => {
    const { image, title, description, productCount } = category;

    return (
      <ContentCard
        ref={ref}
        as={as}
        aspectRatio="square"
        className={className}
        {...props}
      >
        <ContentCardImage
          src={image}
          alt={title}
          fit="cover"
          zoomOnHover
          className="aspect-square"
        />

        <ContentCardOverlay position="bottom" opacity={0.5}>
          <div className="flex w-full items-center justify-between">
            <div>
              <Typography
                variant="title"
                weight="bold"
                color="white"
                className="mb-1"
              >
                {title}
              </Typography>

              {(description || productCount !== undefined) && (
                <Typography
                  variant="caption"
                  color="white"
                  className="opacity-80"
                >
                  {description ?? `${productCount} Products`}
                </Typography>
              )}
            </div>

            {showArrow && (
              <ArrowRight
                className="
                  h-6
                  w-6
                  text-white
                  transition-transform
                  group-hover:translate-x-1
                "
              />
            )}
          </div>
        </ContentCardOverlay>
      </ContentCard>
    );
  },
);

CategoryCardImpl.displayName = "CategoryCard";

export const CategoryCard = CategoryCardImpl as CategoryCardComponent;
