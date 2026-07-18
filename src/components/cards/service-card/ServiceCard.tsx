import { Typography } from "../../typography/Typography";
import { ContentCard, ContentCardContent } from "../content-card";
import type { ServiceCardProps } from "./ServiceCard.types";

export function ServiceCard({
  icon,
  title,
  description,
  className,
}: ServiceCardProps) {
  return (
    <ContentCard aspectRatio="auto" className={className} interactive={false}>
      <ContentCardContent spacing="lg" align="center">
        <div className="mb-4 rounded-full bg-brand-subtle p-4 text-brand-primary">
          {icon}
        </div>
        <Typography variant="title" weight="semibold" className="mb-2">
          {title}
        </Typography>
        <Typography variant="bodySm" color="secondary" align="center">
          {description}
        </Typography>
      </ContentCardContent>
    </ContentCard>
  );
}
