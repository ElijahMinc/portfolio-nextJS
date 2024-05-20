import type { AppProps } from 'next/app';
import Router from 'next/router';
import NProgress from 'nprogress'; //nprogress module
import { IHeaderFields } from '@/shared/types/contentful';
import { EntrySkeletonType } from 'contentful';

import 'nprogress/nprogress.css'; //styles of nprogress
import '@shared/styles/globals.css';
import 'react-toastify/dist/ReactToastify.css';
import { ProgressLayout } from '@/widgets/ProgressLayout';
import { CursorProvider } from '@/shared/lib/context/CursorContext';
import { ThemeProvider } from '@/shared/lib/context/ThemeContext';
import { AppLayout, Header } from '@/widgets';

//Route Events.
Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

export default function Application({
  Component,
  pageProps,
}: AppProps & { headerContent: EntrySkeletonType<IHeaderFields> }) {
  const logoUrl = pageProps?.headerContent?.fields?.logo?.fields?.file
    ?.url as string;
  const socials = pageProps?.headerContent?.fields?.socials as any;

  return (
    <ProgressLayout>
      <CursorProvider>
        <ThemeProvider>
          <AppLayout
            Header={<Header logoUrl={logoUrl} socials={socials || []} />}
          >
            <Component {...pageProps} />
          </AppLayout>
        </ThemeProvider>
      </CursorProvider>
    </ProgressLayout>
  );
}
