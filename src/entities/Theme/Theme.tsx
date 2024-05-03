import { MdOutlineDarkMode } from 'react-icons/md';
import { CiSun } from 'react-icons/ci';
import { THEMES } from '@/shared/lib/context/ThemeContext';
import { DetailedHTMLProps, ParamHTMLAttributes } from 'react';
import cn from 'classnames';
interface ThemeProps
  extends DetailedHTMLProps<
    ParamHTMLAttributes<HTMLOrSVGElement>,
    HTMLOrSVGElement
  > {
  theme: THEMES;
}

export const Theme = ({ theme, className, ...props }: ThemeProps) => {
  const classNames = cn(className, ' w-[40px] h-[40px] hover:cursor-pointer');

  return theme === THEMES.LIGHT ? (
    <MdOutlineDarkMode className={classNames} {...props} />
  ) : (
    <CiSun className={classNames} {...props} />
  );
};
