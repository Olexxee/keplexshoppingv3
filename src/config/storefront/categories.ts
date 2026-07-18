export interface CategoryItem {
  id: string;
  title: string;
  description?: string;
  image: string;
  href: string;
  productCount: number;
}

export interface CategoriesConfig {
  eyebrow?: string;
  title: string;
  description?: string;
  items: CategoryItem[];
}

export const categories: CategoriesConfig = {
  eyebrow: "Browse",

  title: "Shop by Category",

  description:
    "Explore our curated categories and discover products tailored to your lifestyle.",

  items: [
    {
      id: "electronics",
      title: "Electronics",
      description: "Phones, laptops and accessories",
      image: "/images/categories/electronics.webp",
      href: "/shop/electronics",
      productCount: 245,
    },
    {
      id: "fashion",
      title: "Fashion",
      description: "Latest styles and trends",
      image: "/images/categories/fashion.webp",
      href: "/shop/fashion",
      productCount: 186,
    },
    {
      id: "home",
      title: "Home",
      description: "Furniture and décor",
      image: "/images/categories/home.webp",
      href: "/shop/home",
      productCount: 134,
    },
    {
      id: "beauty",
      title: "Beauty",
      description: "Health and personal care",
      image: "/images/categories/beauty.webp",
      href: "/shop/beauty",
      productCount: 92,
    },
  ],
};
