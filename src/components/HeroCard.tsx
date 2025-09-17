import type { Hero } from '../interface.ts/hero';

type HeroCardProps = {
  hero: Hero;
  isInMission?: boolean;
  addToMission?: (hero: Hero) => void;
  removeFromMission?: (heroId: number) => void;
};

const HeroCard = ({
  hero,
  isInMission,
  addToMission,
  removeFromMission,
}: HeroCardProps) => {
  return (
    <li key={hero.id}>
      <strong>{hero.name}</strong> ({hero.race}) - {hero.ability}{' '}
      {addToMission && (
        <button onClick={() => addToMission(hero)} disabled={isInMission}>
          {isInMission ? 'Already in Mission' : 'Add to Mission'}
        </button>
      )}
      {removeFromMission && (
        <button onClick={() => removeFromMission(hero.id)}>Remove</button>
      )}
    </li>
  );
};

export default HeroCard;
