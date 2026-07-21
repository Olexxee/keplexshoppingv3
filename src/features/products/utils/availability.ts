import type { AvailabilityModel } from "../../../models/commerce";
import { PRODUCT_LOW_STOCK_THRESHOLD } from "../product.constants";

export function createAvailabilityModel(stock: number): AvailabilityModel {
  if (stock <= 0) {
    return {
      status: "out-of-stock",
      label: "Out of Stock",
    };
  }

  if (stock <= PRODUCT_LOW_STOCK_THRESHOLD) {
    return {
      status: "low-stock",
      label: `Only ${stock} left`,
    };
  }

  return {
    status: "in-stock",
    label: "In Stock",
  };
}
