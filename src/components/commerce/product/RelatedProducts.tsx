import { cn } from "../../../lib/cn";
import { ProductRow } from "./ProductRow";
import { ProductCard } from "./ProductCard";
import { Typography } from "../../typography/Typography";

interface RelatedProduct {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  rating?: number;
  reviews?: number;
  inStock?: boolean;
}

interface RelatedProductsProps {
  products: RelatedProduct[];
  title?: string;
  className?: string;
  onAddToCart?: (id: string) => void;
  onWishlist?: (id: string) => void;
  onQuickView?: (id: string) => void;
}

export const RelatedProducts = ({
  products,
  title = "Related Products",
  className,
  onAddToCart,
  onWishlist,
  onQuickView,
}: RelatedProductsProps) => {
  if (products.length === 0) return null;

  return (
    <div className={cn("space-y-4", className)}>
      <Typography variant="h2" weight="semibold">
        {title}
      </Typography>
      <ProductRow scrollable showArrows>
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
      </ProductRow>
    </div>
  );
};
