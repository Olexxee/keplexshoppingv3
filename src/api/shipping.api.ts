// shipping.api.ts
import { api } from "../lib/api";

export interface ShippingCalculationResponse {
  totalCBM: number;
  totalActualWeight: number;
  totalShippingCost: number;
  itemBreakdown: Array<{
    type: string;
    cbm: number;
    weight: number;
    cost: number;
    items: any[];
    breakdown: any;
  }>;
  groups: Record<string, any[]>;
}

export const calculateShipping = async (
  cartId: string,
): Promise<ShippingCalculationResponse> => {
  const response = await api.get("/api/shipping/calculate", {
    params: { cartId },
  });
  return response.data.data;
};
