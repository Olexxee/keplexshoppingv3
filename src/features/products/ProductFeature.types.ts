import type { Product } from "../../types/product.types";
import type { Review } from "../../types/review.types";
import type { ProductPresentationModel } from "./models";

export interface ProductFilters {
  search?: string;

  category?: string;

  brand?: string;

  collection?: string;

  page?: number;

  limit?: number;

  sort?: string;
}

export interface AdaptProductParams {
  product: Product;

  reviews: Review[];

  relatedProducts: Product[];
}

export interface UseProductResult {
  product?: Product;

  presentation?: ProductPresentationModel;

  isLoading: boolean;

  isFetching: boolean;

  error: unknown;

  refetch: () => void;
}
