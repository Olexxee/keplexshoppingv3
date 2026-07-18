import { ProductPrice } from "../products/ProductPrice";

interface CatalogPriceProps {
  amount: number;
  compareAtPrice?: number;
  itemType: "PRODUCT" | "SERVICE";
}

export function CatalogPrice({
  amount,
  compareAtPrice,
  itemType,
}: CatalogPriceProps) {
  return (
    <div className="space-y-1">
      {itemType === "SERVICE" && (
        <span className="text-xs text-muted-foreground">Starting from</span>
      )}

      <ProductPrice amount={amount} originalPrice={compareAtPrice} />
    </div>
  );
}
