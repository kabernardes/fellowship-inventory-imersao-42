import { useState } from 'react';
import type { Hero } from '../interface/hero';

type MissionControlProps = {
  missionTeam: Hero[];
};

const MissionControl = ({ missionTeam }: MissionControlProps) => {
  const [message, setMessage] = useState('');

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

  return (
    <div>
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
      <button onClick={startMission}>Start Mission</button>
    </div>
  );
};

export default MissionControl;
