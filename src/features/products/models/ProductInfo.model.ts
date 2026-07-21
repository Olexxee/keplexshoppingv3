export type ProductAvailabilityStatus =
  | "in-stock"
  | "low-stock"
  | "out-of-stock";

export interface ProductAvailabilityModel {
  status: ProductAvailabilityStatus;
  label: string;
}

export interface ProductPriceModel {
  current: number;
  compareAt?: number;
}

export interface ProductInfoModel {
  brand?: string;

  title: string;

  shortDescription?: string;

  sku?: string;

  rating: number;

  reviewCount: number;

  availability: ProductAvailabilityModel;

  price: ProductPriceModel;
}
