import { Variants } from 'framer-motion';
import { createContext } from 'react';

export type ICursorBg = 'default' | 'none' | 'text';

export interface ICursorContext {
  cursorVariants: Variants;
  cursorBg: ICursorBg;
  mouseEnterHandle: () => void;
  mouseLeaveHandle: () => void;
  setCursorDefault: () => void;
  setCursorNone: () => void;
}

export const CursorContext = createContext<ICursorContext>({
  cursorVariants: {},
  cursorBg: 'default',
  mouseEnterHandle: () => {},
  mouseLeaveHandle: () => {},
  setCursorDefault: () => {},
  setCursorNone: () => {},
});
