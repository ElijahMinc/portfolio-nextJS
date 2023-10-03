import { CursorProvider } from '@/shared/lib/context/CursorContext';
import { AppLayout, Header as HeaderWidget } from '@/widgets';
import type { AppProps } from 'next/app';

import '../shared/styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CursorProvider>
      <AppLayout header={<HeaderWidget />} footer={<footer></footer>}>
        <Component {...pageProps} />
      </AppLayout>
    </CursorProvider>
  );
}
