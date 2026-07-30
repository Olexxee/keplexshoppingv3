import { Image } from "../../image";
import {
  BestSellerBadge,
  LowStockBadge,
  NewBadge,
  OutOfStockBadge,
  SaleBadge,
} from "../badges";
import { ProductCardActions } from "./ProductCardActions";
import {
  BadgeContainer,
  ImageContainer,
  ImageOverlay,
} from "./ProductCard.styles";
import { COMMERCE_CONFIG } from "../../../config/commerce/commerce";
import type { ProductCardImageProps } from "./types/ProductCardImage.types";


type ProductCardImagePropsWithActions = ProductCardImageProps & {
  isWishlisted?: boolean;
  onWishlist?: () => void;
  onQuickView?: () => void;
};

export function ProductCardImage({
  product,
  isWishlisted,
  onWishlist,
  onQuickView,
}: ProductCardImagePropsWithActions) {
  const variant = product.variants[0];

  const image = variant?.images?.[0];

  const price = variant?.price ?? 0;

  const compareAtPrice = variant?.compareAtPrice;

  const stock = variant?.stock ?? 0;

  const isOnSale = compareAtPrice != null && compareAtPrice > price;

  const discountPercentage = isOnSale
    ? Math.round(((compareAtPrice - price) / compareAtPrice) * 100)
    : undefined;

  const isOutOfStock = stock <= 0;

  const isLowStock = stock > 0 && stock <= COMMERCE_CONFIG.LOW_STOCK_THRESHOLD;

  return (
    <ImageContainer>
      <Image
        src={image?.url ?? "/images/placeholders/product.webp"}
        alt={product.name}
        aspectRatio="square"
        fit="cover"
      />

      <ImageOverlay />

      <BadgeContainer>
        {product.isNew && <NewBadge />}

        {product.isBestSeller && <BestSellerBadge />}

        {isOnSale && <SaleBadge percentage={discountPercentage} />}

        {isOutOfStock ? (
          <OutOfStockBadge />
        ) : (
          isLowStock && <LowStockBadge remaining={stock} />
        )}
      </BadgeContainer>

      <ProductCardActions
        product={product}
        isWishlisted={isWishlisted}
        onWishlist={onWishlist}
        onQuickView={onQuickView}
      />
    </ImageContainer>
  );
}
