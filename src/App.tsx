import React, { useState } from 'react';
import Chance from 'chance';
import { Global } from '@emotion/react';

import { ReactComponent as DevieBot } from '../artwork/svg/stuffed/D_DDeviebot_stuffed.svg';
import { ReactComponent as JohnnyBot } from '../artwork/svg/stuffed/D_DJohnnybot_stuffed.svg';
import { ReactComponent as MaggieBot } from '../artwork/svg/stuffed/D_DMaggiebot_stuffed.svg';
import { ReactComponent as SwervieBot } from '../artwork/svg/stuffed/D_DSwerviebot_stuffed.svg';
import { background, base, color, arms, chest } from './rarity';
import { containsObject, formatMetadata } from './utils';
import type { Traits } from './types';

var chance = new Chance();

const bots = {
  Devie: <DevieBot />,
  Johnny: <JohnnyBot />,
  Maggie: <MaggieBot />,
  Swervie: <SwervieBot />,
};

function App() {
  const [tokenCount, setTokenCount] = useState(0);
  const [combinations, setCombinations] = useState<Traits[]>([]);
  const [traits, setTraits] = useState<Traits>({
    base: 'Devie',
    background: '#d0e4ff',
    color: 'gray',
    arms: 'arm1',
    chest: 'default',
  });

  /**
   * This function uses rarity tables to create a set of Traits and confirm
   * that the combination is unique
   */

  const generateBot = (e?: React.MouseEvent) => {
    const bot: Traits = {
      base: chance.weighted(base.variants, base.rarity),
      background: chance.weighted(background.variants, background.rarity),
      color: chance.weighted(color.variants, color.rarity),
      arms: chance.weighted(arms.variants, arms.rarity),
      chest: chance.weighted(chest.variants, chest.rarity),
    };

    const isUnique = !containsObject(bot, combinations);

    if (combinations.length && !isUnique) {
      // If combo already exists, recursively call this function to generate a new bot
      generateBot();
    } else {
      // Else save it to local state, append to combo history, and increment token ID
      setTraits(bot);
      setCombinations([...combinations, bot]);
      setTokenCount(tokenCount + 1);
    }
  };

  return (
    <>
      <Global styles={{ svg: { background: traits.background } }} />
      <div id="workspace">
        <div id="dock">
          <h1>Robot Generator</h1>
          <button className="generate-btn" onClick={generateBot}>
            Generate
          </button>
          <div className="robot-count">
            <h4>Unique Robots:</h4>
            <div>{tokenCount}</div>
          </div>
          <div className="traits">
            <h4>Current Traits:</h4>
            <div className="trait-container">
              <pre>{JSON.stringify(traits, null, ' ')}</pre>
            </div>
          </div>
          <div className="metadata">
            <h4>Metadata:</h4>
            <div className="trait-container">
              <pre>{JSON.stringify(formatMetadata(traits), null, ' ')}</pre>
            </div>
          </div>
        </div>
        <div id="art-preview">
          <div className="art-container">{bots[traits.base]}</div>
        </div>
      </div>
    </>
  );
}

export default App;
