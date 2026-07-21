// cart.api.ts
import { api } from "../lib/api";
import type {
  Cart,
  CartItem,
  AddToCartPayload,
  UpdateCartItemPayload,
} from "../types/cart.types";

export interface CartSummary extends Cart {
  shippingEstimate: number | null;
  taxEstimate: number;
  grandTotal: number;
}

export interface CartValidation {
  valid: boolean;
  errors: Array<{
    variantId: string;
    error: string;
    sku?: string;
    available?: number;
    requested?: number;
  }>;
  items: Array<{
    variantId: string;
    quantity: number;
    price: number;
    total: number;
  }>;
  totalItems: number;
}

export const getCart = async (): Promise<Cart> => {
  const response = await api.get("/api/cart");
  return response.data.data;
};

export const getCartSummary = async (): Promise<CartSummary> => {
  const response = await api.get("/api/cart/summary");
  return response.data.data;
};

export const validateCart = async (): Promise<CartValidation> => {
  const response = await api.get("/api/cart/validate");
  return response.data.data;
};

export const addItemToCart = async (
  payload: AddToCartPayload,
): Promise<Cart> => {
  const response = await api.post("/api/cart/items", payload);
  return response.data.data;
};

export const updateCartItem = async (
  variantId: string,
  payload: UpdateCartItemPayload,
): Promise<Cart> => {
  const response = await api.patch(`/api/cart/items/${variantId}`, payload);
  return response.data.data;
};

export const removeCartItem = async (variantId: string): Promise<Cart> => {
  const response = await api.delete(`/api/cart/items/${variantId}`);
  return response.data.data;
};

export const clearCart = async (): Promise<Cart> => {
  const response = await api.delete("/api/cart/clear");
  return response.data.data;
};

export const mergeCarts = async (sessionId: string): Promise<Cart> => {
  const response = await api.post("/api/cart/merge", { sessionId });
  return response.data.data;
};
