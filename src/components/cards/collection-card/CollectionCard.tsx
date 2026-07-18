import { ArrowRight } from "lucide-react";
import { Typography } from "../../typography/Typography";
import {
  ContentCard,
  ContentCardImage,
  ContentCardOverlay,
} from "../content-card";
import type { CollectionCardProps } from "./CollectionCard.types";

export function CollectionCard({
  image,
  title,
  subtitle,
  cta = "Shop Now",
  slug,
  className,
  overlayContent,
}: CollectionCardProps) {
  return (
    <ContentCard
      href={`/collections/${slug}`}
      aspectRatio="video"
      className={className}
    >
      <ContentCardImage src={image} alt={title} fit="cover" zoomOnHover />
      <ContentCardOverlay position="center">
        {overlayContent || (
          <div className="flex flex-col items-center text-center">
            {subtitle && (
              <Typography
                variant="caption"
                color="white"
                className="mb-2 uppercase tracking-wider opacity-80"
              >
                {subtitle}
              </Typography>
            )}
            <Typography
              variant="display"
              weight="bold"
              color="white"
              className="mb-4 max-w-2xl"
            >
              {title}
            </Typography>
            <div className="inline-flex items-center gap-2 rounded-full bg-white/20 px-6 py-2 text-white backdrop-blur-sm transition-colors hover:bg-white/30">
              <Typography variant="bodySm" weight="medium">
                {cta}
              </Typography>
              <ArrowRight className="h-4 w-4" />
            </div>
          </div>
        )}
      </ContentCardOverlay>
    </ContentCard>
  );
}
