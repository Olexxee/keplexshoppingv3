import type { AvailabilityModel } from "./AvailabilityModel";
import type { BadgeModel } from "./BadgeModel";
import type { ImageModel } from "./ImageModel";
import type { PriceModel } from "./PriceModel";
import type { RatingModel } from "../RatingModel";

export interface ProductCardModel {
  id: string;

  slug: string;

  sku: string;

  name: string;

  brand?: string;

  shortDescription?: string;

  image: ImageModel;

  price: PriceModel;

  rating: RatingModel;

  availability: AvailabilityModel;

  badges: BadgeModel[];

  canAddToCart: boolean;

  isWishlisted?: boolean;
}
