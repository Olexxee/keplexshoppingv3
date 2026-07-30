import type { ImageModel } from "../../../models/commerce";

export interface CategoryCardModel {
  id: string;

  slug: string;

  title: string;

  image?: ImageModel;

  description?: string;

  productCount?: number;

  isActive: boolean;
}
