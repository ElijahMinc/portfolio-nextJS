import { CursorProvider } from '@/shared/lib/context/CursorContext';
import { AppLayout, Header as HeaderWidget } from '@/widgets';
import type { AppProps } from 'next/app';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../shared/styles/globals.css';

export default function App({ Component, pageProps }: AppProps & any) {
  return (
    <CursorProvider>
      <AppLayout
        header={
          <HeaderWidget
            logoImg={pageProps.headerContent?.fields.logo.fields.file.url}
            socials={pageProps.headerContent?.fields.socials}
          />
        }
        footer={<footer></footer>}
      >
        {/* <div
    
      className="w-[32px] h-[32px] bg-primary fixed top-0 left-0 pointer-events-none z-50 rounded-full"
    /> */}
        <Component {...pageProps} />
        <ToastContainer />
      </AppLayout>
    </CursorProvider>
  );
}
