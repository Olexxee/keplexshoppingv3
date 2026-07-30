import type { ProductHeroModel } from "../models/ProductHero.Model";
import type { ProductDescriptionModel } from "./ProductDescription.model";
import type { ProductSpecificationModel } from "./ProductSpecification.model";
import type { RelatedProductsModel } from "../models/RelatedProducts.model";
import type { ProductReviewsSectionModel } from "./ProductReviewsSectionModel";

export interface ProductPresentationModel {
  hero: ProductHeroModel;

  description: ProductDescriptionModel;

  specifications: ProductSpecificationModel;

  reviews: ProductReviewsSectionModel;

  relatedProducts: RelatedProductsModel;
}
