import React, { HTMLAttributes } from 'react';
import cn from 'classnames';

interface InputProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  isError?: boolean;
}

export const Input = ({ isError = false, ...props }: InputProps) => (
  <input
    className={cn(
      `outline-none border-b ${!isError ? "border-b-primary" : '' } h-[60px] bg-transparent font-secondary w-full pl-3 placeholder:text-[#757879] transition-all`,
      {
        ['border-b-rose-300']: isError,
      },
    )}
    {...props}
  />
);
