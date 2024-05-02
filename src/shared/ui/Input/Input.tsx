import React, { HTMLAttributes } from 'react';
import cn from 'classnames';

interface InputProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  isError?: boolean;
}

export const Input = ({ isError = false, className, ...props }: InputProps) => (
  <input
    className={cn(
      className,
      `outline-none border-b  h-[60px] bg-transparent font-secondary w-full pl-3 transition-all`,
      {
        ['border-b-rose-300']: isError,
        ['border-b-primary']: !isError,
      },
    )}
    {...props}
  />
);
