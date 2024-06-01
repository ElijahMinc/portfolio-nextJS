import { FC, useMemo, useState } from 'react';
import {
  LOCAL_STORAGE_THEME_KEY,
  THEMES,
  ThemeContext,
} from '../config/ThemeContext';

const defaultTheme = THEMES.DARK;

interface IThemeProvider {
  readonly children: JSX.Element;
}

export const ThemeProvider: FC<IThemeProvider> = ({ children }) => {
  const [theme, setTheme] = useState<THEMES>(defaultTheme);

  const defaultValue = useMemo(
    () => ({
      theme,
      setTheme,
    }),
    [theme],
  );

  return (
    <ThemeContext.Provider value={defaultValue}>
      {children}
    </ThemeContext.Provider>
  );
};
