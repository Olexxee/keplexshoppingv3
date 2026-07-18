import type { Collection } from "../../types/collection.types";

export const featuredCollectionsData: Collection[] = [
  {
    id: "electronics",
    name: "Electronics",
    slug: "electronics",
    description: "Latest gadgets and smart devices",
    image: "/images/collections/electronics.webp",
    isActive: true,
    sortOrder: 1,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    _count: {
      products: 245,
    },
  },
  {
    id: "fashion",
    name: "Fashion",
    slug: "fashion",
    description: "Trending styles for every season",
    image: "/images/collections/fashion.webp",
    isActive: true,
    sortOrder: 2,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    _count: {
      products: 186,
    },
  },
  {
    id: "home",
    name: "Home & Living",
    slug: "home-living",
    description: "Furniture and home essentials",
    image: "/images/collections/home.webp",
    isActive: true,
    sortOrder: 3,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    _count: {
      products: 132,
    },
  },
  {
    id: "beauty",
    name: "Beauty",
    slug: "beauty",
    description: "Skincare, makeup and wellness",
    image: "/images/collections/beauty.webp",
    isActive: true,
    sortOrder: 4,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    _count: {
      products: 98,
    },
  },
];
