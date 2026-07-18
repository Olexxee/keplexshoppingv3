import { Card, CardBody } from "../cards/Card";
import { cn } from "../../../lib/cn";
import { Button } from "../../ui/actions/button/Button";
import { Typography } from "../../typography/Typography";
import { ProductPrice } from "./ProductPrice";
import { ProductRating } from "./ProductRating";
import { Badge } from "../../data-display/Badge";
import { Heart, ShoppingCart, Eye } from "lucide-react";
import { useState } from "react";

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  images: string[];
  rating?: number;
  reviews?: number;
  badge?: string;
  badgeVariant?: "default" | "success" | "warning" | "danger" | "info";
  inStock?: boolean;
  onAddToCart?: (id: string) => void;
  onWishlist?: (id: string) => void;
  onQuickView?: (id: string) => void;
  className?: string;
  size?: "sm" | "md" | "lg";
  variant?: "default" | "horizontal" | "compact";
  isWishlisted?: boolean;
}

export const ProductCard = ({
  id,
  name,
  price,
  originalPrice,
  images,
  rating,
  reviews,
  badge,
  badgeVariant = "default",
  inStock = true,
  onAddToCart,
  onWishlist,
  onQuickView,
  className,
  size = "md",
  variant = "default",
  isWishlisted = false,
}: ProductCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  const sizeClasses = {
    sm: "max-w-[200px]",
    md: "max-w-[280px]",
    lg: "max-w-[340px]",
  };

  const imageSizes = {
    sm: "h-48",
    md: "h-64",
    lg: "h-80",
  };

  // Horizontal variant
  if (variant === "horizontal") {
    return (
      <Card className={cn("flex gap-4 p-4", className)} interactive={false}>
        <div className="relative flex-shrink-0 w-32 h-32 rounded-lg overflow-hidden">
          <img
            src={images[0]}
            alt={name}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex-1 flex flex-col">
          <Typography variant="bodySm" weight="medium" className="line-clamp-2">
            {name}
          </Typography>
          <div className="mt-1">
            <ProductPrice
              amount={price}
              originalPrice={originalPrice}
              size="sm"
            />
          </div>
          {rating && (
            <ProductRating
              rating={rating}
              totalReviews={reviews || 0}
              size="sm"
            />
          )}
          <div className="flex items-center gap-2 mt-2">
            <Button
              size="sm"
              className="flex-1"
              onClick={() => onAddToCart?.(id)}
              disabled={!inStock}
            >
              {inStock ? "Add to Cart" : "Out of Stock"}
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => onWishlist?.(id)}
              className="px-2"
            >
              <Heart
                className={cn(
                  "w-4 h-4",
                  isWishlisted && "fill-red-500 text-red-500",
                )}
              />
            </Button>
          </div>
        </div>
      </Card>
    );
  }

  // Compact variant
  if (variant === "compact") {
    return (
      <div
        className={cn(
          "flex items-center gap-3 p-2 rounded-lg hover:bg-muted/50 transition-colors",
          className,
        )}
      >
        <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
          <img
            src={images[0]}
            alt={name}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex-1 min-w-0">
          <Typography variant="bodySm" weight="medium" className="truncate">
            {name}
          </Typography>
          <ProductPrice amount={price} size="sm" />
        </div>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => onAddToCart?.(id)}
          disabled={!inStock}
          className="flex-shrink-0"
        >
          <ShoppingCart size={16} />
        </Button>
      </div>
    );
  }

  // Default variant
  return (
    <Card
      className={cn(
        "group transition-all duration-300",
        sizeClasses[size],
        className,
      )}
      interactive
      padding="none"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <CardBody className="p-0">
        {/* Image */}
        <div className="relative overflow-hidden">
          <div className={cn("relative overflow-hidden", imageSizes[size])}>
            <img
              src={images[currentImage]}
              alt={name}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            {images.length > 1 && isHovered && (
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
                {images.map((_, index) => (
                  <button
                    key={index}
                    className={cn(
                      "w-2 h-2 rounded-full transition-colors",
                      currentImage === index ? "bg-white" : "bg-white/50",
                    )}
                    onClick={(e) => {
                      e.stopPropagation();
                      setCurrentImage(index);
                    }}
                  />
                ))}
              </div>
            )}
          </div>

          {/* Badge */}
          {badge && (
            <div className="absolute top-2 left-2">
              <Badge variant={badgeVariant} size="sm">
                {badge}
              </Badge>
            </div>
          )}

          {/* Stock badge */}
          {!inStock && (
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
              <Badge variant="danger" size="lg">
                Out of Stock
              </Badge>
            </div>
          )}

          {/* Action buttons - shown on hover */}
          {inStock && (
            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
              <Button
                variant="secondary"
                size="sm"
                className="shadow-lg"
                onClick={() => onQuickView?.(id)}
              >
                <Eye size={16} className="mr-1" />
                Quick View
              </Button>
              <Button
                variant="secondary"
                size="sm"
                className="shadow-lg"
                onClick={() => onAddToCart?.(id)}
              >
                <ShoppingCart size={16} className="mr-1" />
                Add to Cart
              </Button>
            </div>
          )}

          {/* Wishlist button */}
          <button
            onClick={() => onWishlist?.(id)}
            className="absolute top-2 right-2 p-2 bg-white/90 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity hover:scale-110"
          >
            <Heart
              className={cn(
                "w-4 h-4 transition-colors",
                isWishlisted ? "fill-red-500 text-red-500" : "text-gray-600",
              )}
            />
          </button>
        </div>

        {/* Content */}
        <div className="p-4">
          <Typography
            variant="bodySm"
            weight="medium"
            className="line-clamp-2 mb-1"
          >
            {name}
          </Typography>
          <div className="flex items-center justify-between">
            <ProductPrice
              amount={price}
              originalPrice={originalPrice}
              size="sm"
            />
            {rating && (
              <div className="flex items-center gap-1">
                <ProductRating
                  rating={rating}
                  totalReviews={reviews || 0}
                  size="sm"
                />
              </div>
            )}
          </div>
        </div>
      </CardBody>
    </Card>
  );
};
