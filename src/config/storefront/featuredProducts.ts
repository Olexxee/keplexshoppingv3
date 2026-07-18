export interface FeaturedProductsConfig {
  eyebrow?: string;
  title: string;
  description?: string;
  action?: {
    label: string;
    href: string;
  };
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
