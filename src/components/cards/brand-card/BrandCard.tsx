import { CheckCircle } from "lucide-react";
import { Typography } from "../../typography/Typography";
import { ContentCard, ContentCardContent } from "../content-card";
import type { BrandCardProps } from "./BrandCard.types";

export function BrandCard({
  logo,
  name,
  productCount,
  verified = false,
  slug,
  className,
}: BrandCardProps) {
  return (
    <ContentCard
      href={`/brands/${slug}`}
      aspectRatio="auto"
      className={className}
    >
      <ContentCardContent spacing="lg" align="center">
        <div className="mb-4 flex h-24 w-24 items-center justify-center rounded-full bg-background-secondary p-4">
          <img
            src={logo}
            alt={name}
            className="max-h-full max-w-full object-contain"
          />
        </div>
        <div className="flex items-center gap-2">
          <Typography variant="title" weight="semibold">
            {name}
          </Typography>
          {verified && <CheckCircle className="h-5 w-5 text-brand-primary" />}
        </div>
        <Typography variant="bodySm" color="secondary">
          {productCount} Products
        </Typography>
      </ContentCardContent>
    </ContentCard>
  );
}
