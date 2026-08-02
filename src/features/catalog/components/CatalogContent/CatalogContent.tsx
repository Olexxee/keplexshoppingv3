import { CatalogToolbar } from "../../../../components/commerce/catalog-toolbar";
import { ProductGrid } from "../../../../components/commerce/product-grid";
import { Pagination } from "../../../../components/commerce/pagination";
import type { CatalogContentProps } from "./CatalogContent.types";

export function CatalogContent({ presentation }: CatalogContentProps) {
  return (
    <>
      <CatalogToolbar toolbar={presentation.toolbar} />

      <ProductGrid products={presentation.product.products} />

      <Pagination pagination={presentation.pagination} />
    </>
  );
}
