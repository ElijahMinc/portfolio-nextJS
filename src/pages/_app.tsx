import { CursorProvider } from '@/shared/lib/context/CursorContext';
import { AppLayout, Header } from '@/widgets';
import type { AppProps } from 'next/app';

import '../shared/styles/globals.css';
import 'react-toastify/dist/ReactToastify.css';

export default function App({
  Component,
  pageProps,
}: AppProps & { headerContent: any }) {
  const logoUrl = pageProps?.headerContent?.fields?.logo?.fields?.file?.url;
  const socials = pageProps?.headerContent?.fields?.socials || [];

  return (
    <CursorProvider>
      <AppLayout Header={<Header logoUrl={logoUrl} socials={socials} />}>
        <Component {...pageProps} />
      </AppLayout>
    </CursorProvider>
  );
}
