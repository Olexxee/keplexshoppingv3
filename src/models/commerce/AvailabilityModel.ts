export type AvailabilityStatus =
  | "inStock"
  | "lowStock"
  | "outOfStock"
  | "preOrder";

  
export interface AvailabilityModel {
  status: AvailabilityStatus;
  label: string;
  stock: number;
  canPurchase: boolean;
}
