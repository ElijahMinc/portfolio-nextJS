import { transition1 } from '@/shared/constants/transitions';

export const motionSectionAnimationConfig = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
  },
  exit: {
    opacity: 0,
  },
  transition: transition1,
};

export const motionTitleWrapperAnimationConfig = {
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

export const motionPreviewWorkAnimationConfig = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
  },
  exit: {
    opacity: 0,
  },
  transition: transition1,
};
