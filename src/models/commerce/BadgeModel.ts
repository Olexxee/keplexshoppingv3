export type BadgeType =
  | "new"
  | "sale"
  | "bestSeller"
  | "featured"
  | "limited"
  | "exclusive"
  | "lowStock"
  | "outOfStock";

export interface BadgeModel {
  id: string;
  type: BadgeType;
  label: string;
  value?: number;
}
