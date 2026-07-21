import { forwardRef } from "react";
import { Minus, Plus } from "lucide-react";
import type { QuantitySelectorProps } from "./QuantitySelector.types";
import {
  clampQuantity,
  incrementQuantity,
  decrementQuantity,
} from "./QuantitySelector.utils";

import { Root, ActionButton, QuantityInput } from "./QuantitySelector.styles";

export const QuantitySelector = forwardRef<
  HTMLInputElement,
  QuantitySelectorProps
>(
  (
    { value = 1, min = 1, max = 999, step = 1, disabled, className, onChange },
    ref,
  ) => {
    const handleChange = (next: number) => {
      onChange?.(clampQuantity(next, min, max));
    };

    return (
      <Root className={className}>
        <ActionButton
          type="button"
          disabled={disabled || value <= min}
          onClick={() => handleChange(decrementQuantity(value, step, min, max))}
        >
          <Minus size={16} />
        </ActionButton>

        <QuantityInput
          ref={ref}
          type="number"
          value={value}
          min={min}
          max={max}
          step={step}
          disabled={disabled}
          onChange={(e) => handleChange(Number(e.target.value))}
        />

        <ActionButton
          type="button"
          disabled={disabled || value >= max}
          onClick={() => handleChange(incrementQuantity(value, step, min, max))}
        >
          <Plus size={16} />
        </ActionButton>
      </Root>
    );
  },
);

QuantitySelector.displayName = "QuantitySelector";
