import { MdOutlineDarkMode } from 'react-icons/md';
import { CiSun } from 'react-icons/ci';
import { THEMES } from '@/shared/lib/context/ThemeContext';
import { IconType } from 'react-icons';
import { DetailedHTMLProps, ParamHTMLAttributes } from 'react';

interface ThemeProps
  extends DetailedHTMLProps<
    ParamHTMLAttributes<HTMLOrSVGElement>,
    HTMLOrSVGElement
  > {
  theme: THEMES;
}

export const Theme = ({ theme, ...props }: ThemeProps) => {
  const className = 'ml-10 w-[20px] h-[20px] hover:cursor-pointer';

  return theme === THEMES.LIGHT ? (
    <MdOutlineDarkMode className={className} {...props} />
  ) : (
    <CiSun className={className} {...props} />
  );
};
