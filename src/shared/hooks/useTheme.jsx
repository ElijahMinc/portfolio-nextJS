import { useContext } from 'react';
import { ThemeContext } from '@shared/lib/context/ThemeContext';

export const useTheme = () => useContext(ThemeContext);
