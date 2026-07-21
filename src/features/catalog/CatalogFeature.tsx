import { Root, Content } from "./CatalogFeature.styles";

import { CatalogToolbar } from "./components/CatalogToolbar";
import { CatalogContent } from "./components/CatalogContent";

import type { CatalogFeatureProps } from "./CatalogFeature.types";

export function CatalogFeature({ presentation }: CatalogFeatureProps) {
  return (
    <Root>
      <CatalogToolbar toolbar={presentation.toolbar} />

      <Content>
        <CatalogContent presentation={presentation} />
      </Content>
    </Root>
  );
}
