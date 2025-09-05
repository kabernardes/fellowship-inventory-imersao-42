import type { Hero } from "../interface/hero";

type HeroCardProps = {
  hero: Hero;
  isInMission: boolean;
  onAdd?: (hero: Hero) => void;
  onRemove?: (heroId: number) => void;
};

const HeroCard = ({ hero, isInMission, onAdd, onRemove }: HeroCardProps) => {
  return (
    <li>
      <strong>{hero.name}</strong> ({hero.race}) - {hero.ability}{' '}
      {onAdd && (
        <button onClick={() => onAdd(hero)} disabled={isInMission}>
          {isInMission ? 'Already in Mission' : 'Add to Mission'}
        </button>
      )}
      {onRemove && <button onClick={() => onRemove(hero.id)}>Remove</button>}
    </li>
  );
};

export default HeroCard;
