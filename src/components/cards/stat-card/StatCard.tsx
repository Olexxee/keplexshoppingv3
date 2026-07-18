import * as React from "react";
import { Typography } from "@/components/ui/Typography";
import {
  ContentCard,
  ContentCardContent,
} from "@/components/commerce/content-card";
import type { StatCardProps } from "./StatCard.types";

export function StatCard({
  value,
  label,
  description,
  className,
}: StatCardProps) {
  return (
    <ContentCard aspectRatio="auto" className={className} interactive={false}>
      <ContentCardContent spacing="lg" align="center">
        <Typography
          variant="display"
          weight="bold"
          color="brand"
          className="mb-1"
        >
          {value}
        </Typography>
        <Typography variant="title" weight="semibold">
          {label}
        </Typography>
        {description && (
          <Typography variant="bodySm" color="secondary" className="mt-1">
            {description}
          </Typography>
        )}
      </ContentCardContent>
    </ContentCard>
  );
}
