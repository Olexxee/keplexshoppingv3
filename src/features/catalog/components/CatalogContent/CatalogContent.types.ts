import type { CatalogPresentationModel } from "../../models";
import type { StorefrontActions } from "../../../storefront/storefront.types";

export interface CatalogContentProps {
  presentation: CatalogPresentationModel;
  actions: StorefrontActions;
}
