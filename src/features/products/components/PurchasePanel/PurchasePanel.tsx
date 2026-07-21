import { Root } from "./PurchasePanel.styles";
import type { PurchasePanelProps } from "./PurchasePanel.types";
import { VariantSelector } from "../VariantSelector/VariantSelector";
import { ShippingInfo } from "../ShippingInfo/ShippingInfo";
import { StockInfo } from "../StockInfo/StockInfo";
import { QuantitySelector } from "../../../../components/commerce/QuantitySelector";


export function PurchasePanel({ purchase, className }: PurchasePanelProps) {
  return (
    <Root className={className}>
      {purchase.hasVariants && <VariantSelector purchase={purchase} />}
      <QuantitySelector
        value={purchase.quantity}
        min={purchase.minQuantity}
        max={purchase.maxQuantity}
      />
      <StockInfo purchase={purchase} />
      <ShippingInfo />
    </Root>
  );
}
