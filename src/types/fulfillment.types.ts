// types/fulfillment.types.ts
import type {
  FulfillmentType,
  FulfillmentStatus,
} from "./common.types";
import type { ProductVariant } from "./product.types";
import type { Order } from "./order.types";

export interface Fulfillment {
  id: string;
  orderId: string;
  type: FulfillmentType;
  warehouseId?: string;
  status: FulfillmentStatus;
  trackingNumber?: string;
  carrier?: string;
  trackingUrl?: string;
  estimatedDelivery?: string;
  shippingCost?: number;
  deliveredAt?: string;
  notes?: string;
  createdAt: string;
  updatedAt: string;
  items: FulfillmentItem[];
  warehouse?: Warehouse;
  order?: Order;
}

export interface FulfillmentItem {
  id: string;
  fulfillmentId: string;
  variantId: string;
  quantity: number;
  unitPrice: number;
  createdAt: string;
  variant?: ProductVariant;
}

export interface Warehouse {
  id: string;
  name: string;
  code: string;
  address: string;
  city: string;
  state: string;
  country: string;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
  _count?: {
    fulfillments: number;
  };
}

export interface CreateFulfillmentPayload {
  orderId: string;
  type: FulfillmentType;
  warehouseId?: string;
  items: Array<{
    variantId: string;
    quantity: number;
    unitPrice: number;
  }>;
}

export interface UpdateFulfillmentPayload {
  status?: FulfillmentStatus;
  trackingNumber?: string;
  carrier?: string;
  trackingUrl?: string;
  estimatedDelivery?: string;
  notes?: string;
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

export interface FulfillmentSummary {
  type: FulfillmentType;
  itemCount: number;
  totalQuantity: number;
  totalValue: number;
  items: Array<{
    variantId: string;
    sku?: string;
    productName?: string;
    quantity: number;
    price: number;
  }>;
}

export interface FulfillmentGroup {
  [key: string]: Array<{
    variantId: string;
    quantity: number;
    unitPriceSnapshot: number;
    variant?: ProductVariant;
    fulfillmentType: FulfillmentType;
  }>;
}
