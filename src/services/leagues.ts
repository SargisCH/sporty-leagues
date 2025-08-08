import type { Country, League, Season } from "@/types/league";
import * as api from "./api";
import type { Sport } from "@/types/sports";

export const fetchAllLeagues = (
  queryString: string,
): Promise<{ leagues: League[] }> => {
  return api.get(`all_leagues.php?${queryString}`);
};

export const fetchAllSports = (): Promise<{ sports: Sport[] }> => {
  return api.get("all_sports.php");
};

export const fetchLeaguesBySport = (
  queryString: string,
): Promise<{ countries: Country[] }> => {
  return api.get(`search_all_leagues.php?${queryString}`);
};

export const badgeLookup = (id: string): Promise<{ seasons: Season[] }> => {
  return api.get(`search_all_seasons.php?badge=1&id=${id}`);
};
