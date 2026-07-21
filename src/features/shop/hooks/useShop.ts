import { featuredProducts } from "../../../config/storefront/featuredProducts";

export function useShop() {
  return {
    loading: false,
    error: false,

    products: featuredProducts,

    total: featuredProducts.length,
    page: 1,
    pages: 1,
  };
}
