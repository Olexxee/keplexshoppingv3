import React from "react";
import { round } from "./number-input.utils";
import type { NumberDisplayProps } from "./number-input.types";

export const NumberDisplay = React.forwardRef<
  HTMLDivElement,
  NumberDisplayProps
>(
  (
    {
      value,
      precision = 0,
      prefix,
      suffix,
      className = "",
      placeholder = "-",
      ...props
    },
    ref,
  ) => {
    const displayValue =
      value !== undefined ? round(value, precision) : placeholder;

    return (
      <div
        ref={ref}
        className={`flex items-center gap-2 ${className}`}
        {...props}
      >
        {prefix && <span className="text-gray-500">{prefix}</span>}
        <span className="font-medium">{displayValue}</span>
        {suffix && <span className="text-gray-500">{suffix}</span>}
      </div>
    );
  },
);

NumberDisplay.displayName = "NumberDisplay";
