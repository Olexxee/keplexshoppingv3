import type {
  AvailabilityModel,
  ImageModel,
  PriceModel,
  RatingModel,
  BadgeModel,
} from "../../../models/commerce";

export interface ProductCardModel {
  products: ProductCardModel[];
  id: string;

  slug: string;

  title: string;

  brand?: string;

  image?: ImageModel;

  price: PriceModel;

  rating: RatingModel;

  availability: AvailabilityModel;

  badges: BadgeModel[];
}
