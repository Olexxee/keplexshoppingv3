import type { UseQueryResult } from "@tanstack/react-query";
import type { Product } from "../../types/product.types";
import type { ProductAggregate } from "./models";
import type {ProductPresentationModel} from "./presentation/ProductPresentation.model"

export interface UseProductResult {
  product?: Product;

  aggregate?: ProductAggregate;

  presentation?: ProductPresentationModel;

  isLoading: boolean;

  isFetching: boolean;

  error: unknown;

  refetch: UseQueryResult["refetch"];
}

export interface ProductFilters {
  search?: string;

  category?: string;

  brand?: string;

  collection?: string;

  page?: number;

  limit?: number;

  sort?: string;
}
