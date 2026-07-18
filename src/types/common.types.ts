// ============ ENUMS ============

export type OrderStatus =
  | "PENDING"
  | "CONFIRMED"
  | "PROCESSING"
  | "SHIPPED"
  | "DELIVERED"
  | "COMPLETED"
  | "CANCELLED";

export type FulfillmentType = "LOCAL" | "IMPORT" | "PREORDER" | "DIGITAL";

export type FulfillmentStatus =
  | "PENDING"
  | "PROCESSING"
  | "SHIPPED"
  | "DELIVERED"
  | "CANCELLED";

export type PaymentStatus =
  | "PENDING"
  | "SUCCESS"
  | "FAILED"
  | "ABANDONED"
  | "REVERSED";

export type PaymentProvider = "PAYSTACK" | "FLUTTERWAVE" | "STRIPE" | "RAVE";

export type ShippingType = "LOCAL" | "IMPORT" | "SEA" | "AIR" | "ROAD";

export type ProductStatus = "DRAFT" | "ACTIVE" | "ARCHIVED";

export type ProductType = "PRODUCT" | "SERVICE" | "PACKAGE" | "DIGITAL";

export type CartStatus = "ACTIVE" | "CHECKED_OUT" | "ABANDONED";

export type UserRole = "SUPER_ADMIN" | "ADMIN" | "STAFF" | "CUSTOMER";

export type UserStatus = "ACTIVE" | "SUSPENDED" | "INACTIVE";

export type CategoryType = "PRODUCT" | "SERVICE" | "CONTENT";

export type NotificationType =
  | "ORDER_CREATED"
  | "ORDER_CONFIRMED"
  | "ORDER_PROCESSING"
  | "ORDER_SHIPPED"
  | "ORDER_DELIVERED"
  | "ORDER_CANCELLED"
  | "FULFILLMENT_CREATED"
  | "FULFILLMENT_PROCESSING"
  | "FULFILLMENT_SHIPPED"
  | "FULFILLMENT_DELIVERED"
  | "PAYMENT_SUCCESS"
  | "PAYMENT_FAILED"
  | "CBM_UPDATED"
  | "CBM_ADDITIONAL_CHARGE"
  | "WELCOME"
  | "PASSWORD_CHANGED"
  | "PROMOTION";

export type ReviewStatus = "PENDING" | "APPROVED" | "REJECTED";

export type RegistrationStatus = "PENDING" | "PAID" | "CANCELLED" | "EXPIRED";

export type TestimonialStatus = "PENDING" | "APPROVED" | "REJECTED";

// ============ PAGINATION ============

export interface PaginationMeta {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
}

export interface PaginatedResponse<T> {
  data: T[];
  meta: PaginationMeta;
}

// ============ API RESPONSE ============

export interface ApiResponse<T = any> {
  success: boolean;
  message: string;
  data: T;
  meta?: PaginationMeta;
}

export interface ApiError {
  success: false;
  message: string;
  errors?: Record<string, string[]>;
  statusCode: number;
}

// ============ ORDER STATUS HELPERS ============

export const OrderStatusDisplay: Record<OrderStatus, string> = {
  PENDING: "Pending",
  CONFIRMED: "Confirmed",
  PROCESSING: "Processing",
  SHIPPED: "Shipped",
  DELIVERED: "Delivered",
  COMPLETED: "Completed",
  CANCELLED: "Cancelled",
};

export const OrderStatusColors: Record<OrderStatus, string> = {
  PENDING: "bg-yellow-100 text-yellow-800",
  CONFIRMED: "bg-blue-100 text-blue-800",
  PROCESSING: "bg-indigo-100 text-indigo-800",
  SHIPPED: "bg-purple-100 text-purple-800",
  DELIVERED: "bg-green-100 text-green-800",
  COMPLETED: "bg-emerald-100 text-emerald-800",
  CANCELLED: "bg-red-100 text-red-800",
};

export const OrderStatusBadgeVariant: Record<OrderStatus, string> = {
  PENDING: "warning",
  CONFIRMED: "info",
  PROCESSING: "info",
  SHIPPED: "info",
  DELIVERED: "success",
  COMPLETED: "success",
  CANCELLED: "danger",
};

export const OrderStatusOrder: OrderStatus[] = [
  "PENDING",
  "CONFIRMED",
  "PROCESSING",
  "SHIPPED",
  "DELIVERED",
  "COMPLETED",
  "CANCELLED",
];

// ============ FULFILLMENT STATUS HELPERS ============

