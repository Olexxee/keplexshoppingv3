import { Typography } from "../../typography/Typography";
import { Button } from "../../ui/actions/button/Button";
import { cn } from "../../../lib";
import {
  ContentCard,
  ContentCardContent,
  ContentCardImage,
} from "../content-card";
import type { PromotionCardProps } from "./PromotionCard.types";

export function PromotionCard({
  backgroundImage,
  title,
  description,
  cta = "Learn More",
  backgroundColor = "bg-background-secondary",
  className,
  align = "center",
}: PromotionCardProps) {
  const alignmentClasses = {
    left: "items-start text-left",
    center: "items-center text-center",
    right: "items-end text-right",
  };

  return (
    <ContentCard
      aspectRatio="video"
      className={cn("relative overflow-hidden", className)}
    >
      {backgroundImage && (
        <ContentCardImage
          src={backgroundImage}
          alt={title}
          fit="cover"
          zoomOnHover={false}
        />
      )}
      <ContentCardContent
        spacing="lg"
        className={cn(
          "relative z-10 min-h-[300px] justify-center",
          alignmentClasses[align],
          !backgroundImage && backgroundColor,
        )}
      >
        <Typography variant="h2" weight="bold" className="mb-3 max-w-xl">
          {title}
        </Typography>
        {description && (
          <Typography
            variant="body"
            color="secondary"
            className="mb-6 max-w-lg"
          >
            {description}
          </Typography>
        )}
        {cta && (
          <Button variant="primary" size="lg">
            {cta}
          </Button>
        )}
      </ContentCardContent>
    </ContentCard>
  );
}
