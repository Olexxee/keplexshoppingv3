import type{ CatalogItem } from "../../types/catalog.types";

export interface FeaturedProductsConfig {
  length: any;
  eyebrow?: string;
  title: string;
  description?: string;
  action?: {
    label: string;
    href: string;
  };
}

export interface FeaturedProductsProps {
  products: CatalogItem[];
  loading?: boolean;
  className?: string;
}

export const featuredProducts: FeaturedProductsConfig = {
  eyebrow: "Featured",

  title: "Featured Products",

  description:
    "Discover our most popular products, handpicked for quality and value.",

  action: {
    label: "View All",
    href: "/shop",
  },
};
