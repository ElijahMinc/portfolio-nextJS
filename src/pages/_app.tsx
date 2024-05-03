import { CursorProvider } from '@/shared/lib/context/CursorContext';
import { AppLayout, Header } from '@/widgets';
import type { AppProps } from 'next/app';
import Router from 'next/router';
import NProgress from 'nprogress'; //nprogress module

import 'nprogress/nprogress.css'; //styles of nprogress
import '../shared/styles/globals.css';
import 'react-toastify/dist/ReactToastify.css';
import { ProgressLayout } from '@/widgets/ProgressLayout';
import { ThemeProvider } from '@/shared/lib/context/ThemeContext';

//Route Events.
Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

export default function App({
  Component,
  pageProps,
}: AppProps & { headerContent: any }) {
  const logoUrl = pageProps?.headerContent?.fields?.logo?.fields?.file?.url;
  const socials = pageProps?.headerContent?.fields?.socials || [];

  return (
    <ProgressLayout>
      <ThemeProvider>
        <CursorProvider>
          <AppLayout Header={<Header logoUrl={logoUrl} socials={socials} />}>
            <Component {...pageProps} />
          </AppLayout>
        </CursorProvider>
      </ThemeProvider>
    </ProgressLayout>
  );
}
