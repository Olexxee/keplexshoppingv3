// admin/admin.fulfillments.api.ts
import { api } from "../../lib/api";
import type {
  Fulfillment
} from "../../types/fulfillment.types";
import type { FulfillmentStatus } from "../../types/common.types";

export interface GetFulfillmentsParams {
  page?: number;
  limit?: number;
  orderId?: string;
  type?: "LOCAL" | "IMPORT" | "PREORDER" | "DIGITAL";
  status?: FulfillmentStatus;
  warehouseId?: string;
}

export interface FulfillmentsResponse {
  data: Fulfillment[];
  meta: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}

export interface UpdateTrackingPayload {
  trackingNumber: string;
  carrier: string;
  trackingUrl?: string;
  estimatedDelivery?: string;
}

export const getFulfillments = async (
  params?: GetFulfillmentsParams,
): Promise<FulfillmentsResponse> => {
  const response = await api.get("/api/admin/fulfillments", { params });
  return response.data;
};

export const getFulfillmentsByOrder = async (
  orderId: string,
): Promise<Fulfillment[]> => {
  const response = await api.get(`/api/admin/fulfillments/order/${orderId}`);
  return response.data.data;
};

export const getFulfillmentById = async (id: string): Promise<Fulfillment> => {
  const response = await api.get(`/api/admin/fulfillments/${id}`);
  return response.data.data;
};

export const updateFulfillmentStatus = async (
  id: string,
  status: FulfillmentStatus,
): Promise<Fulfillment> => {
  const response = await api.patch(`/api/admin/fulfillments/${id}/status`, {
    status,
  });
  return response.data.data;
};

export const updateFulfillmentTracking = async (
  id: string,
  payload: UpdateTrackingPayload,
): Promise<Fulfillment> => {
  const response = await api.patch(
    `/api/admin/fulfillments/${id}/tracking`,
    payload,
  );
  return response.data.data;
};

export const generateFulfillments = async (
  orderId: string,
): Promise<Fulfillment[]> => {
  const response = await api.post(
    `/api/admin/fulfillments/order/${orderId}/generate`,
  );
  return response.data.data;
};

export const deleteFulfillment = async (id: string): Promise<void> => {
  await api.delete(`/api/admin/fulfillments/${id}`);
};
