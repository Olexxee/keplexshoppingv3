import type { ProductAggregate } from "../models";
import { adaptProductHero, adaptProductReviews, adaptRelatedProducts } from ".";
import type{ProductPresentationModel} from "../presentation/ProductPresentation.model"
import { adaptProductDescription } from "./productDescription.adapter";
import { adaptProductSpecifications } from "./productSpecification.adapter";

export function adaptProduct(
  aggregate: ProductAggregate,
): ProductPresentationModel {
  const { product, reviews, relatedProducts } = aggregate;

  return {
    hero: adaptProductHero(product),
    description: adaptProductDescription(product),
    specifications: adaptProductSpecifications(product),
    reviews: adaptProductReviews(reviews),
    relatedProducts: adaptRelatedProducts(relatedProducts),
  };
}
