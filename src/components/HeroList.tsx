import type { Hero } from '../interface.ts/hero';
import HeroCard from './HeroCard';

type HeroListProps = {
  filteredHeroes: Hero[];
  missionTeam: Hero[];
  addToMission: (hero: Hero) => void;
}

const HeroList = ({
  filteredHeroes,
  missionTeam,
  addToMission,
}: HeroListProps) => {
  return (
    <ul>
      {filteredHeroes.map((hero) => {
        const alreadyInMission = missionTeam.some((h) => h.id === hero.id);
        return (
          <HeroCard
            hero={hero}
            isInMission={alreadyInMission}
            addToMission={addToMission}
          />
        );
      })}
    </ul>
  );
};

export default HeroList;
