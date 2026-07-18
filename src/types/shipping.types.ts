export interface ShippingConfiguration {
  id: string;
  name: string;
  type: "LOCAL" | "IMPORT" | "SEA" | "AIR";
  isActive: boolean;
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
  createdAt: string;
  updatedAt: string;
}

export interface ShippingRule {
  id: string;
  name: string;
  type: "ZONE" | "WEIGHT" | "ORDER_AMOUNT";
  zone?: string;
  minWeight?: number;
  maxWeight?: number;
  minOrderAmount?: number;
  maxOrderAmount?: number;
  baseRate: number;
  ratePerKg?: number;
  isActive: boolean;
  priority: number;
  createdAt: string;
  updatedAt: string;
}
