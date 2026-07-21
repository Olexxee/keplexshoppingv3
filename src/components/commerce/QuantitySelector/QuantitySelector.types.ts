export interface QuantitySelectorProps {
  value?: number;
  min?: number;
  max?: number;
  step?: number;
  disabled?: boolean;
  className?: string;
  onChange?: (value: number) => void;
}
