import { useCallback, useContext, useEffect } from 'react';
import {
  LOCAL_STORAGE_THEME_KEY,
  THEMES,
  ThemeContext,
} from '../config/ThemeContext';

interface UseThemeResults {
  /** Current theme. */
  readonly theme: THEMES;
  /** Function to switch theme. */
  readonly toggleTheme: () => void;
}

export const useTheme = (): UseThemeResults => {
  const { theme, setTheme } = useContext(ThemeContext);

  const setThemeForHTML = useCallback((theme: THEMES) => {
    const $html = document.querySelector('html');

    $html?.classList.remove(THEMES.DARK);
    $html?.classList.remove(THEMES.LIGHT);
    $html?.classList.add(theme);
  }, []);

  const toggleTheme = useCallback(() => {
    const currentTheme = theme === THEMES.LIGHT ? THEMES.DARK : THEMES.LIGHT;

    setThemeForHTML(currentTheme);
    setTheme?.(currentTheme as THEMES);

    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, currentTheme);
  }, [theme]);

  useEffect(() => {
    const currentTheme =
      localStorage?.getItem(LOCAL_STORAGE_THEME_KEY) || THEMES.DARK;

    setThemeForHTML(currentTheme as THEMES);
    setTheme?.(currentTheme as THEMES);
  }, []);

  return { theme, toggleTheme };
};
