import { QuantitySelector } from "../../../../components/commerce/quantitySelector/QuantitySelector";
import { VariantSelector } from "../../../../components/commerce/selectors/VariantSelector/VariantSelector";
import { StockInfo } from "../../../../components/commerce/shared/StockInfo/StockInfo";
import { ShippingInfo } from "../../../../components/commerce/shared/ShippingInfo/ShippingInfo";
import {
  Root,
  Actions,
  AddToCartButton,
  BuyNowButton,
} from "./PurchasePanel.styles";
import type { PurchasePanelProps } from "./PurchasePanel.types";

export function PurchasePanel({
  purchase,
  quantity,
  selectedVariantId,
  onVariantChange,
  onQuantityChange,
  onAddToCart,
  onBuyNow,
}: PurchasePanelProps) {
  return (
    <Root>
      {purchase.hasVariants && (
        <VariantSelector
          purchase={purchase}
          selectedVariantId={selectedVariantId}
          onChange={onVariantChange}
        />
      )}

      <QuantitySelector
        quantity={quantity}
        max={purchase.stock}
        onChange={onQuantityChange}
      />

      <StockInfo
        availability={
          {
            ...purchase.availability,
            status: purchase.availability.status.replace(/-([a-z])/g, (_, c) =>
              c.toUpperCase(),
            ),
          } as any
        }
      />

      <ShippingInfo />

      <Actions>
        <AddToCartButton disabled={!purchase.canPurchase} onClick={onAddToCart}>
          Add to Cart
        </AddToCartButton>

        <BuyNowButton disabled={!purchase.canPurchase} onClick={onBuyNow}>
          Buy Now
        </BuyNowButton>
      </Actions>
    </Root>
  );
}
