import { useState } from 'react';
import { fellowship } from '../data/fellowship';

import NavBar from '../components/NavBar';
import AllHeroesContainer from '../components/AllHeroesContainer';
import { MissionTeamContainer } from '../components/MissionTeamContainer';
import type { Hero } from '../interface/hero';

const FellowshipPage = () => {
  const [missionTeam, setMissionTeam] = useState<Hero[]>([]);
  const [search, setSearch] = useState('');

  const addToMission = (hero: Hero) => {
    if (!missionTeam.find((h) => h.id === hero.id)) {
      setMissionTeam([...missionTeam, hero]);
    }
  };

  const removeFromMission = (heroId: number) => {
    setMissionTeam(missionTeam.filter((h) => h.id !== heroId));
  };

  const filteredHeroes = fellowship.filter((hero) =>
    hero.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <NavBar />
      <AllHeroesContainer
        search={search}
        setSearch={setSearch}
        filteredHeroes={filteredHeroes}
        missionTeam={missionTeam}
        addToMission={addToMission}
      />
      <MissionTeamContainer
        missionTeam={missionTeam}
        removeFromMission={removeFromMission}
      />
    </div>
  );
};

export default FellowshipPage;
