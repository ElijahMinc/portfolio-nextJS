import React from 'react';
import cn from 'classnames';

interface FormInputProps {
  isError?: boolean;
}

export const FormInput = ({
  isError = false,
  ...props
}: FormInputProps | any) => {
  return (
    <input
      className={cn(
        'outline-none border-b border-b-primary h-[60px] bg-transparent font-secondary w-full pl-3 placeholder:text-[#757879] transition-all',
        {
          ['border-b-rose-300']: isError,
        },
      )}
      {...props}
    />
  );
};
