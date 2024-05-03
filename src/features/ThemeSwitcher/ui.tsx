import { Theme } from '@/entities/Theme';
import { useCursor, useTheme } from '@/shared/hooks';
import { DetailedHTMLProps, ParamHTMLAttributes } from 'react';

interface ThemeSwitcherProps
  extends DetailedHTMLProps<
    ParamHTMLAttributes<HTMLOrSVGElement>,
    HTMLOrSVGElement
  > {}

export const ThemeSwitcher = ({ ...props }: ThemeSwitcherProps) => {
  const { mouseEnterHandle, mouseLeaveHandle } = useCursor();
  const { theme, toggleTheme } = useTheme();

  return (
    <Theme
      onMouseEnter={mouseEnterHandle}
      onMouseLeave={mouseLeaveHandle}
      theme={theme}
      onClick={toggleTheme}
      {...props}
    />
  );
};
