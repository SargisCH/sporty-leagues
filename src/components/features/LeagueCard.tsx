import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import Badge from "./Badge";
import useBadge from "@/hooks/useBadge";

type Props = {
  strLeague: string;
  idLeague: string;
  strSport: string;
  strLeagueAlternate: string;
};

export default function LeagueCard({
  strLeague,
  idLeague,
  strLeagueAlternate,
  strSport,
}: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const { badge, isLoading, refetch } = useBadge(idLeague);
  return (
    <Card
      className="mt-2 cursor-pointer hover:shadow-xl  hover:-translate-y-0.5 "
      onClick={() => {
        setIsOpen(true);
        refetch();
      }}
    >
      <CardHeader>
        <CardTitle>{strLeague}</CardTitle>
        <CardDescription>{strSport}</CardDescription>
      </CardHeader>
      <CardContent>
        <p>{strLeagueAlternate}</p>
      </CardContent>
      {isOpen && (
        <Badge
          isOpen={isOpen}
          isLoading={isLoading}
          setIsOpen={setIsOpen}
          strBadge={badge}
          strLeague={strLeague}
        />
      )}
    </Card>
  );
}
