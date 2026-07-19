import { featuredProductsData } from "../../../config/storefront/featuredProducts.data";
import { featuredCollectionsData } from "../../../config/storefront/featuredCollections.data";
import { featuredBrandsData } from "../../../config/storefront/featuredBrands.data";

export function useHome() {
  return {
    loading: false,
    error: null,
    featuredProducts: featuredProductsData,
    collections: featuredCollectionsData,
    brands: featuredBrandsData,
  };
}
