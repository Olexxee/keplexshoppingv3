import { cn } from "../../lib/cn";
import { Star, StarHalf } from "lucide-react";

interface ReviewStarsProps {
  rating: number;
  totalReviews?: number;
  size?: "sm" | "md" | "lg";
  className?: string;
  showCount?: boolean;
  distribution?: Record<number, number>; // rating -> count
}

export const ReviewStars = ({
  rating,
  totalReviews,
  size = "md",
  className,
  showCount = true,
  distribution,
}: ReviewStarsProps) => {
  const sizeClasses = {
    sm: "w-3 h-3",
    md: "w-4 h-4",
    lg: "w-5 h-5",
  };

  const renderStars = () => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating - fullStars >= 0.5;

    for (let i = 1; i <= 5; i++) {
      if (i <= fullStars) {
        stars.push(
          <Star
            key={i}
            className={cn(sizeClasses[size], "text-yellow-400")}
            fill="currentColor"
          />,
        );
      } else if (i === fullStars + 1 && hasHalfStar) {
        stars.push(
          <StarHalf
            key={i}
            className={cn(sizeClasses[size], "text-yellow-400")}
            fill="currentColor"
          />,
        );
      } else {
        stars.push(
          <Star key={i} className={cn(sizeClasses[size], "text-muted")} />,
        );
      }
    }

    return stars;
  };

  const getPercentage = (count: number) => {
    if (!totalReviews) return 0;
    return (count / totalReviews) * 100;
  };

  return (
    <div className={cn("space-y-2", className)}>
      <div className="flex items-center gap-2">
        <div className="flex gap-0.5">{renderStars()}</div>
        {showCount && (
          <span className="text-sm text-muted-foreground">
            {rating.toFixed(1)} {totalReviews && `(${totalReviews} reviews)`}
          </span>
        )}
      </div>

      {distribution && totalReviews && (
        <div className="space-y-1">
          {[5, 4, 3, 2, 1].map((star) => {
            const count = distribution[star] || 0;
            const percentage = getPercentage(count);
            return (
              <div key={star} className="flex items-center gap-2">
                <span className="text-xs text-muted-foreground w-3">
                  {star}
                </span>
                <div className="flex-1 h-1.5 bg-muted rounded-full overflow-hidden">
                  <div
                    className="h-full bg-yellow-400 rounded-full transition-all duration-300"
                    style={{ width: `${percentage}%` }}
                  />
                </div>
                <span className="text-xs text-muted-foreground w-8 text-right">
                  {count}
                </span>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
