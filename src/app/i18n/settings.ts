export const defaultLocale = 'en';
export const locales = ['en', 'zh'];

export type Locale = (typeof locales)[number];

export const getLocaleFromPath = (path: string): Locale => {
  const locale = path.split('/')[1];
  return locales.includes(locale as Locale) ? (locale as Locale) : defaultLocale;
};

export const localePrefix = 'as-needed';

export type Messages = {
  homepage: {
    title: string;
    button: string;
  };
  game: {
    backButton: string;
    placeholder: string;
  };
};

export const getMessages = (locale: Locale): Messages => {
  return translations[locale];
};

const translations: Record<Locale, Messages> = {
  en: {
    homepage: {
      title: 'Take me to play a random game.',
      button: 'PRESS',
    },
    game: {
      backButton: 'BACK TO HOME',
      placeholder: 'This is a placeholder. In the future, an actual game will be implemented here.',
    },
  },
  zh: {
    homepage: {
      title: '带我玩一个随机游戏。',
      button: '点击',
    },
    game: {
      backButton: '返回首页',
      placeholder: '这是一个占位页面。将来会在这里实现真正的游戏。',
    },
  },
}; 