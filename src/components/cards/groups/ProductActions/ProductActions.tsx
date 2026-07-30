import { AddToCartButton } from "../../actions/AddToCartButton";
import { BuyNowButton } from "../../actions/BuyNowButton/BuyNowButton";
import { QuantitySelector } from "../../../commerce/quantitySelector";
import { ButtonGroup, Root } from "./ProductActions.styles";
import type { ProductActionsProps } from "./ProductActions.types";

export function ProductActions({
  quantity = 1,
  showQuantity = true,
  showBuyNow = true,
  addToCartDisabled,
  buyNowDisabled,
  onQuantityChange,
  onAddToCart,
  onBuyNow,

  className,
}: ProductActionsProps) {
  return (
    <Root className={className}>
      {showQuantity && (
        <QuantitySelector value={quantity} onChange={onQuantityChange} />
      )}

      <ButtonGroup>
        <AddToCartButton disabled={addToCartDisabled} onClick={onAddToCart} />

        {showBuyNow && (
          <BuyNowButton disabled={buyNowDisabled} onClick={onBuyNow} />
        )}
      </ButtonGroup>
    </Root>
  );
}
