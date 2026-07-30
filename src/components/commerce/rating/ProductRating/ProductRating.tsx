import { Star } from "lucide-react";
import { Stars } from "./ProductRating.styles";

interface RatingStarsProps {
  value: number;
  size: "sm" | "md" | "lg";
}

export function RatingStars({ value, size }: RatingStarsProps) {
  const filled = Math.floor(value);

  const iconSize = {
    sm: 16,
    md: 18,
    lg: 20,
  }[size];

  return (
    <Stars>
      {Array.from({ length: 5 }).map((_, index) => (
        <Star
          key={index}
          size={iconSize}
          fill={index < filled ? "currentColor" : "none"}
        />
      ))}
    </Stars>
  );
}

export const Rating = RatingStars;