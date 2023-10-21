import { CursorProvider } from '@/shared/lib/context/CursorContext';
import { AppLayout, Header as HeaderWidget } from '@/widgets';
import type { AppProps } from 'next/app';
import { ToastContainer } from 'react-toastify';
import { motion } from 'framer-motion';
import { Socials } from '@/shared/ui';
import { headerNavigationList } from '@/shared/constants/headerNavigationList';
import Link from 'next/link';
import { CgMenuRight } from 'react-icons/cg';
import { IoMdClose } from 'react-icons/io';
import { useState } from 'react';
import '../shared/styles/globals.css';

import 'react-toastify/dist/ReactToastify.css';
import { menuAnimationVariant } from '@/shared/ui/Header/constants/menuAnimationVartiants';

export default function App({ Component, pageProps }: AppProps & any) {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <CursorProvider>
      <AppLayout
        header={
          // <header className=" fixed w-full px-[30px] lg:px-[100px] z-30 h-[100px] lg:h-[140px] flex items-center backdrop-blur-xl">
          //   <div className="w-full flex lg:flex-row justify-between items-center">
          //     <div className="max-w-[200px]">
          //       {/* Logo */}
          //       {
          //         <Link href="/">
          //           <img
          //             width={200}
          //             height={50}
          //             src={
          //               pageProps?.headerContent?.fields?.logo?.fields?.file
          //                 ?.url ?? '/img/header/logo.svg'
          //             }
          //             alt=""
          //           />
          //         </Link>
          //       }
          //     </div>
          //     <nav className="hidden xl:flex gap-x-12 font-semibold">
          //       {headerNavigationList.map(({ name, path }) => (
          //         <Link
          //           key={path}
          //           href={path}
          //           className="text-whiter hover:text-primary transition"
          //         >
          //           {name}
          //         </Link>
          //       ))}
          //     </nav>

          //     <div className="hidden xl:flex ml-24">
          //       <Socials
          //         socials={pageProps?.headerContent?.fields?.socials ?? []}
          //         // handleMouseEnter={mouseEnterHandle}
          //         // handleMouseLeave={mouseLeaveHandle}
          //       />
          //     </div>

          //     <nav className="text-primary xl:hidden">
          //       <div
          //         onClick={() => setOpenMenu(true)}
          //         className="text-3xl cursor-pointer"
          //       >
          //         <CgMenuRight />
          //       </div>

          //       <motion.div
          //         variants={menuAnimationVariant}
          //         initial="hidden"
          //         animate={openMenu ? 'show' : 'hidden'}
          //         className="bg-white shadow-2xl w-full absolute top-0 right-0 max-w-xs h-screen z-20"
          //       >
          //         <div
          //           onClick={() => setOpenMenu(false)}
          //           className="cursor-pointer text-4xl absolute z-30 left-4 top-14 text-primary "
          //         >
          //           <IoMdClose />
          //         </div>

          //         <ul className="h-full flex flex-col justify-center items-center gap-y-8 text-primary font-bold text-3xl font-primary">
          //           {headerNavigationList.map(({ path, name }) => (
          //             <li key={path}>
          //               <Link href={path}>{name}</Link>
          //             </li>
          //           ))}
          //         </ul>
          //       </motion.div>
          //     </nav>
          //     {/* <HeaderMobile>
          //       <ul className="h-full flex flex-col justify-center items-center gap-y-8 text-primary font-bold text-3xl font-primary">
          //         {headerNavigationList.map(({ path, name }) => (
          //           <li key={path}>
          //             <Link href={path}>{name}</Link>
          //           </li>
          //         ))}
          //       </ul>
          //     </HeaderMobile> */}
          //   </div>
          // </header>
          <HeaderWidget
            logoImg={pageProps?.headerContent?.fields?.logo?.fields?.file?.url}
            socials={pageProps?.headerContent?.fields?.socials}
          />
        }
      >
        <Component {...pageProps} />
        <ToastContainer />
      </AppLayout>

      {/* <div
        className={` w-[32px] h-[32px] bg-primary fixed top-0 left-0 pointer-events-none z-50 rounded-full`}
      /> */}
    </CursorProvider>
  );
}
