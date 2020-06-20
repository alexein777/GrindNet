import { GameGuide } from '../models/game-guide';
import { PLAYER_DATABASE } from './players';

export const DOTA2_GUIDES: GameGuide[] = [
  {
    name: 'Lina mid',
    author: PLAYER_DATABASE[0],
    link: 'https://www.dotafire.com/dota-2/guide/killer-lina-mid-24732',
    rating: 4.8,
    dateCreated: '3/3/2015'
  },
  {
    name: 'Storm Spirit counters',
    author: PLAYER_DATABASE[3],
    link: 'https://dota2.gamepedia.com/Storm_Spirit/Counters',
    rating: 5,
    dateCreated: '2/14/2014'
  },
  {
    name: 'Naix essentials',
    author: PLAYER_DATABASE[4],
    link: 'https://www.dotafire.com/dota-2/guide/carrying-lifestealer-1859',
    rating: 2.6,
    dateCreated: '12/1/2016'
  },
  {
    name: 'Anti-mage hard carry',
    author: PLAYER_DATABASE[5],
    link: 'https://www.dotafire.com/dota-2/guide/anti-mage-hard-carry-7300',
    rating: 3.3,
    dateCreated: '8/18/2019'
  },
  {
    name: 'Timbersaw introduction',
    author: PLAYER_DATABASE[12],
    link: 'https://dota2.gamepedia.com/Timbersaw',
    rating: 1.8,
    dateCreated: '5/6/2017'
  },
  {
    name: 'Rubick support',
    author: PLAYER_DATABASE[7],
    link: 'https://www.dotafire.com/dota-2/guide/rubick-cubed-the-side-lane-support-1700',
    rating: 4.9,
    dateCreated: '5/15/2018'
  }
];


