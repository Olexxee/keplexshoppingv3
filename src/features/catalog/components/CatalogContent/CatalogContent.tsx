import { Root } from "./CatalogContent.styles";
import { CatalogGrid } from "../CatalogGrid";

import type { CatalogContentProps } from "./CatalogContent.types";

export function CatalogContent({ presentation }: CatalogContentProps) {
  return (
    <Root>
      <CatalogGrid grid={presentation.grid} />
    </Root>
  );
}
