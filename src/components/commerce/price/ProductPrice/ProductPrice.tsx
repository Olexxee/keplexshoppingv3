import { Typography } from "../../../typography";
import { SaleBadge } from "../../badges";
import {
  formatPrice,
  getDiscountPercentage,
  getSavings,
} from "./ProductPrice.utils";
import { DiscountWrapper, PriceRow, Wrapper, CompareAtPrice } from "./ProductPrice.styles";
import type { ProductPriceProps } from "./ProductPrice.types";


export function ProductPrice({
  price,
  compareAtPrice,
  currency = "USD",
  locale = "en-US",
  size = "md",
  showDiscount = true,
  showSavings = false,
  className,
}: ProductPriceProps) {
  const discount = getDiscountPercentage(price, compareAtPrice);
  const savings = getSavings(price, compareAtPrice);
  const variantMap = {
    sm: "bodySm",
    md: "body",
    lg: "title",
    xl: "h3",
  } as const;

  return (
    <Wrapper className={className}>
      <PriceRow>
        <Typography variant={variantMap[size]} weight="bold" color="primary">
          {formatPrice(price, currency, locale)}
        </Typography>

        {compareAtPrice && compareAtPrice > price && (
          <Typography variant="bodySm" color="muted" className="line-through">
            {formatPrice(compareAtPrice, currency, locale)}
          </Typography>
        )}

        {showDiscount && discount > 0 && (
          <DiscountWrapper>
            <SaleBadge percentage={discount} />
          </DiscountWrapper>
        )}
      </PriceRow>

      {showSavings && savings > 0 && (
        <Typography variant="bodySm" color="success">
          You save {formatPrice(savings, currency, locale)}
        </Typography>
      )}

      {compareAtPrice && (
        <CompareAtPrice variant="bodySm" color="muted">
          {formatPrice(compareAtPrice, currency, locale)}
        </CompareAtPrice>
      )}
    </Wrapper>
  );
}
