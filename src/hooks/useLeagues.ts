import { fetchAllLeagues, fetchLeaguesBySport } from "@/services/leagues";
import { useQuery } from "@tanstack/react-query";
import { useCallback, useMemo } from "react";
import { useSearchParams } from "react-router";

export function useLeagues() {
  const [searchParams, setSearchParams] = useSearchParams();
  const strLeagueParam = searchParams.get("strLeague") ?? "";
  const strSportParam = searchParams.get("s") ?? "";
  const onSearchParamUpdate = useCallback(
    (name: string, value: string) => {
      const newSearchParams = new URLSearchParams(searchParams);
      newSearchParams.set(name, value);
      setSearchParams(newSearchParams);
    },
    [searchParams, setSearchParams],
  );
  function resetSearchParams() {
    setSearchParams({});
  }
  const { data: { leagues = [] } = {}, isLoading } = useQuery({
    queryKey: ["leagues", strSportParam],
    queryFn: () => fetchAllLeagues(searchParams.toString()),

    staleTime: 5 * 60 * 1000,
  });

  const { data: { countries = [] } = {}, isLoading: isSportFilterLoading } =
    useQuery({
      queryKey: ["sports", strSportParam],
      queryFn: () => fetchLeaguesBySport(searchParams.toString().toLowerCase()),
      enabled: !!strSportParam,
      staleTime: 5 * 60 * 1000,
    });

  const leaguesDerived = useMemo(() => {
    // if filtered by sport, use the result of seach sport api othervise use the result of leagues api
    const tempLeagues = strSportParam ? (countries ?? []) : leagues;
    return tempLeagues.filter((league) =>
      strLeagueParam
        ? league.strLeague
            .trim()
            .toLowerCase()
            .includes(strLeagueParam.trim().toLowerCase())
        : true,
    );
  }, [strSportParam, countries, leagues, strLeagueParam]);
  return {
    leagues: leaguesDerived,
    isLoading: isLoading || isSportFilterLoading,
    onSearchParamUpdate,
    resetSearchParams,
    strLeagueParam,
  };
}
