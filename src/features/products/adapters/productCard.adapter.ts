import type { Product } from "../../../types/product.types";
import type { ProductCardModel } from "../presentation";
import { getDefaultVariant } from "../domain/";
import {
  createImageModel,
  createPriceModel,
  createRatingModel,
  getPrimaryImage,
} from "../domain";
import { createAvailabilityModel, createBadgeModels } from "../presentation";



export function adaptProductCard(product: Product): ProductCardModel {
  const variant = getDefaultVariant(product);
  const _image = createImageModel(getPrimaryImage(variant?.images));
  const image = (_image && { src: _image.src ?? "", alt: _image.alt ?? "" }) as any;

  const _price = createPriceModel(variant);
  const price = (_price && { amount: (_price as any).amount ?? 0, formatted: (_price as any).formatted ?? "", isOnSale: (_price as any).isOnSale ?? false }) as any;

  const _rating = createRatingModel(product);
  const rating = (_rating && { value: (_rating as any).value ?? 0, count: (_rating as any).count ?? 0, formatted: (_rating as any).formatted ?? "" }) as any;

  const _availability = createAvailabilityModel(variant?.stock ?? 0) as any;
  // normalize status strings (e.g. "in-stock" -> "inStock")
  const availability = {
    ..._availability,
    status: _availability?.status === "in-stock" ? "inStock" : _availability?.status,
  } as any;

  return {
    id: product.id,
    slug: product.slug,
    title: product.name,
    brand: product.brand?.name,
    image: image || { src: "", alt: "" },
    price: price || { amount: 0, formatted: "", isOnSale: false },
    rating: rating || { value: 0, count: 0, formatted: "" },
    availability: availability,
    badges: createBadgeModels(product, variant),
  } as ProductCardModel;
}
