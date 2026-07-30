export const catalogKeys = {
  all: ["catalog"] as const,

  lists: () => [...catalogKeys.all, "lists"] as const,

  list: (filters: unknown) => [...catalogKeys.lists(), filters] as const,
};
