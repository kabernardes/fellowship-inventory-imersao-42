import type { Hero } from "../interface.ts/hero";
import HeroList from "./HeroList";
import SearchBar from "./SearchBar";

type AllHeroesContainerProps = {
  search: string;
  setSearch: (value: string) => void;
  filteredHeroes: Hero[];
  missionTeam: Hero[];
  addToMission: (hero: Hero) => void;
}

const AllHeroesContainer = ({
  search,
  setSearch,
  filteredHeroes,
  missionTeam,
  addToMission,
}: AllHeroesContainerProps) => {
  return (
    <>
      <h2>All Heroes</h2>
      <SearchBar
        value={search}
        onChange={setSearch}
        placeholder="Search heroes..."
      />
      <HeroList
        filteredHeroes={filteredHeroes}
        missionTeam={missionTeam}
        addToMission={addToMission}
      />
    </>
  );
};

export default AllHeroesContainer;
