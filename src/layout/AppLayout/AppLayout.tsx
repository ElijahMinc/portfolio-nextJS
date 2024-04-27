import { motion, AnimatePresence } from 'framer-motion';
import { useCursor } from '@/shared/hooks';
import { Mulish } from 'next/font/google';
import { mergeClassNames } from '@/shared/lib/classNames/mergeClassNames';
import { useRouter } from 'next/router';
import { FunctionComponent } from 'react';
import { ToastContainer } from 'react-toastify';
import { CursorProvider } from '@/context/CursorContext';
import { Header } from '@/components';

const MulishFont = Mulish({
  subsets: ['latin'],
  weight: ['400', '500', '600', '800'],
});

export const AppLayout = ({
  children,
  headerProps,
}: React.PropsWithChildren & { headerProps: any }) => {
  const router = useRouter();
  const { cursorVariants, cursorBg } = useCursor();
  console.log('cursorVariants', cursorVariants);
  return (
    <div className={mergeClassNames([MulishFont.className])}>
      <Header
        logoUrl={headerProps?.logo?.fields?.file?.url}
        socials={headerProps?.socials || []}
      />

      <AnimatePresence initial={true} mode="wait">
        <main key={router.route}>{children}</main>
      </AnimatePresence>

      <ToastContainer />

      <motion.div
        variants={cursorVariants}
        animate={cursorBg}
        className={`${
          cursorBg === 'none' ? 'hidden' : ''
        } w-[32px] h-[32px] bg-primary fixed top-0 left-0 pointer-events-none z-50 rounded-full`}
      />
    </div>
  );
};

export const withLayout = <
  T extends Record<string, unknown> & { headerContent: any },
>(
  Component: FunctionComponent<T>,
) => {
  return function withLayoutComponent(props: T) {
    return (
      <CursorProvider>
        <AppLayout headerProps={props?.headerContent?.fields}>
          <Component {...props} />
        </AppLayout>
      </CursorProvider>
    );
  };
};
