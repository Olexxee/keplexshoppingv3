// types/order.types.ts
import type {
  OrderStatus,
  FulfillmentType,
} from "./common.types";
import type { ProductVariant } from "./product.types";
import type { PaymentMethod } from "./paymentMethod.types";
import type { Fulfillment } from "./fulfillment.types";

export interface OrderItem {
  id: string;
  orderId: string;
  variantId: string;
  quantity: number;
  unitPriceSnapshot: number;
  totalPrice: number;
  cbm?: number;
  chargeableWeight?: number;
  createdAt: string;
  variant?: ProductVariant & {
    product?: {
      id: string;
      name: string;
      slug: string;
      brand?: {
        id: string;
        name: string;
      };
      category?: {
        id: string;
        name: string;
      };
    };
  };
}

export interface Order {
  id: string;
  orderNumber: string;
  userId?: string;
  customerName: string;
  customerEmail?: string;
  customerPhone?: string;
  shippingLabel?: string;
  shippingStreet?: string;
  shippingCity?: string;
  shippingState?: string;
  shippingCountry?: string;
  subtotal: number;
  shippingCost: number;
  taxAmount: number;
  totalAmount: number;
  status: OrderStatus;
  notes?: string;
  cbm?: number;
  chargeableWeight?: number;
  cbmData?: {
    totalCBM: number;
    totalChargeableWeight: number;
    items: Array<{
      variantId: string;
      sku: string;
      productName: string;
      quantity: number;
      cbm: number;
      chargeableWeight: number;
      dimensions: {
        length?: number;
        width?: number;
        height?: number;
      };
    }>;
  };
  cbmUpdatedAt?: string;
  cbmUpdatedBy?: string;
  fulfillmentGroups?: {
    [key in FulfillmentType]?: Array<{
      variantId: string;
      quantity: number;
      unitPriceSnapshot: number;
    }>;
  };
  createdAt: string;
  updatedAt: string;
  items: OrderItem[];
  payments: PaymentMethod[];
  fulfillments: Fulfillment[];
  user?: {
    id: string;
    fullName: string;
    email: string;
    phone: string;
  };
}

export interface CheckoutPayload {
  addressId: string;
  notes?: string;
}

export interface CheckoutResponse {
  order: Order;
  payment: {
    reference: string;
    authorizationUrl: string;
    accessCode: string;
  };
  shippingCalculation: {
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
  };
  fulfillmentGroups: {
    [key in FulfillmentType]?: Array<{
      variantId: string;
      quantity: number;
      unitPriceSnapshot: number;
    }>;
  };
}

export interface OrderTimeline {
  status: string;
  timestamp: string;
  description: string;
  metadata?: any;
}

export interface UpdateOrderStatusPayload {
  status: OrderStatus;
}

export interface UpdateCBMDataPayload {
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

export interface GetOrdersParams {
  page?: number;
  limit?: number;
  status?: OrderStatus;
  userId?: string;
  search?: string;
  startDate?: string;
  endDate?: string;
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
