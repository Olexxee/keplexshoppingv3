import type { CatalogViewMode } from "./CatalogToolbar.types";

export interface ViewModeControlProps {
  value: CatalogViewMode;

  onChange(view: CatalogViewMode): void;
}
