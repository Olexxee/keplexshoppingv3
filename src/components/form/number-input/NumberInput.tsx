import React from "react";
import { InputBase } from "../input-base/InputBase";
import { clamp, round } from "./number-input.utils";
import { NumberStepper } from "./NumberStepper";
import type { NumberInputProps } from "./number-input.types";

export const NumberInput = React.forwardRef<HTMLInputElement, NumberInputProps>(
  (
    {
      value,
      onValueChange,
      step = 1,
      precision = 0,
      min,
      max,
      showStepper = true,
      prefix,
      suffix,
      ...props
    },
    ref,
  ) => {
    const increment = () => {
      const next = clamp(round((value ?? 0) + step, precision), min, max);
      onValueChange?.(next);
    };

    const decrement = () => {
      const next = clamp(round((value ?? 0) - step, precision), min, max);
      onValueChange?.(next);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const next = e.target.value;
      onValueChange?.(next === "" ? undefined : Number(next));
    };

    return (
      <InputBase
        ref={ref}
        type="number"
        value={value ?? ""}
        leftSlot={prefix}
        rightSlot={
          <div className="flex items-center gap-2">
            {suffix}
            {showStepper && (
              <NumberStepper onIncrement={increment} onDecrement={decrement} />
            )}
          </div>
        }
        onChange={handleChange}
        {...props}
      />
    );
  },
);

NumberInput.displayName = "NumberInput";
