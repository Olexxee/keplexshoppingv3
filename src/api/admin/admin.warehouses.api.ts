// admin/admin.warehouses.api.ts
import { api } from "../../lib/api";
import type { Warehouse } from "../../types/fulfillment.types";

export interface GetWarehousesParams {
  page?: number;
  limit?: number;
  isActive?: boolean;
  search?: string;
}

export interface WarehousesResponse {
  data: Warehouse[];
  meta: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}

export interface CreateWarehousePayload {
  name: string;
  code: string;
  address: string;
  city: string;
  state: string;
  country?: string;
  isActive?: boolean;
}

export interface UpdateWarehousePayload extends Partial<CreateWarehousePayload> {}

export const getWarehouses = async (
  params?: GetWarehousesParams,
): Promise<WarehousesResponse> => {
  const response = await api.get("/api/admin/warehouses", { params });
  return response.data;
};

export const getWarehouseById = async (id: string): Promise<Warehouse> => {
  const response = await api.get(`/api/admin/warehouses/${id}`);
  return response.data.data;
};

export const createWarehouse = async (
  payload: CreateWarehousePayload,
): Promise<Warehouse> => {
  const response = await api.post("/api/admin/warehouses", payload);
  return response.data.data;
};

export const updateWarehouse = async (
  id: string,
  payload: UpdateWarehousePayload,
): Promise<Warehouse> => {
  const response = await api.patch(`/api/admin/warehouses/${id}`, payload);
  return response.data.data;
};

export const deleteWarehouse = async (id: string): Promise<void> => {
  await api.delete(`/api/admin/warehouses/${id}`);
};
