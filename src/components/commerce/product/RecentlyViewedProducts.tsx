import { cn } from "../../../lib/cn";
import { ProductRow } from "./ProductRow";
import { ProductCard } from "./ProductCard";

interface RecentlyViewedProduct {
  id: string;
  name: string;
  price: number;
  image: string;
  viewedAt: Date;
}

interface RecentlyViewedProductsProps {
  products: RecentlyViewedProduct[];
  className?: string;
  maxItems?: number;
  onAddToCart?: (id: string) => void;
  onWishlist?: (id: string) => void;
  onQuickView?: (id: string) => void;
}

export const RecentlyViewedProducts = ({
  products,
  className,
  maxItems = 10,
  onAddToCart,
  onWishlist,
  onQuickView,
}: RecentlyViewedProductsProps) => {
  const displayProducts = products.slice(0, maxItems);

  if (displayProducts.length === 0) return null;

  return (
    <div className={cn("space-y-4", className)}>
      <ProductRow title="Recently Viewed" scrollable>
        {displayProducts.map((product) => (
          <ProductCard
            key={product.id}
            {...product}
            images={[product.image]}
            onAddToCart={onAddToCart}
            onWishlist={onWishlist}
            onQuickView={onQuickView}
          />
        ))}
      </ProductRow>
    </div>
  );
};
