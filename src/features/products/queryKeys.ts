export const productKeys = {
  all: ["products"] as const,

  lists: () => [...productKeys.all, "list"] as const,

  list: (filters?: unknown) => [...productKeys.lists(), filters] as const,

  details: () => [...productKeys.all, "detail"] as const,

  detail: (slug: string) => [...productKeys.details(), slug] as const,

  related: (slug: string) => [...productKeys.detail(slug), "related"] as const,

  reviews: (slug: string) => [...productKeys.detail(slug), "reviews"] as const,

  featured: () => [...productKeys.all, "featured"] as const,

  newest: () => [...productKeys.all, "new"] as const,

  bestSellers: () => [...productKeys.all, "best-sellers"] as const,
};
