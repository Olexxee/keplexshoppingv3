export interface PaginationModel {
  page: number;

  totalPages: number;

  totalItems: number;

  canGoNext: boolean;

  canGoPrevious: boolean;
}
