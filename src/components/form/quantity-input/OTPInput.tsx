import React, { useRef, useEffect } from "react";
import { cn } from "../../../lib/cn";

interface OTPInputProps {
  length?: number;
  value?: string;
  onChange?: (value: string) => void;
  onComplete?: (value: string) => void;
  className?: string;
  disabled?: boolean;
}

export const OTPInput = ({
  length = 6,
  value = "",
  onChange,
  onComplete,
  className,
  disabled,
}: OTPInputProps) => {
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
  const [values, setValues] = React.useState<string[]>(
    value
      .split("")
      .slice(0, length)
      .concat(Array(length - value.length).fill("")),
  );

  useEffect(() => {
    const newValues = value.split("").slice(0, length);
    while (newValues.length < length) newValues.push("");
    setValues(newValues);
  }, [value, length]);

  const focusInput = (index: number) => {
    inputRefs.current[index]?.focus();
  };

  const handleChange = (index: number, val: string) => {
    if (val.length > 1) {
      const chars = val.split("").slice(0, length);
      const newValues = [...values];
      chars.forEach((char, i) => {
        if (index + i < length) {
          newValues[index + i] = char;
        }
      });
      setValues(newValues);
      const finalValue = newValues.join("");
      onChange?.(finalValue);
      if (finalValue.length === length) {
        onComplete?.(finalValue);
      }
      const nextIndex = Math.min(index + chars.length, length - 1);
      focusInput(nextIndex);
      return;
    }

    const newValues = [...values];
    newValues[index] = val;
    setValues(newValues);
    const finalValue = newValues.join("");
    onChange?.(finalValue);

    if (val && index < length - 1) {
      focusInput(index + 1);
    }

    if (finalValue.length === length) {
      onComplete?.(finalValue);
    }
  };

  const handleKeyDown = (
    index: number,
    e: React.KeyboardEvent<HTMLInputElement>,
  ) => {
    if (e.key === "Backspace" && !values[index] && index > 0) {
      focusInput(index - 1);
    }
    if (e.key === "ArrowLeft" && index > 0) {
      focusInput(index - 1);
    }
    if (e.key === "ArrowRight" && index < length - 1) {
      focusInput(index + 1);
    }
  };

  const handlePaste = (e: React.ClipboardEvent) => {
    e.preventDefault();
    const paste = e.clipboardData.getData("text").slice(0, length);
    const newValues = paste.split("");
    while (newValues.length < length) newValues.push("");
    setValues(newValues);
    const finalValue = newValues.join("");
    onChange?.(finalValue);
    if (finalValue.length === length) {
      onComplete?.(finalValue);
    }
    focusInput(Math.min(paste.length, length - 1));
  };

  return (
    <div className={cn("flex gap-2", className)}>
      {Array.from({ length }).map((_, index) => (
        <input
          key={index}
          ref={(el) => {
            inputRefs.current[index] = el;
          }}
          type="text"
          inputMode="numeric"
          pattern="[0-9]*"
          maxLength={1}
          value={values[index] || ""}
          onChange={(e) =>
            handleChange(index, e.target.value.replace(/\D/g, ""))
          }
          onKeyDown={(e) => handleKeyDown(index, e)}
          onPaste={handlePaste}
          disabled={disabled}
          className={cn(
            "w-12 h-14 text-center text-xl font-semibold rounded-lg border border-border-primary",
            "focus:border-primary focus:ring-2 focus:ring-primary focus:outline-none",
            "transition-all duration-200",
            disabled && "opacity-50 cursor-not-allowed",
          )}
        />
      ))}
    </div>
  );
};
