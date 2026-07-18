import { useState, useRef } from "react";
import { cn } from "../../../lib/cn";
import { Button } from "../../ui/actions/button/Button";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface ProductThumbnailStripProps {
  images: string[];
  selectedIndex?: number;
  onSelect?: (index: number) => void;
  className?: string;
  direction?: "horizontal" | "vertical";
  size?: "sm" | "md" | "lg";
}

export const ProductThumbnailStrip = ({
  images,
  selectedIndex = 0,
  onSelect,
  className,
  direction = "horizontal",
  size = "md",
}: ProductThumbnailStripProps) => {
  const [currentIndex, setCurrentIndex] = useState(selectedIndex);
  const scrollRef = useRef<HTMLDivElement>(null);

  const sizeClasses = {
    sm: "w-16 h-16",
    md: "w-20 h-20",
    lg: "w-24 h-24",
  };

  const handleSelect = (index: number) => {
    setCurrentIndex(index);
    onSelect?.(index);
  };

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const scrollAmount = direction === "left" ? -100 : 100;
    scrollRef.current.scrollBy({
      left: scrollAmount,
      behavior: "smooth",
    });
  };

  if (direction === "vertical") {
    return (
      <div className={cn("relative", className)}>
        <div className="flex flex-col gap-2 max-h-[400px] overflow-y-auto">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => handleSelect(index)}
              className={cn(
                "flex-shrink-0 rounded-lg overflow-hidden border-2 transition-all",
                sizeClasses[size],
                currentIndex === index
                  ? "border-primary shadow-md"
                  : "border-transparent hover:border-muted",
              )}
            >
              <img
                src={image}
                alt={`Thumbnail ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className={cn("relative", className)}>
      <div
        ref={scrollRef}
        className="flex gap-2 overflow-x-auto scrollbar-hide"
      >
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => handleSelect(index)}
            className={cn(
              "flex-shrink-0 rounded-lg overflow-hidden border-2 transition-all",
              sizeClasses[size],
              currentIndex === index
                ? "border-primary shadow-md"
                : "border-transparent hover:border-muted",
            )}
          >
            <img
              src={image}
              alt={`Thumbnail ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>
      {images.length > 4 && (
        <>
          <Button
            variant="secondary"
            size="sm"
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 p-1 rounded-full shadow-lg"
          >
            <ChevronLeft size={16} />
          </Button>
          <Button
            variant="secondary"
            size="sm"
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 p-1 rounded-full shadow-lg"
          >
            <ChevronRight size={16} />
          </Button>
        </>
      )}
    </div>
  );
};
