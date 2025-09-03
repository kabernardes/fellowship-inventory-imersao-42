import { useState } from 'react';
import { fellowship, type Hero } from './data/fellowship.ts';
import './App.css';

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
      <nav>
        <h1>Fellowship Inventory</h1>
      </nav>

      <h2>All Heroes</h2>
      <input
        type="text"
        placeholder="Search heroes..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <ul>
        {filteredHeroes.map((hero) => {
          const alreadyInMission = missionTeam.some((h) => h.id === hero.id);
          return (
            <li key={hero.id}>
              <strong>{hero.name}</strong> ({hero.race}) - {hero.ability}{' '}
              <button
                onClick={() => addToMission(hero)}
                disabled={alreadyInMission}
              >
                {alreadyInMission ? 'Already in Mission' : 'Add to Mission'}
              </button>
            </li>
          );
        })}
      </ul>

      <h2>Mission Team</h2>
      {message && (
        <p
          style={{
            color:
              message.includes('mission begins')
                ? 'green'
                : 'red',
            fontWeight: 'bold',
            marginTop: '1rem',
          }}
        >
          {message}
        </p>
      )}
      <ul>
        {missionTeam.map((hero) => (
          <li key={hero.id}>
            <strong>{hero.name}</strong> ({hero.race}) - {hero.ability}{' '}
            <button onClick={() => removeFromMission(hero.id)}>Remove</button>
          </li>
        ))}
      </ul>

      <button onClick={startMission}>Start Mission</button>
    </div>
  );
};

export default App;
