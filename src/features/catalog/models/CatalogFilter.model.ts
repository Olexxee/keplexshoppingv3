export interface CatalogFilterModel {
  search?: string;

  categoryId?: string;

  brandId?: string;

  collectionId?: string;

  minPrice?: number;

  maxPrice?: number;

  sortBy?: string;

  sortOrder?: "asc" | "desc";

  page: number;

  limit: number;
}
