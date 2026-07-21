import { useQuery } from "@tanstack/react-query";
import { getCatalog } from "../services/catalog.service";
import { adaptCatalog } from "../adapters/adaptCatalog";

export function useCatalog(query: any) {
  const result = useQuery({
    queryKey: ["catalog", query],
    queryFn: () => getCatalog(query),
  });

  return {
    ...result,

    presentation: result.data ? adaptCatalog(result.data) : undefined,
  };
}
