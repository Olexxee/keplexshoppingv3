export interface PriceModel {
  currency: string;

  amount: number;

  formatted: string;

  compareAtAmount?: number;

  formattedCompareAt?: string;

  discountAmount?: number;

  discountPercentage?: number;

  isOnSale: boolean;
}
