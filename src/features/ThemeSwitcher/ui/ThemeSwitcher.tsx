import { useCursor } from '@/entities/Cursor';
import { Theme } from '@/entities/Theme';
import { useTheme } from '@/entities/Theme/lib/useTheme';
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
      className="fixed left-[25px] top-[20px] lg:left-[100px] lg:top-[30px] z-50 hover:rotate-180 transition-all"
      onMouseEnter={mouseEnterHandle}
      onMouseLeave={mouseLeaveHandle}
      theme={theme}
      onClick={toggleTheme}
      {...props}
    />
  );
};
