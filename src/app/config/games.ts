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
}

const games: Game[] = [
  {
    id: 'game1',
    path: '/game/1',
    name: {
      en: 'Game 1',
      zh: '游戏 1'
    },
    description: {
      en: 'Simple example game with basic mechanics.',
      zh: '带有基础机制的简单示例游戏。'
    },
    difficulty: 'easy',
    tags: ['puzzle', 'casual']
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