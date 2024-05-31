'use client';

import { useContext } from 'react';
import { CursorContext } from '@shared/lib/context/CursorContext';

export const useCursor = () => useContext(CursorContext);
