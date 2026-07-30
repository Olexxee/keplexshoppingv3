export function isInStock(stock: number): boolean {
  return stock > 0;
}

export function isLowStock(stock: number, threshold: number): boolean {
  return stock > 0 && stock <= threshold;
}
