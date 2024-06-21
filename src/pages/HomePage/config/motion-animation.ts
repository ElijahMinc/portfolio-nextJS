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

export const motionImageWrapperAnimationConfig = {
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

export const motionImageContainerAnimationConfig = {
  whileHover: {
    scale: 1.1,
  },
  transition: transition1,
};
