import type { ProductInfoModel, ProductPurchaseModel } from "../../models";

export interface ProductSummaryProps {
  info: ProductInfoModel;
  purchase: ProductPurchaseModel;

  className?: string;
}
