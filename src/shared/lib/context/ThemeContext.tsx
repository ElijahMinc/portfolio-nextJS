import { THEMES } from '@/shared/constants/themes';
import React, {
  useState,
  useEffect,
  createContext,
  useRef,
  useCallback,
  useMemo,
} from 'react';


export const ThemeContext = createContext<any>({
  theme: THEMES.DARK,
  toggleTheme: () => {},
});

export const ThemeProvider = ({ children }: React.PropsWithChildren) => {
  const [theme, setTheme] = useState<string | null>(null);

  const setThemeForHTML = useCallback((theme: string) => {
    const $html = document.querySelector('html');
    $html?.classList.remove(THEMES.DARK);
    $html?.classList.remove(THEMES.LIGHT);
    $html?.classList.add(theme);
  }, []);

  const toggleTheme = useCallback(() => {
    const currentTheme = theme === THEMES.LIGHT ? THEMES.DARK : THEMES.LIGHT;
    setThemeForHTML(currentTheme);
    setTheme(currentTheme);
    localStorage.setItem('theme', currentTheme);
  }, [theme]);

  useEffect(() => {
    const currentTheme = localStorage?.getItem('theme') || THEMES.DARK;

    setThemeForHTML(currentTheme);
    setTheme(currentTheme);
  }, []);

  const value = useMemo(
    () => ({
      theme,
      toggleTheme,
    }),
    [theme],
  );

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};
