// orders.api.ts
import { api } from "../lib/api";
import type { Order, OrderItem, CheckoutPayload } from "../types/order.types";

export interface GetOrdersParams {
  page?: number;
  limit?: number;
  status?: string;
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

export interface CheckoutResponse {
  order: Order;
  payment: {
    reference: string;
    authorizationUrl: string;
    accessCode: string;
  };
  shippingCalculation: any;
  fulfillmentGroups: any;
}

export interface OrderTimeline {
  status: string;
  timestamp: string;
  description: string;
  metadata?: any;
}

export const checkout = async (
  payload: CheckoutPayload,
): Promise<CheckoutResponse> => {
  const response = await api.post("/api/orders/checkout", payload);
  return response.data.data;
};

export const getMyOrders = async (
  params?: GetOrdersParams,
): Promise<OrdersResponse> => {
  const response = await api.get("/api/orders/me", { params });
  return response.data;
};

export const getOrderTimeline = async (
  orderId: string,
): Promise<OrderTimeline[]> => {
  const response = await api.get(`/api/orders/me/timeline/${orderId}`);
  return response.data.data;
};

export const getOrderByNumber = async (orderNumber: string): Promise<Order> => {
  const response = await api.get(`/api/orders/by-number/${orderNumber}`);
  return response.data.data;
};

export const getOrderById = async (orderId: string): Promise<Order> => {
  const response = await api.get(`/api/orders/${orderId}`);
  return response.data.data;
};
