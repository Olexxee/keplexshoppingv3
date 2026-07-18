import { cn } from "../../../lib/cn";
import { Typography } from "../../typography/Typography";
import { ProductGrid } from "./ProductGrid";
import { ProductCard } from "./ProductCard";

interface RecommendedProduct {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  rating?: number;
  reviews?: number;
  inStock?: boolean;
  badge?: string;
}

interface RecommendedProductsProps {
  products: RecommendedProduct[];
  title?: string;
  className?: string;
  columns?: 2 | 3 | 4 | 5 | 6;
  onAddToCart?: (id: string) => void;
  onWishlist?: (id: string) => void;
  onQuickView?: (id: string) => void;
}

export const RecommendedProducts = ({
  products,
  title = "Recommended for You",
  className,
  columns = 4,
  onAddToCart,
  onWishlist,
  onQuickView,
}: RecommendedProductsProps) => {
  if (products.length === 0) return null;

  return (
    <div className={cn("space-y-4", className)}>
      <Typography variant="h2" weight="semibold">
        {title}
      </Typography>
      <ProductGrid columns={columns}>
        {products.map((product) => (
          <ProductCard
            key={product.id}
            {...product}
            images={[product.image]}
            onAddToCart={onAddToCart}
            onWishlist={onWishlist}
            onQuickView={onQuickView}
          />
        ))}
      </ProductGrid>
    </div>
  );
};
