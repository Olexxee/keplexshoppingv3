import type { ProductGridModel } from "./ProductGrid.model";
import type { PaginationModel } from "./Pagination.model";
import type { CatalogToolbarModel } from "./CatalogToolbar.model";
import type { ProductCardModel } from "../../products/presentation";
import type { CategoryCardModel } from "./CategoryCard.model";
import type { CatalogHeroModel } from "./CatalogHero.model";


export interface CatalogPresentationModel {
  hero: CatalogHeroModel;
  toolbar: CatalogToolbarModel;
  product: ProductCardModel;
  categories: CategoryCardModel[];
  grid: ProductGridModel;
  pagination: PaginationModel;
}
