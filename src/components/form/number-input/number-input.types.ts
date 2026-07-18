import type { InputBaseProps } from "../input-base/InputBase";

export interface NumberInputProps extends Omit<
  InputBaseProps,
  "value" | "onChange" | "type" | "leftSlot" | "rightSlot" | "prefix" | "suffix"
> {
  value?: number;
  onValueChange?: (value: number | undefined) => void;
  step?: number;
  precision?: number;
  min?: number;
  max?: number;
  showStepper?: boolean;
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
}

export interface NumberDisplayProps {
  value?: number;
  precision?: number;
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
  className?: string;
  placeholder?: string;
}
