import { Global } from '@emotion/react';
import { useState } from 'react';
import './App.css';

// Robot Base
import { ReactComponent as DevieBot } from './assets/D_DDeviebot_stuffed.svg';
import { ReactComponent as JohnnyBot } from './assets/D_DJohnnybot_stuffed.svg';
import { ReactComponent as MaggieBot } from './assets/D_DMaggiebot_stuffed.svg';
import { ReactComponent as SwervieBot } from './assets/D_DSwerviebot_stuffed.svg';

const bots = {
  Devie: <DevieBot />,
  Johnny: <JohnnyBot />,
  Maggie: <MaggieBot />,
  Swervie: <SwervieBot />,
};

interface RobotConfig {
  base: 'Devie' | 'Maggie' | 'Johnny' | 'Swervie';
  arms: string;
  chest: string;
  color: 'gray' | 'red';
  background: string;
}

interface Metadata {
  trait_type: string;
  value: string;
}

function formatMetadata(config: RobotConfig) {
  let attributes: Metadata[] = [];

  for (const [key, value] of Object.entries(config)) {
    attributes.push({ trait_type: key, value });
  }
  return { attributes };
}

function App() {
  const [robot, setRobot] = useState<RobotConfig>({
    base: 'Devie',
    chest: '',
    arms: '',
    color: 'gray',
    background: '',
  });

  const generateBot = (e: any) => {
    console.log('Do generator logic', e);
  };

  return (
    <>
      <Global styles={{}} />
      <div>
        <div>
          <button onClick={generateBot}>Generate</button>
        </div>
        <div>{bots[robot.base]}</div>
      </div>
    </>
  );
}

export default App;
