import { useContext } from 'react';
import { CursorContext } from '../config/CursorContext';

export const useCursor = () => useContext(CursorContext);
