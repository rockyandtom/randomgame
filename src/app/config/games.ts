interface Game {
  id: string;
  path: string;
  name: {
    en: string;
    zh: string;
  };
  description?: {
    en: string;
    zh: string;
  };
  thumbnail?: string;
  tags?: string[];
  difficulty?: 'easy' | 'medium' | 'hard';
  iframeUrl?: string;
}

const games: Game[] = [
  {
    id: 'game1',
    path: '/game/1',
    name: {
      en: 'Celeste',
      zh: 'Celeste'
    },
    description: {
      en: 'Help Madeline survive her journey to the top of Celeste Mountain in this challenging platformer.',
      zh: '帮助 Madeline 在这个具有挑战性的平台游戏中完成她到达 Celeste 山顶的旅程。'
    },
    difficulty: 'hard',
    tags: ['platformer', 'adventure', 'challenging'],
    iframeUrl: 'https://definitelynotblocked.vercel.app/games/celeste/index.html'
  },
  {
    id: 'game2',
    path: '/game/2',
    name: {
      en: 'Game 2',
      zh: '游戏 2'
    },
    description: {
      en: 'Another example game with different mechanics.',
      zh: '另一个带有不同机制的示例游戏。'
    },
    difficulty: 'medium',
    tags: ['strategy', 'casual']
  }
];

export default games; 