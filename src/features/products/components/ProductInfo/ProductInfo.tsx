import { ProductPrice } from "../../../../components/commerce/price/ProductPrice";
import { RatingStars } from "../../../../components/commerce/rating/ProductRating/ProductRating";
import { Root, Brand, Title, Description, Meta } from "./ProductInfo.styles";
import type { ProductInfoProps } from "./ProductInfo.types";


export function ProductInfo({ info, className }: ProductInfoProps) {
  const ratingProps = { rating: info.rating } as any;
  const priceValue = info.price as unknown as number;

  return (
    <Root className={className}>
      {info.brand && <Brand>{info.brand}</Brand>}

      <Title>{info.title}</Title>

      <Meta>
        <RatingStars {...ratingProps} />

        <span>{info.availability.label}</span>
      </Meta>

      <ProductPrice price={priceValue} />

      {info.shortDescription && (
        <Description>{info.shortDescription}</Description>
      )}
    </Root>
  );
}
