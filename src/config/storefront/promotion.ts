export interface PromotionConfig {
  eyebrow?: string;
  title: string;
  description?: string;

  image: string;

  action: {
    label: string;
    href: string;
  };

  theme?: "light" | "dark";
}

export const promotion: PromotionConfig = {
  eyebrow: "Limited Time",

  title: "Save up to 40% on Premium Electronics",

  description:
    "Discover unbeatable deals on selected gadgets and accessories before the offer ends.",

  image: "/images/banners/promotion.webp",

  action: {
    label: "Shop Now",
    href: "/shop",
  },

  theme: "dark",
};
