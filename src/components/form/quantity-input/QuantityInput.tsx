import React from "react";
import { Minus, Plus } from "lucide-react";
import { cn } from "../../../lib/cn";
import { InputBase } from "../input-base";

interface QuantityInputProps {
  value?: number;
  onChange?: (value: number) => void;
  min?: number;
  max?: number;
  step?: number;
  className?: string;
  disabled?: boolean;
}

export const QuantityInput = React.forwardRef<
  HTMLInputElement,
  QuantityInputProps
>(
  (
    { value = 1, onChange, min = 1, max = 999, step = 1, className, disabled },
    ref,
  ) => {
    const handleChange = (newValue: number) => {
      const clamped = Math.min(Math.max(newValue, min), max);
      onChange?.(clamped);
    };

    const increment = () => handleChange(value + step);
    const decrement = () => handleChange(value - step);

    return (
      <div className={cn("flex items-center gap-2", className)}>
        <button
          type="button"
          onClick={decrement}
          disabled={disabled || value <= min}
          className="p-2 rounded-lg border border-border-primary hover:bg-background-secondary disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          <Minus size={16} />
        </button>
        <InputBase
          ref={ref}
          type="number"
          value={value}
          onChange={(e) => handleChange(Number(e.target.value))}
          min={min}
          max={max}
          step={step}
          disabled={disabled}
          className="w-16 text-center [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
        />
        <button
          type="button"
          onClick={increment}
          disabled={disabled || value >= max}
          className="p-2 rounded-lg border border-border-primary hover:bg-background-secondary disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          <Plus size={16} />
        </button>
      </div>
    );
  },
);

QuantityInput.displayName = "QuantityInput";
