export interface HeroAction {
  label: string;
  href: string;
  variant?: "primary" | "secondary";
}

export interface HeroStat {
  label: string;
  value: string;
}

export interface HeroMedia {
  type: "image" | "video";
  src: string;
  alt?: string;
  poster?: string;
}

export interface HeroConfig {
  eyebrow?: string;
  title: string;
  description: string;

  media: HeroMedia;

  actions: HeroAction[];

  stats: HeroStat[];
}

export const hero: HeroConfig = {
  eyebrow: "Premium Collection",

  title: "Designed for modern living.",

  description: "Discover premium products carefully selected for modern homes.",

  media: {
    src: "/images/hero.webp",
      alt: "Modern furniture collection",
      type: "image",
    poster: ""
  },

  actions: [
    {
      label: "Shop Now",
      href: "/shop",
      variant: "primary",
    },
    {
      label: "Browse Collections",
      href: "/collections",
      variant: "primary",
    },
  ],

  stats: [
    {
      label: "Products",
      value: "2,500+",
    },
    {
      label: "Customers",
      value: "50K+",
    },
    {
      label: "Brands",
      value: "120+",
    },
  ],
};