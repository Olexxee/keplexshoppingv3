import { forwardRef } from "react";
import { CheckCircle } from "lucide-react";

import { Typography } from "../../typography/Typography";
import { Image } from "../../image";
import { ContentCard, ContentCardContent } from "../content-card";
import type { BrandCardProps } from "./BrandCard.types";

export const BrandCard = forwardRef<any, BrandCardProps<any>>(
  (
    { as, brand, verified = false, className, ...props },
    ref,
  ) => {
    return (
      <ContentCard
        as={as}
        aspectRatio="auto"
        interactive
        className={className}
        ref={ref} 
        {...(props as any)}
      >
        <ContentCardContent spacing="lg" align="center">
          <div className="flex h-24 w-24 items-center justify-center rounded-full bg-background-secondary p-4">
            <Image src={brand.logo ?? ""} alt={brand.name} fit="contain" />
          </div>

          <div className="flex items-center gap-2">
            <Typography variant="title" weight="semibold">
              {brand.name}
            </Typography>

            {verified && <CheckCircle className="h-5 w-5 text-brand-primary" />}
          </div>

          {brand.description && (
            <Typography variant="bodySm" color="secondary" align="center">
              {brand.description}
            </Typography>
          )}

          {brand._count && (
            <Typography variant="caption" color="secondary">
              {brand._count.products} Products
            </Typography>
          )}
        </ContentCardContent>
      </ContentCard>
    );
  },
);

BrandCard.displayName = "BrandCard";
