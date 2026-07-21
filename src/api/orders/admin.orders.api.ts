// admin/admin.orders.api.ts
import { api } from "../../lib/api";
import type { Order } from "../../types/order.types";
import type { OrderStatus } from "../../types/common.types";

export interface GetOrdersParams {
  page?: number;
  limit?: number;
  status?: OrderStatus;
  userId?: string;
  search?: string;
  startDate?: string;
  endDate?: string;
}

export interface OrdersResponse {
  data: Order[];
  meta: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}

export interface OrderMetrics {
  totalOrders: number;
  pendingOrders: number;
  processingOrders: number;
  shippedOrders: number;
  deliveredOrders: number;
  completedOrders: number;
  cancelledOrders: number;
  totalRevenue: number;
  todayOrders: number;
  todayRevenue: number;
}

export interface UpdateCBMData {
  totalCBM: number;
  totalChargeableWeight: number;
  items?: Array<{
    variantId: string;
    cbm: number;
    chargeableWeight: number;
  }>;
  measurements?: any;
  notes?: string;
  additionalCharge?: number;
  paymentLink?: string;
}

export const getAllOrders = async (
  params?: GetOrdersParams,
): Promise<OrdersResponse> => {
  const response = await api.get("/api/admin/orders", { params });
  return response.data;
};

export const getOrderById = async (id: string): Promise<Order> => {
  const response = await api.get(`/api/admin/orders/${id}`);
  return response.data.data;
};

export const updateOrderStatus = async (
  id: string,
  status: OrderStatus,
): Promise<Order> => {
  const response = await api.patch(`/api/admin/orders/${id}/status`, {
    status,
  });
  return response.data.data;
};

export const updateOrderCBM = async (
  id: string,
  data: UpdateCBMData,
): Promise<Order> => {
  const response = await api.patch(`/api/admin/orders/${id}/cbm`, data);
  return response.data.data;
};

export const getOrderMetrics = async (): Promise<OrderMetrics> => {
  const response = await api.get("/api/admin/orders/metrics");
  return response.data.data;
};

export const getOrdersByFulfillmentType = async (
  fulfillmentType: string,
): Promise<Order[]> => {
  const response = await api.get(
    `/api/admin/orders/fulfillment/${fulfillmentType}`,
  );
  return response.data.data;
};
