import React, { useState } from 'react';
import Chance from 'chance';
import { Global } from '@emotion/react';

import type { Traits } from './types';
import { ReactComponent as DevieBot } from './assets/D_DDeviebot_stuffed.svg';
import { ReactComponent as JohnnyBot } from './assets/D_DJohnnybot_stuffed.svg';
import { ReactComponent as MaggieBot } from './assets/D_DMaggiebot_stuffed.svg';
import { ReactComponent as SwervieBot } from './assets/D_DSwerviebot_stuffed.svg';
import {
  bg,
  bg_rarity,
  base,
  base_rarity,
  color,
  color_rarity,
  arm,
  arm_rarity,
  chest,
  chest_rarity,
} from './rarity';
import { containsObject } from './utils';

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
    chest: 'lightbulb',
    arms: 'thick',
    color: 'gray',
    background: 'blue',
  });

  const generateBot = (e?: React.MouseEvent) => {
    const bot: Traits = {
      base: chance.weighted(base, base_rarity),
      background: chance.weighted(bg, bg_rarity),
      color: chance.weighted(color, color_rarity),
      arms: chance.weighted(arm, arm_rarity),
      chest: chance.weighted(chest, chest_rarity),
    };

    const isUnique = containsObject(bot, combinations);

    if (combinations.length && !isUnique) {
      // If combo already exists, recursively call this function to generate a new bot
      // generateBot();
      console.log('Made it here');
    } else {
      // Else save it to local state, append to combo history, and increment token ID
      setTraits(bot);
      setCombinations([...combinations, bot]);
      setTokenCount(tokenCount + 1);
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
