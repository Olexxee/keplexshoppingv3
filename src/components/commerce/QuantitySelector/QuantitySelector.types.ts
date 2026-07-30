export interface QuantitySelectorProps {
  quantity: number;

  min?: number;

  max: number;

  onChange?(quantity: number): void;
}
