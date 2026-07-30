import type { PaginationModel } from "../../../features/catalog/models";

export interface PaginationProps {
  pagination: PaginationModel;

  onPageChange?: (page: number) => void;
}
