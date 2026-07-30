import type{ ReactNode } from "react";

export interface RatingModel {
  reviewCount: ReactNode;
  
  value: number;

  count: number;

  formatted: string;
}
