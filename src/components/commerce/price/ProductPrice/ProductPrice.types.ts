export interface ProductPriceProps {
  price: number;
  compareAtPrice?: number;
  currency?: string;
  locale?: string;
  size?: "sm" | "md" | "lg" | "xl";
  showDiscount?: boolean;
  showSavings?: boolean;
  className?: string;
}
