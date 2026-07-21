import {
  ActionsContainer,
  QuickViewWrapper,
  WishlistButtonWrapper,
} from "./ProductCard.styles";
import { WishlistButton } from "../../cards/actions/WishlistButton";
import { QuickViewButton } from "../../cards/actions/QuickViewButton";
import type { ProductCardActionsProps } from "./ProductCardActions.types";



export function ProductCardActions({
  product,
  isWishlisted,
  onWishlist,
  onQuickView,
}: ProductCardActionsProps) {
  return (
    <ActionsContainer>
      <WishlistButtonWrapper>
        <WishlistButton
          active={isWishlisted}
          onClick={() => {
            onWishlist?.(product);
          }}
        />
      </WishlistButtonWrapper>

      <QuickViewWrapper>
        <QuickViewButton
          onClick={() => {
            onQuickView?.(product);
          }}
        />
      </QuickViewWrapper>
    </ActionsContainer>
  );
}