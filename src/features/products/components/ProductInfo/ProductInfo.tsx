import { Root, Brand, Title, Description } from "./ProductInfo.styles";
import type { ProductInfoProps } from "./ProductInfo.types";

export function ProductInfo({ info, className }: ProductInfoProps) {
  return (
    <Root className={className}>
      {info.brand && <Brand>{info.brand}</Brand>}

      <Title>{info.title}</Title>

      {info.rating != null && <div>Rating: {info.rating}</div>}

      {info.price != null && <div>Price: {info.price}</div>}

      {info.availability != null && (
        <div>Availability: {info.availability}</div>
      )}

      {info.shortDescription && (
        <Description>{info.shortDescription}</Description>
      )}
    </Root>
  );
}
