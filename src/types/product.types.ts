export interface ProductImage {
  isPrimary: unknown;
  id: string;
  url: string;
  alt?: string;
  sortOrder: number;
}

export interface Product {
  id: string;
  name: string;
  slug: string;
  description?: string;
  brandId?: string;
  categoryId: string;
  collectionId?: string;
  isFeatured: boolean;
  isNew: boolean;
  isBestSeller: boolean;
  status: "DRAFT" | "ACTIVE" | "ARCHIVED";
  metadata?: any;
  createdAt: string;
  updatedAt: string;
  brand?: {
    id: string;
    name: string;
    slug: string;
  };
  category?: {
    id: string;
    name: string;
    slug: string;
  };
  collection?: {
    id: string;
    name: string;
    slug: string;
  };
  variants: ProductVariant[];
  avgRating?: number;
  priceRange?: {
    min: number;
    max: number;
  };
  totalReviews?: number;
}

export interface ProductVariant {
  id: string;
  productId: string;
  sku: string;
  color?: string;
  size?: string;
  weight: number;
  price: number;
  compareAtPrice?: number;
  stock: number;
  fulfillmentType: "LOCAL" | "IMPORT" | "PREORDER" | "DIGITAL";
  length?: number;
  width?: number;
  height?: number;
  actualWeight: number;
  shippingType: "LOCAL" | "IMPORT" | "SEA" | "AIR";
  isActive: boolean;
  images?: ProductImage[];
  attributes?: any;
  cbm?: number;
  chargeableWeight?: number;
  createdAt: string;
  updatedAt: string;
  product?: Product;
}
