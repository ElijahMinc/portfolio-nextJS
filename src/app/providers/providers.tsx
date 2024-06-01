import { CursorProvider } from '@/entities/Cursor';
import { ThemeProvider } from '@/entities/Theme';
import { FC } from 'react';

interface IProviders {
  /** Content that will be wrapped by providers. */
  readonly children: JSX.Element;
}

export const Providers: FC<IProviders> = ({ children }) => {
  return (
    <ThemeProvider>
      <CursorProvider>{children}</CursorProvider>
    </ThemeProvider>
  );
};
