import React, { useRef } from "react";
import { cn } from "../../../lib/cn";
import { Button } from "../../ui/actions/button/Button";
import { Typography } from "../../typography/Typography";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface ProductRowProps {
  title?: string;
  children: React.ReactNode;
  className?: string;
  scrollable?: boolean;
  showArrows?: boolean;
  onPrev?: () => void;
  onNext?: () => void;
  titleSize?: "h2" | "h3" | "title";
}

export const ProductRow = ({
  title,
  children,
  className,
  scrollable = false,
  showArrows = false,
  titleSize = "h2",
}: ProductRowProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!containerRef.current) return;
    const scrollAmount = containerRef.current.clientWidth * 0.8;
    containerRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <div className={cn("space-y-4", className)}>
      {title && (
        <div className="flex items-center justify-between">
          <Typography variant={titleSize} weight="semibold">
            {title}
          </Typography>
          {showArrows && (
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => scroll("left")}
                className="p-2"
              >
                <ChevronLeft size={16} />
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => scroll("right")}
                className="p-2"
              >
                <ChevronRight size={16} />
              </Button>
            </div>
          )}
        </div>
      )}
      <div
        ref={containerRef}
        className={cn(
          "flex gap-4",
          scrollable && "overflow-x-auto scrollbar-hide snap-x snap-mandatory",
          !scrollable && "flex-wrap",
        )}
      >
        {React.Children.map(children, (child) => (
          <div
            className={cn(scrollable && "snap-start flex-shrink-0 w-[280px]")}
          >
            {child}
          </div>
        ))}
      </div>
    </div>
  );
};
