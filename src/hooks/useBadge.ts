import { badgeLookup } from "@/services/leagues";
import { useQuery } from "@tanstack/react-query";
import useCachedRefetch from "./useCachedRefetch";

export default function useBadge(idLeague: string) {
  const {
    data: { seasons = [] } = {},
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["seasons", idLeague],
    queryFn: () => badgeLookup(idLeague),
    enabled: false,
  });
  const badge = seasons?.[0]?.strBadge;
  const cachedRefetch = useCachedRefetch(refetch, ["seasons", idLeague]);
  return {
    isLoading,
    badge,
    refetch: cachedRefetch,
  };
}
