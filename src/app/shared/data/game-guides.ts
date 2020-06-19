import { GameGuide } from '../models/game-guide';
import { PLAYER_DATABASE } from './players';

export const DOTA2_GUIDES: GameGuide[] = [
  {
    name: 'Lina mid',
    author: PLAYER_DATABASE[0],
    link: 'https://www.dotafire.com/dota-2/guide/killer-lina-mid-24732',
    rating: 3
  },
  {
    name: 'Storm Spirit counters',
    author: PLAYER_DATABASE[3],
    link: 'https://dota2.gamepedia.com/Storm_Spirit/Counters',
    rating: 2
  },
  {
    name: 'Naix essentials',
    author: PLAYER_DATABASE[4],
    link: 'https://www.dotafire.com/dota-2/guide/carrying-lifestealer-1859',
    rating: 5
  },
  {
    name: 'Anti-mage hard carry',
    author: PLAYER_DATABASE[5],
    link: 'https://www.dotafire.com/dota-2/guide/anti-mage-hard-carry-7300',
    rating: 5
  },
  {
    name: 'Timbersaw introduction',
    author: PLAYER_DATABASE[12],
    link: 'https://dota2.gamepedia.com/Timbersaw',
    rating: 1
  },
  {
    name: 'Rubick support',
    author: PLAYER_DATABASE[7],
    link: 'https://www.dotafire.com/dota-2/guide/rubick-cubed-the-side-lane-support-1700',
    rating: 3
  }
];


