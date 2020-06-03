import { Game } from '../models/game';

export const PC_GAMES: Game[] = [
  {
    name: 'Dota 2',
    console: 'pc',
    type: 'MOBA',
    rating: 5,
    esport: true,
    imageSrc: '../../../assets/images/games/pc/dota2.png'
  },
  {
    name: 'World of Warcraft',
    expansion: 'Shadowlands',
    console: 'pc',
    type: 'MMORPG',
    rating: 4.9,
    esport: false,
    imageSrc: '../../../assets/images/games/pc/wow-shadowlands.png'
  },
  {
    name: 'The Elder Scrolls: Skyrim',
    console: 'pc',
    type: 'RPG',
    rating: 4.8,
    esport: false,
    imageSrc: '../../../assets/images/games/pc/skyrim.png'
  },
  {
    name: 'The Elder Scrolls: Legends',
    console: 'pc',
    type: 'Card game',
    rating: 4.3,
    esport: true,
    imageSrc: '../../../assets/images/games/pc/tes-legends.png'
  },
  {
    name: 'Counter Strike: Global Offensive',
    console: 'pc',
    type: 'First-person shooter',
    rating: 4.8,
    esport: true,
    imageSrc: '../../../assets/images/games/pc/cs-go.jpg'
  },
  {
    name: 'Assassin\'s Creed',
    expansion: 'Valhalla',
    console: 'pc',
    type: 'RPG',
    rating: 4.0,
    esport: false,
    imageSrc: '../../../assets/images/games/pc/ac-valhalla.png'
  },
  {
    name: 'Command and Conquer: Generals',
    expansion: 'Zero Hour',
    console: 'pc',
    type: 'Strategy',
    rating: 3.9,
    esport: false,
    imageSrc: '../../../assets/images/games/pc/generals-zh.jpg'
  }
];


