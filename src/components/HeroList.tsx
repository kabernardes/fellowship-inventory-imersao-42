import type { Hero } from '../interface/hero';
import HeroCard from './HeroCard';

type HeroListProps = {
  heroes: Hero[];
  missionTeam: Hero[];
  onAdd: (hero: Hero) => void;
};

const HeroList = ({ heroes, missionTeam, onAdd }: HeroListProps) => {
  return (
    <ul>
      {heroes.map((hero) => (
        <HeroCard
          key={hero.id}
          hero={hero}
          isInMission={missionTeam.some((h) => h.id === hero.id)}
          onAdd={onAdd}
        />
      ))}
    </ul>
  );
};

export default HeroList;
