import type { CatalogToolbarModel } from "../../../features/catalog/models";

export interface CatalogToolbarProps {
  toolbar: CatalogToolbarModel;

  onSearch?: (value: string) => void;

  onCategoryChange?: (value: string) => void;

  onSortChange?: (value: string) => void;

  onPageSizeChange?: (value: string) => void;
}
