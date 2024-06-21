import { transition1 } from '@/shared/constants/transitions';

export const motionImageWrapperAnimationConfig = {
  initial: {
    opacity: 0,
    x: '-50%',
  },
  animate: {
    opacity: 1,
    x: 0,
  },
  exit: {
    opacity: 0,
    x: '-50%',
  },
  transition: transition1,
};
