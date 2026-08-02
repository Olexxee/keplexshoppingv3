import type { StorefrontSort } from "../../storefront";

export interface SortControlProps {
  value: StorefrontSort;
  onChange(sort: StorefrontSort): void;
}
