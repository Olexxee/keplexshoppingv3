import React, { useState } from "react";
import { cn } from "../../../lib/cn";
import { Button } from "../../ui/actions/button/Button";
import { ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";

interface ProductGalleryProps {
  images: string[];
  thumbnails?: string[];
  className?: string;
  aspectRatio?: "square" | "video" | "auto";
  onImageChange?: (index: number) => void;
}

export const ProductGallery = ({
  images,
  thumbnails = images,
  className,
  aspectRatio = "square",
  onImageChange,
}: ProductGalleryProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);
  const [zoomPosition, setZoomPosition] = useState({ x: 0, y: 0 });

  const aspectRatioClasses = {
    square: "aspect-square",
    video: "aspect-video",
    auto: "",
  };

  const handleImageChange = (index: number) => {
    setCurrentIndex(index);
    onImageChange?.(index);
  };

  const handlePrev = () => {
    const newIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    handleImageChange(newIndex);
  };

  const handleNext = () => {
    const newIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
    handleImageChange(newIndex);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isZoomed) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setZoomPosition({ x, y });
  };

  return (
    <div className={cn("space-y-4", className)}>
      {/* Main Image */}
      <div
        className={cn(
          "relative overflow-hidden rounded-lg bg-muted",
          aspectRatioClasses[aspectRatio],
        )}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsZoomed(true)}
        onMouseLeave={() => setIsZoomed(false)}
      >
        <img
          src={images[currentIndex]}
          alt={`Product image ${currentIndex + 1}`}
          className={cn(
            "w-full h-full object-cover transition-transform duration-200",
            isZoomed && "scale-150 cursor-zoom-out",
          )}
          style={
            isZoomed
              ? {
                  transformOrigin: `${zoomPosition.x}% ${zoomPosition.y}%`,
                }
              : undefined
          }
        />

        {/* Navigation Arrows */}
        {images.length > 1 && (
          <>
            <Button
              variant="secondary"
              size="sm"
              onClick={handlePrev}
              className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full shadow-lg"
            >
              <ChevronLeft size={20} />
            </Button>
            <Button
              variant="secondary"
              size="sm"
              onClick={handleNext}
              className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full shadow-lg"
            >
              <ChevronRight size={20} />
            </Button>
          </>
        )}

        {/* Zoom indicator */}
        <Button
          variant="secondary"
          size="sm"
          onClick={() => setIsZoomed(!isZoomed)}
          className="absolute bottom-2 right-2 p-2 rounded-full shadow-lg"
        >
          <ZoomIn size={16} />
        </Button>

        {/* Image counter */}
        <div className="absolute bottom-2 left-2 px-2 py-1 bg-black/50 text-white text-xs rounded">
          {currentIndex + 1} / {images.length}
        </div>
      </div>

      {/* Thumbnails */}
      {thumbnails.length > 1 && (
        <div className="flex gap-2 overflow-x-auto pb-2">
          {thumbnails.map((thumb, index) => (
            <button
              key={index}
              onClick={() => handleImageChange(index)}
              className={cn(
                "flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-colors",
                currentIndex === index
                  ? "border-primary"
                  : "border-transparent hover:border-muted",
              )}
            >
              <img
                src={thumb}
                alt={`Thumbnail ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
