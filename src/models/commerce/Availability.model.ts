export type AvailabilityStatus = "in-stock" | "low-stock" | "out-of-stock";

export interface AvailabilityModel {
  status: AvailabilityStatus;
  label: string;
}
