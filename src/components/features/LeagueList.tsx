import type { League } from "@/types/league";
import LeagueCard from "./LeagueCard";

type Props = {
  leagues: Array<League>;
};

export default function LeagueList({ leagues }: Props) {
  return leagues.map((league) => (
    <LeagueCard
      key={league.idLeague}
      strLeague={league.strLeague}
      strLeagueAlternate={league.strLeagueAlternate}
      idLeague={league.idLeague}
      strSport={league.strSport}
    />
  ));
}
