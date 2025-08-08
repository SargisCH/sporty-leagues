import LeagueList from "@/components/features/LeagueList";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Spinner } from "@/components/ui/spinner";
import { useLeagues } from "@/hooks/useLeagues";
import { debounce } from "@/lib/utils";
import { fetchAllSports } from "@/services/leagues";
import { useQuery } from "@tanstack/react-query";
import { useMemo, useState } from "react";

export default function LeaguesDashboard() {
  const [selectedSport, setSelectedSport] = useState("");
  const {
    isLoading,
    leagues,
    onSearchParamUpdate,
    resetSearchParams,
    strLeagueParam,
  } = useLeagues();
  const { data: { sports = [] } = {} } = useQuery({
    queryKey: ["sports"],
    queryFn: fetchAllSports,
  });
  const sportsOptions = useMemo(
    () => sports.map((sp) => ({ label: sp.strSport, value: sp.idSport })),
    [sports],
  );
  const onChange = debounce((e: React.ChangeEvent<HTMLInputElement>) => {
    onSearchParamUpdate("strLeague", e.target.value);
  }, 500);
  const onSelectChange = (value: string) => {
    setSelectedSport(value);
    onSearchParamUpdate("s", value);
  };

  return (
    <div className="w-full">
      <div className="bg-gradient-to-br from-gray-50 to-gray-100 px-4 w-[90%] mx-auto">
        <header className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white py-8">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold mb-2">Sports Leagues</h1>
            <p className="text-blue-100">
              Discover leagues from around the world
            </p>
          </div>
        </header>
        <div className="py-6 m-2 flex md:flex-row rounded-md flex-col">
          <div>
            <Label htmlFor="name">Search</Label>
            <Input
              id="name"
              placeholder="search by name"
              onChange={onChange}
              className="bg-white mt-2"
              defaultValue={strLeagueParam}
            />
          </div>
          <div className="md:ml-4 ml-0 flex mt-4 md:mt-0 ">
            <div>
              <Select onValueChange={onSelectChange} value={selectedSport}>
                <Label>Sport</Label>
                <SelectTrigger className="w-[180px] mt-2">
                  <SelectValue
                    placeholder="Select a sport"
                    className="text-white"
                  />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Sports</SelectLabel>
                    {sportsOptions.map((opt) => (
                      <SelectItem key={opt.label} value={opt.label}>
                        {opt.label}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            <Button
              className="mt-5.5 ml-4"
              onClick={() => {
                setSelectedSport("");
                resetSearchParams();
              }}
            >
              Reset
            </Button>
          </div>
        </div>
      </div>
      <div className="bg-gray-300 px-4 w-[90%] mx-auto py-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 sm:gap-4 lg:gap-6 rounded-md">
        <div className="col-span-full">
          <Spinner size="large" show={isLoading} />
        </div>
        <LeagueList leagues={leagues} />
      </div>
    </div>
  );
}
