import { useState } from 'react';
import { fellowship } from './data/fellowship.ts';
import './App.css';
import type { Hero } from './interface/hero.ts';
import Navbar from './components/Navbar.tsx';
import SearchBar from './components/SearchBar.tsx';
import HeroCard from './components/HeroCard.tsx';

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

      <h2>All Heroes</h2>
      <SearchBar
        value={search}
        onChange={setSearch}
        placeholder="Search heroes..."
      />
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
          <HeroCard hero={hero} onRemove={removeFromMission} />
        ))}
      </ul>

      <button onClick={startMission}>Start Mission</button>
    </div>
  );
};

export default App;
