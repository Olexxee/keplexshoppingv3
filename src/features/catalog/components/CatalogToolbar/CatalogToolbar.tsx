import { Root, Results } from "./CatalogToolbar.styles";
import type { CatalogToolbarProps } from "./CatalogToolbar.types";

type Props = CatalogToolbarProps & {
  totalResults: number;
};

export function CatalogToolbar({ totalResults }: Props) {
  return (
    <Root>
      <Results>{totalResults} Products</Results>
    </Root>
  );
}
