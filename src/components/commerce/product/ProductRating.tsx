import { cn } from "../../../lib/cn";
import { Typography } from "../../typography/Typography";
import { Rating } from "../../data-display/Rating";

interface ProductRatingProps {
  rating: number;
  totalReviews: number;
  className?: string;
  size?: "sm" | "md" | "lg";
  showDistribution?: boolean;
  distribution?: Record<number, number>;
}

export const ProductRating = ({
  rating,
  totalReviews,
  className,
  size = "md",
  showDistribution = false,
  distribution,
}: ProductRatingProps) => {
  const typographyVariant = size === "sm" ? "bodySm" : "body";

  return (
    <div className={cn("space-y-2", className)}>
      <div className="flex items-center gap-3">
        <Rating value={rating} size={size} showValue={false} />
        <Typography variant={typographyVariant} weight="medium">
          {rating.toFixed(1)}
        </Typography>
        <Typography variant={typographyVariant} color="muted">
          ({totalReviews} reviews)
        </Typography>
      </div>
      {showDistribution && distribution && (
        <div className="space-y-1 max-w-sm">
          {[5, 4, 3, 2, 1].map((star) => {
            const count = distribution[star] || 0;
            const percentage =
              totalReviews > 0 ? (count / totalReviews) * 100 : 0;
            return (
              <div key={star} className="flex items-center gap-2">
                <Typography variant="caption" color="muted" className="w-4">
                  {star}
                </Typography>
                <div className="flex-1 h-1.5 bg-muted rounded-full overflow-hidden">
                  <div
                    className="h-full bg-yellow-400 rounded-full transition-all"
                    style={{ width: `${percentage}%` }}
                  />
                </div>
                <Typography
                  variant="caption"
                  color="muted"
                  className="w-8 text-right"
                >
                  {count}
                </Typography>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
