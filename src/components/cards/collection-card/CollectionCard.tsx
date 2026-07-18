import { ArrowRight } from "lucide-react";
import { Typography } from "../../typography/Typography";

import {
  ContentCard,
  ContentCardImage,
  ContentCardOverlay,
} from "../content-card";

import type { CollectionCardProps } from "./CollectionCard.types";

export function CollectionCard({
  collection,
  className,
  showArrow = true,
}: CollectionCardProps) {
  return (
    <ContentCard aspectRatio="square" className={className} interactive>
      <ContentCardImage
        src={collection.image ?? ""}
        alt={collection.name}
        fit="cover"
        zoomOnHover
      />

      <ContentCardOverlay position="bottom">
        <div className="flex items-center justify-between">
          <div>
            <Typography variant="title" weight="bold" color="white">
              {collection.name}
            </Typography>

            {collection.description && (
              <Typography
                variant="caption"
                color="white"
                className="opacity-80"
              >
                {collection.description}
              </Typography>
            )}

            {collection._count && (
              <Typography
                variant="caption"
                color="white"
                className="opacity-70"
              >
                {collection._count.products} Products
              </Typography>
            )}
          </div>

          {showArrow && (
            <ArrowRight className="h-5 w-5 text-white transition-transform group-hover:translate-x-1" />
          )}
        </div>
      </ContentCardOverlay>
    </ContentCard>
  );
}
