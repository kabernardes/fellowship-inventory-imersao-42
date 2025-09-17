import type { Hero } from '../interface/hero';
import HeroCard from './HeroCard';

type MissionTeamListProps = {
  heroes: Hero[];
  onRemove: (heroId: number) => void;
};

const MissionTeamList = ({ heroes, onRemove }: MissionTeamListProps) => {
  return (
    <ul>
      {heroes.map((hero) => (
        <HeroCard
          key={hero.id}
          hero={hero}
          isInMission={true}
          onRemove={onRemove}
        />
      ))}
    </ul>
  );
};

export default MissionTeamList;
