import type{ Brand } from "../../types/brand.types";

export const featuredBrandsData: Brand[] = [
  {
    id: "apple",
    name: "Apple",
    slug: "apple",
    logo: "/images/brands/apple.webp",
    description: "Premium technology products",
    isActive: true,
    sortOrder: 1,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    _count: {
      products: 42,
    },
  },
  {
    id: "samsung",
    name: "Samsung",
    slug: "samsung",
    logo: "/images/brands/samsung.webp",
    description: "Innovation for everyone",
    isActive: true,
    sortOrder: 2,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    _count: {
      products: 37,
    },
  },
  {
    id: "nike",
    name: "Nike",
    slug: "nike",
    logo: "/images/brands/nike.webp",
    description: "Performance and lifestyle",
    isActive: true,
    sortOrder: 3,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    _count: {
      products: 56,
    },
  },
  {
    id: "sony",
    name: "Sony",
    slug: "sony",
    logo: "/images/brands/sony.webp",
    description: "Entertainment and electronics",
    isActive: true,
    sortOrder: 4,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    _count: {
      products: 24,
    },
  },
];
