// fulfillments.api.ts - Customer facing (if needed)
import { api } from "../../lib/api";
import type { Fulfillment } from "../../types/fulfillment.types";

// Customer can only view fulfillments for their orders
export const getFulfillmentById = async (id: string): Promise<Fulfillment> => {
  const response = await api.get(`/api/fulfillments/${id}`);
  return response.data.data;
};

export const getFulfillmentsByOrder = async (
  orderId: string,
): Promise<Fulfillment[]> => {
  const response = await api.get(`/api/fulfillments/order/${orderId}`);
  return response.data.data;
};
