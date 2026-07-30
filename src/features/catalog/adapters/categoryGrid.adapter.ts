import type { Category } from "../../../types/catalog.types";
import type { CategoryGridModel } from "../models";
import { adaptCategoryCard } from "./categoryCard.adapter";



export function adaptCategoryGrid(categories: Category[]): CategoryGridModel {
  return {
    title: "Shop by Category",

    categories: categories.map(adaptCategoryCard),
  };
}
