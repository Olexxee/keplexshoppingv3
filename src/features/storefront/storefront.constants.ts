import type { StorefrontFilters } from "./storefront.types";

export const INITIAL_FILTERS = {
  search: "",

  category: undefined,

  brand: undefined,

  collection: undefined,

  minPrice: undefined,

  maxPrice: undefined,

  sort: "featured",
} satisfies StorefrontFilters;

export const INITIAL_PAGINATION = {
  page: 1,

  limit: 20,
};

export const INITIAL_UI = {
  view: "grid",

  filterDrawerOpen: false,
};
