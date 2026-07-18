export function clamp(value: number, min?: number, max?: number) {
  if (min !== undefined) value = Math.max(value, min);
  if (max !== undefined) value = Math.min(value, max);
  return value;
}

export function round(value: number, precision = 0) {
  return Number(value.toFixed(precision));
}
