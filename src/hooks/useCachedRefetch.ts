import { useQueryClient, type RefetchOptions } from "@tanstack/react-query";
import { useCallback } from "react";

export default function useCachedRefetch<RefetchReturnType>(
  refetch: (options?: RefetchOptions) => Promise<RefetchReturnType>,
  queryKeys: string[],
) {
  const queryClient = useQueryClient();
  const cachedRefetch = useCallback(() => {
    const cachedData = queryClient.getQueryData(queryKeys);
    if (!cachedData) {
      refetch();
    }
  }, [refetch, queryKeys, queryClient]);
  return cachedRefetch;
}
