import { createContext } from 'react';

export enum THEMES {
  LIGHT = 'light',
  DARK = 'dark',
}

export interface IThemeContext {
  theme: THEMES;
  setTheme?: (theme: THEMES) => void;
}

export const ThemeContext = createContext<IThemeContext>({
  theme: THEMES.DARK,
  setTheme: () => {},
});

export const LOCAL_STORAGE_THEME_KEY = 'theme';
