import { Root, Results } from "./CatalogToolbar.styles";
import type { CatalogToolbarProps } from "./CatalogToolbar.types";

export function CatalogToolbar({ toolbar }: CatalogToolbarProps) {
  return (
    <Root>
      <Results>{toolbar.totalResults} Products</Results>
    </Root>
  );
}
