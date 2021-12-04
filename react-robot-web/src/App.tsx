import { useState } from 'react';
import { Global } from '@emotion/react';
import './App.css';

// Robot Base
import { ReactComponent as DevieBot } from './assets/D_DDeviebot_stuffed.svg';
import { ReactComponent as JohnnyBot } from './assets/D_DJohnnybot_stuffed.svg';
import { ReactComponent as MaggieBot } from './assets/D_DMaggiebot_stuffed.svg';
import { ReactComponent as SwervieBot } from './assets/D_DSwerviebot_stuffed.svg';

export const bots = {
  Devie: <DevieBot />,
  Johnny: <JohnnyBot />,
  Maggie: <MaggieBot />,
  Swervie: <SwervieBot />,
};

interface Traits {
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

function formatMetadata(config: Traits) {
  let attributes: Metadata[] = [];

  for (const [key, value] of Object.entries(config)) {
    attributes.push({ trait_type: key, value });
  }
  return { attributes };
}

function App() {
  const [tokenCount, setTokenCount] = useState(0);
  const [combinations, setCombinations] = useState<Traits[]>([]);
  const [traits, setTraits] = useState<Traits>({
    base: 'Devie',
    chest: 'lightbulb',
    arms: 'thick',
    color: 'gray',
    background: 'blue',
  });

  const generateBot = (e: any) => {
    console.log('Do generator logic', e);
    const robot = traits;

    // Ensure combo is unique
    if (!combinations.indexOf(robot)) {
    } else {
    }
  };

  return (
    <>
      <Global styles={{}} />
      <div id="workspace">
        <div id="dock">
          <button onClick={generateBot}>Generate</button>
          <div className="traits"></div>
        </div>
        <div id="art-preview">{bots[traits.base]}</div>
      </div>
    </>
  );
}

export default App;