export const FulfillmentStatusDisplay: Record<FulfillmentStatus, string> = {
  PENDING: "Pending",
  PROCESSING: "Processing",
  SHIPPED: "Shipped",
  DELIVERED: "Delivered",
  CANCELLED: "Cancelled",
};

export const FulfillmentStatusColors: Record<FulfillmentStatus, string> = {
  PENDING: "bg-yellow-100 text-yellow-800",
  PROCESSING: "bg-indigo-100 text-indigo-800",
  SHIPPED: "bg-purple-100 text-purple-800",
  DELIVERED: "bg-green-100 text-green-800",
  CANCELLED: "bg-red-100 text-red-800",
};

export const FulfillmentStatusBadgeVariant: Record<FulfillmentStatus, string> =
  {
    PENDING: "warning",
    PROCESSING: "info",
    SHIPPED: "info",
    DELIVERED: "success",
    CANCELLED: "danger",
  };

// ============ FULFILLMENT TYPE HELPERS ============

export const FulfillmentTypeDisplay: Record<FulfillmentType, string> = {
  LOCAL: "Local",
  IMPORT: "Import",
  PREORDER: "Pre-order",
  DIGITAL: "Digital",
};

export const FulfillmentTypeIcons: Record<FulfillmentType, string> = {
  LOCAL: "🏪",
  IMPORT: "📦",
  PREORDER: "⏳",
  DIGITAL: "💻",
};

// ============ PAYMENT STATUS HELPERS ============

export const PaymentStatusDisplay: Record<PaymentStatus, string> = {
  PENDING: "Pending",
  SUCCESS: "Success",
  FAILED: "Failed",
  ABANDONED: "Abandoned",
  REVERSED: "Reversed",
};

export const PaymentStatusColors: Record<PaymentStatus, string> = {
  PENDING: "bg-yellow-100 text-yellow-800",
  SUCCESS: "bg-green-100 text-green-800",
  FAILED: "bg-red-100 text-red-800",
  ABANDONED: "bg-gray-100 text-gray-800",
  REVERSED: "bg-orange-100 text-orange-800",
};

// ============ SHIPPING TYPE HELPERS ============

export const ShippingTypeDisplay: Record<ShippingType, string> = {
  LOCAL: "Local Shipping",
  IMPORT: "Import Shipping",
  SEA: "Sea Freight",
  AIR: "Air Freight",
  ROAD: "Road Freight",
};

export const ShippingTypeIcons: Record<ShippingType, string> = {
  LOCAL: "🚚",
  IMPORT: "🚢",
  SEA: "⛴️",
  AIR: "✈️",
  ROAD: "🚛",
};

// ============ PRODUCT STATUS HELPERS ============

export const ProductStatusDisplay: Record<ProductStatus, string> = {
  DRAFT: "Draft",
  ACTIVE: "Active",
  ARCHIVED: "Archived",
};

export const ProductStatusColors: Record<ProductStatus, string> = {
  DRAFT: "bg-gray-100 text-gray-800",
  ACTIVE: "bg-green-100 text-green-800",
  ARCHIVED: "bg-red-100 text-red-800",
};

// ============ USER ROLE HELPERS ============

export const UserRoleDisplay: Record<UserRole, string> = {
  SUPER_ADMIN: "Super Admin",
  ADMIN: "Admin",
  STAFF: "Staff",
  CUSTOMER: "Customer",
};

export const UserRoleColors: Record<UserRole, string> = {
  SUPER_ADMIN: "bg-purple-100 text-purple-800",
  ADMIN: "bg-blue-100 text-blue-800",
  STAFF: "bg-indigo-100 text-indigo-800",
  CUSTOMER: "bg-gray-100 text-gray-800",
};

// ============ TYPE GUARDS ============

export const isOrderStatus = (value: string): value is OrderStatus => {
  return OrderStatusOrder.includes(value as OrderStatus);
};

export const isFulfillmentStatus = (
  value: string,
): value is FulfillmentStatus => {
  return Object.keys(FulfillmentStatusDisplay).includes(value);
};

export const isFulfillmentType = (value: string): value is FulfillmentType => {
  return Object.keys(FulfillmentTypeDisplay).includes(value);
};

export const isPaymentStatus = (value: string): value is PaymentStatus => {
  return Object.keys(PaymentStatusDisplay).includes(value);
};

export const isShippingType = (value: string): value is ShippingType => {
  return Object.keys(ShippingTypeDisplay).includes(value);
};

export const isProductStatus = (value: string): value is ProductStatus => {
  return Object.keys(ProductStatusDisplay).includes(value);
};

export const isUserRole = (value: string): value is UserRole => {
  return Object.keys(UserRoleDisplay).includes(value);
};
