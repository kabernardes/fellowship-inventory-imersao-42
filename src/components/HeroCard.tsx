import type { Hero } from '../interface/hero';

type HeroCardProps = {
  hero: Hero;
  isInMission?: boolean;
  addToMission?: (hero: Hero) => void;
  onRemove?: (heroId: number) => void;
};

const HeroCard = ({
  hero,
  isInMission,
  addToMission,
  onRemove,
}: HeroCardProps) => {
  return (
    <li key={hero.id}>
      <strong>{hero.name}</strong> ({hero.race}) - {hero.ability}{' '}
      {addToMission && (
        <button onClick={() => addToMission(hero)} disabled={isInMission}>
          {isInMission ? 'Already in Mission' : 'Add to Mission'}
        </button>
      )}
      {onRemove && (
        <button onClick={() => onRemove(hero.id)}>Remove</button>
      )}
    </li>
  );
};

export default HeroCard;
