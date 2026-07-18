import * as React from "react";
import { Star } from "lucide-react";
import { Typography } from "@/components/ui/Typography";
import {
  ContentCard,
  ContentCardContent,
} from "@/components/commerce/content-card";
import type { TestimonialCardProps } from "./TestimonialCard.types";

export function TestimonialCard({
  avatar,
  name,
  company,
  rating = 5,
  testimonial,
  className,
}: TestimonialCardProps) {
  return (
    <ContentCard aspectRatio="auto" className={className} interactive={false}>
      <ContentCardContent spacing="lg">
        <div className="mb-4 flex items-center gap-4">
          {avatar && (
            <img
              src={avatar}
              alt={name}
              className="h-12 w-12 rounded-full object-cover"
            />
          )}
          <div>
            <Typography variant="body" weight="semibold">
              {name}
            </Typography>
            {company && (
              <Typography variant="caption" color="secondary">
                {company}
              </Typography>
            )}
          </div>
        </div>
        <div className="mb-3 flex gap-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={cn(
                "h-4 w-4",
                i < rating
                  ? "fill-brand-primary text-brand-primary"
                  : "text-border-primary",
              )}
            />
          ))}
        </div>
        <Typography
          variant="body"
          color="secondary"
          className="leading-relaxed italic"
        >
          "{testimonial}"
        </Typography>
      </ContentCardContent>
    </ContentCard>
  );
}
