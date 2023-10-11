import { CursorProvider } from '@/shared/lib/context/CursorContext';
import { AppLayout, Header as HeaderWidget } from '@/widgets';
import type { AppProps } from 'next/app';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../shared/styles/globals.css';
import Link from 'next/link';
import { headerNavigationList } from '@/shared/constants/headerNavigationList';
import { Socials } from '@/shared/ui';

export default function App({ Component, pageProps }: AppProps & any) {
  return (
    <CursorProvider>
      <AppLayout
        header={
          <HeaderWidget
            logoImg={pageProps.headerContent?.fields.logo.fields.file.url}
            socials={pageProps.headerContent?.fields.socials}
          />
          // <header className=" fixed w-full px-[30px] lg:px-[100px] z-30 h-[100px] lg:h-[140px] flex items-center backdrop-blur-xl">
          //   <div className="w-full flex lg:flex-row justify-between items-center">
          //     <div className="max-w-[200px]">
          //       <Link href="/">
          //         {/* <img
          //           width={200}
          //           height={50}
          //           src={logoImg ?? '/img/header/logo.svg'}
          //           alt=""
          //         /> */}
          //       </Link>
          //     </div>

          //     {headerNavigationList.map(({ name, path }) => (
          //       <Link
          //         key={path}
          //         href={path}
          //         className="text-[#696c6d] hover:text-primary transition"
          //       >
          //         {name}
          //       </Link>
          //     ))}
          //     {/* children */}

          //     <div className="hidden xl:flex ml-24">
          //       <Socials socials={[]} />
          //     </div>
          //     {/* mobileVersion */}
          //   </div>
          // </header>
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
