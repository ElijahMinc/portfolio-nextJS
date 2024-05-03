import { motion, AnimatePresence } from 'framer-motion';
import { useCursor, useTheme } from '@/shared/hooks';
import { Mulish } from 'next/font/google';
import { mergeClassNames } from '@/shared/lib/classNames/mergeClassNames';
import { useRouter } from 'next/router';
import { ToastContainer } from 'react-toastify';
import cn from 'classnames';
import Head from 'next/head';

const MulishFont = Mulish({
  subsets: ['latin'],
  weight: ['400', '500', '600', '800'],
});

export const AppLayout = ({
  children,
  Header,
}: React.PropsWithChildren & { Header?: React.ReactNode }) => {
  const router = useRouter();
  const { theme } = useTheme();
  const { cursorVariants, cursorBg } = useCursor();

  return (
    <>
      <Head>
        <title>Ilya Protsenko Portfolio</title>
      </Head>
      <div className={mergeClassNames([MulishFont.className])}>
        {Header}

        <AnimatePresence initial={true} mode="wait">
          <main key={router.route}>{children}</main>
        </AnimatePresence>

        <ToastContainer />

        <motion.div
          variants={cursorVariants}
          animate={cursorBg}
          className={cn(
            ` w-[32px] h-[32px] fixed top-[-100%] left-[-100%] lg:top-[0%] lg:left-[0%] pointer-events-none z-50 rounded-full `,
            {
              ['none']: cursorBg,
              ['hidden']: !cursorBg,
              ['opacity-70']: cursorBg === 'default',
            },
          )}
        />
      </div>
    </>
  );
};
