import type {
  AvailabilityModel,
  PriceModel,
  RatingModel,
} from "../../../models/commerce";

export type ProductAvailabilityStatus =
  | "in-stock"
  | "low-stock"
  | "out-of-stock";

export interface ProductInfoModel {
  brand?: string;

  title: string;

  shortDescription?: string;

  sku?: string;

  rating: RatingModel;

  availability: AvailabilityModel;

  price: PriceModel;
}
