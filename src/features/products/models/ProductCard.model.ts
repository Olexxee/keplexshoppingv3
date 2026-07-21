import type {
  AvailabilityModel,
  ImageModel,
  PriceModel,
  RatingModel,
} from "../../../models/commerce";

export interface ProductCardModel {
  id: string;

  slug: string;

  title: string;

  brand?: string;

  image?: ImageModel;

  price: PriceModel;

  rating: RatingModel;

  availability: AvailabilityModel;

  isNew: boolean;

  isBestSeller: boolean;
}
