import { Root, Button, Value } from "./QuantitySelector.styles";
import type { QuantitySelectorProps } from "./QuantitySelector.types";


export function QuantitySelector({
  quantity,
  min = 1,
  max,
  onChange,
}: QuantitySelectorProps) {
  const decrement = () => {
    if (quantity > min) {
      onChange?.(quantity - 1);
    }
  };

  const increment = () => {
    if (quantity < max) {
      onChange?.(quantity + 1);
    }
  };

  return (
    <Root>
      <Button onClick={decrement}>−</Button>

      <Value>{quantity}</Value>

      <Button onClick={increment}>+</Button>
    </Root>
  );
}
