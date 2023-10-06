import React from 'react';

interface FormProps {
  handleSubmit: any;
}

export const Form = ({
  handleSubmit,
  children,
}: React.PropsWithChildren<FormProps>) => {
  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-y-4">
      {children}
    </form>
  );
};
