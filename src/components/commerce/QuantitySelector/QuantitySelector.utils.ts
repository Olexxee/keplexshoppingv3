export const clampQuantity = (
  value: number,
  min: number,
  max: number,
): number => {
  return Math.min(Math.max(value, min), max);
};

export const incrementQuantity = (
  value: number,
  step: number,
  min: number,
  max: number,
): number => {
  return clampQuantity(value + step, min, max);
};

export const decrementQuantity = (
  value: number,
  step: number,
  min: number,
  max: number,
): number => {
  return clampQuantity(value - step, min, max);
};
