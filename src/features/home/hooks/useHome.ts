import { featuredProductsData } from "../../../config/storefront/featuredProducts.data";
import { featuredCollectionsData } from "../../../config/storefront/featuredCollections.data";

export function useHome() {
  return {
    loading: false,
    error: null,
    data: {
      featuredProducts: featuredProductsData,
      collections: featuredCollectionsData,
    },
  };
}
