import type { CatalogItem } from "../../types/catalog.types";

export const featuredProductsData: CatalogItem[] = [
  {
    id: "1",
    name: "Wireless Headphones",
    images: ["/images/products/headphones.webp"],
    media: [],
    price: 89.99,
    compareAtPrice: 119.99,
    status: "ACTIVE",
    itemType: "PRODUCT",
    metadata: {
      rating: 4.8,
      reviewCount: 124,
      badge: "Best Seller",
    },
  },
  {
    id: "2",
    name: "Smart Watch",
    images: ["/images/products/watch.webp"],
    media: [],
    price: 149.99,
    status: "ACTIVE",
    itemType: "PRODUCT",
    metadata: {
      rating: 4.6,
      reviewCount: 81,
    },
  },
  {
    id: "3",
    name: "Gaming Keyboard",
    images: ["/images/products/keyboard.webp"],
    media: [],
    price: 69.99,
    compareAtPrice: 89.99,
    status: "ACTIVE",
    itemType: "PRODUCT",
    metadata: {
      rating: 4.9,
      reviewCount: 233,
    },
  },
  {
    id: "4",
    name: "Bluetooth Speaker",
    images: ["/images/products/speaker.webp"],
    media: [],
    price: 59.99,
    status: "ACTIVE",
    itemType: "PRODUCT",
    metadata: {
      rating: 4.7,
      reviewCount: 96,
    },
  },
];
