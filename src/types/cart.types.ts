export interface CartItemProduct {
  id: string;
  name: string;
  slug: string;
  price: string;
  stock: number;
  status: string;
  media: {
    id: string;
    url: string;
  }[];
}

export interface CartItemVariant {
  id: string;
  sku: string;
  color?: string;
  size?: string;
  price: number;
  weight: number;
  stock: number;
  isActive: boolean;
  fulfillmentType: string;
  shippingType: string;
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
}

export interface CartItem {
  id: string;
  variantId: string;
  quantity: number;
  unitPrice: number;
  lineTotal: number;
  availableStock: number;
  inStock: boolean;
  unavailable: boolean;
  variant?: CartItemVariant;
}

export interface Cart {
  id: string;
  status: "ACTIVE" | "CHECKED_OUT" | "ABANDONED";
  userId: string;
  items: CartItem[];
  subtotal: number;
  totalWeight: number;
  totalCBM: number;
  totalItems: number;
  createdAt: string;
  updatedAt: string;
}

export interface AddToCartPayload {
  variantId: string;
  quantity?: number;
}

export interface UpdateCartItemPayload {
  quantity: number;
}
