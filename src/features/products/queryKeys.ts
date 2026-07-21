export const productKeys = {
  all: ["products"] as const,

  lists: () => [...productKeys.all, "lists"] as const,

  list: (filters?: unknown) => [...productKeys.lists(), filters] as const,

  details: () => [...productKeys.all, "details"] as const,

  detail: (slug: string) => [...productKeys.details(), slug] as const,

  featured: (limit?: number) =>
    [...productKeys.all, "featured", limit] as const,

  newest: (limit?: number) => [...productKeys.all, "newest", limit] as const,

  bestSellers: (limit?: number) =>
    [...productKeys.all, "best-sellers", limit] as const,

  related: (id: string) => [...productKeys.detail(id), "related"] as const,

  reviews: (id: string) => [...productKeys.detail(id), "reviews"] as const,
};
