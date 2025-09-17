import { useState } from 'react';
import { fellowship } from './data/fellowship.ts';
import './App.css';
import type { Hero } from './interface.ts/hero.ts';
import Navbar from './components/Navbar.tsx';
import SearchBar from './components/SearchBar.tsx';
import HeroCard from './components/HeroCard.tsx';
import HeroList from './components/HeroList.tsx';
import AllHeroesContainer from './components/AllHeroesContainer.tsx';

const App = () => {
  const [missionTeam, setMissionTeam] = useState<Hero[]>([]);
  const [search, setSearch] = useState('');
  const [message, setMessage] = useState('');

  const addToMission = (hero: Hero) => {
    if (!missionTeam.find((h) => h.id === hero.id)) {
      setMissionTeam([...missionTeam, hero]);
    }
  };

  const removeFromMission = (heroId: number) => {
    setMessage('');
    setMissionTeam(missionTeam.filter((h) => h.id !== heroId));
  };

  const startMission = () => {
    const hasHobbit = missionTeam.some((h) => h.race === 'Hobbit');
    const hasWizard = missionTeam.some((h) => h.race === 'Wizard');

    if (missionTeam.length === 0) {
      setMessage('You must select heroes before starting the mission.');
    } else if (!hasHobbit || !hasWizard) {
      setMessage('A mission requires at least one Hobbit and one Wizard!');
    } else {
      setMessage('The mission begins! Good luck, Fellowship!');
    }
  };

  const filteredHeroes = fellowship.filter((hero) =>
    hero.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <Navbar />
      <AllHeroesContainer
        search={search}
        setSearch={setSearch}
        filteredHeroes={filteredHeroes}
        missionTeam={missionTeam}
        addToMission={addToMission}
      />

      <h2>Mission Team</h2>
      {message && (
        <p
          style={{
            color: message.includes('mission begins') ? 'green' : 'red',
            fontWeight: 'bold',
            marginTop: '1rem',
          }}
        >
          {message}
        </p>
      )}
      <ul>
        {missionTeam.map((hero) => (
          <HeroCard
            hero={hero}
            removeFromMission={removeFromMission}
          />
        ))}
      </ul>

      <button onClick={startMission}>Start Mission</button>
    </div>
  );
};

export default App;
