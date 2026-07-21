import { api } from "../../lib/api";
import type {
  ShippingConfiguration,
  ShippingRule,
} from "../../types/shipping.types";

export interface CreateShippingConfigPayload {
  name: string;
  type: "LOCAL" | "IMPORT" | "SEA" | "AIR";
  isActive?: boolean;
  pricePerKg?: number;
  minCharge?: number;
  handlingFee?: number;
  freeShippingThreshold?: number;
  pricePerCBM?: number;
  cbmHandlingFee?: number;
  cbmMinCharge?: number;
  cbmTiers?: any;
  deliveryEstimateMin?: number;
  deliveryEstimateMax?: number;
  zones?: any;
}

export interface UpdateShippingConfigPayload extends Partial<CreateShippingConfigPayload> {}

export interface CreateShippingRulePayload {
  name: string;
  type: "ZONE" | "WEIGHT" | "ORDER_AMOUNT";
  zone?: string;
  minWeight?: number;
  maxWeight?: number;
  minOrderAmount?: number;
  maxOrderAmount?: number;
  baseRate: number;
  ratePerKg?: number;
  isActive?: boolean;
  priority?: number;
}

export interface UpdateShippingRulePayload extends Partial<CreateShippingRulePayload> {}

export interface CBMCaculationResponse {
  variantId: string;
  sku: string;
  cbm: number;
  volumetricWeight: number;
  chargeableWeight: number;
  dimensions: {
    length: number;
    width: number;
    height: number;
  };
}

// Shipping Configurations
export const getShippingConfigs = async (): Promise<
  ShippingConfiguration[]
> => {
  const response = await api.get("/api/admin/shipping/configs");
  return response.data.data;
};

export const getShippingConfigById = async (
  id: string,
): Promise<ShippingConfiguration> => {
  const response = await api.get(`/api/admin/shipping/configs/${id}`);
  return response.data.data;
};

export const createShippingConfig = async (
  payload: CreateShippingConfigPayload,
): Promise<ShippingConfiguration> => {
  const response = await api.post("/api/admin/shipping/configs", payload);
  return response.data.data;
};

export const updateShippingConfig = async (
  id: string,
  payload: UpdateShippingConfigPayload,
): Promise<ShippingConfiguration> => {
  const response = await api.patch(
    `/api/admin/shipping/configs/${id}`,
    payload,
  );
  return response.data.data;
};

export const deleteShippingConfig = async (id: string): Promise<void> => {
  await api.delete(`/api/admin/shipping/configs/${id}`);
};

// Shipping Rules
export const getShippingRules = async (params?: {
  isActive?: boolean;
  type?: string;
}): Promise<ShippingRule[]> => {
  const response = await api.get("/api/admin/shipping/rules", { params });
  return response.data.data;
};

export const createShippingRule = async (
  payload: CreateShippingRulePayload,
): Promise<ShippingRule> => {
  const response = await api.post("/api/admin/shipping/rules", payload);
  return response.data.data;
};

export const updateShippingRule = async (
  id: string,
  payload: UpdateShippingRulePayload,
): Promise<ShippingRule> => {
  const response = await api.patch(`/api/admin/shipping/rules/${id}`, payload);
  return response.data.data;
};

export const deleteShippingRule = async (id: string): Promise<void> => {
  await api.delete(`/api/admin/shipping/rules/${id}`);
};

// CBM
export const calculateVariantCBM = async (
  variantId: string,
): Promise<CBMCaculationResponse> => {
  const response = await api.get(
    `/api/admin/shipping/cbm/variant/${variantId}`,
  );
  return response.data.data;
};
