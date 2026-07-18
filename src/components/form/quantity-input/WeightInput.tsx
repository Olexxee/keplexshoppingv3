import React from "react";
import { cn } from "../../../lib/cn";
import { InputBase } from "../input-base";

interface WeightInputProps {
  value?: number;
  onChange?: (value: number) => void;
  unit?: "kg" | "g" | "lb";
  min?: number;
  max?: number;
  step?: number;
  precision?: number;
  className?: string;
  disabled?: boolean;
  label?: string;
}

export const WeightInput = React.forwardRef<HTMLInputElement, WeightInputProps>(
  (
    {
      value,
      onChange,
      unit = "kg",
      min = 0,
      max = 1000,
      step = 0.1,
      precision = 1,
      className,
      disabled,
      label,
      ...props
    },
    ref,
  ) => {

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const val = parseFloat(e.target.value);
      if (!isNaN(val) && val >= min && val <= max) {
        onChange?.(parseFloat(val.toFixed(precision)));
      }
    };

    return (
      <div className={cn("space-y-1", className)}>
        {label && (
          <label className="text-sm font-medium text-foreground">{label}</label>
        )}
        <div className="relative">
          <InputBase
            ref={ref}
            type="number"
            value={value ?? ""}
            onChange={handleChange}
            min={min}
            max={max}
            step={step}
            disabled={disabled}
            className="pr-16"
            {...props}
          />
          <span className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-muted-foreground pointer-events-none">
            {unit}
          </span>
        </div>
      </div>
    );
  },
);

WeightInput.displayName = "WeightInput";
