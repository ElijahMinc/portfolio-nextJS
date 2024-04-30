import { motion, AnimatePresence } from 'framer-motion';
import { useCursor } from '@/shared/hooks';
import { Mulish } from 'next/font/google';
import { mergeClassNames } from '@/shared/lib/classNames/mergeClassNames';
import { useRouter } from 'next/router';
import { ToastContainer } from 'react-toastify';

const MulishFont = Mulish({
  subsets: ['latin'],
  weight: ['400', '500', '600', '800'],
});

export const AppLayout = ({
  children,
  Header,
}: React.PropsWithChildren & { Header?: React.ReactNode }) => {
  const router = useRouter();
  const { cursorVariants, cursorBg } = useCursor();

  return (
    <div className={mergeClassNames([MulishFont.className])}>
      {Header}

      <AnimatePresence initial={true} mode="wait">
        <main key={router.route}>{children}</main>
      </AnimatePresence>

      <ToastContainer />

      <motion.div
        variants={cursorVariants}
        animate={cursorBg}
        className={`${
          cursorBg === 'none' ? 'hidden' : ''
        } w-[32px] h-[32px] bg-primary fixed top-[-100%] left-[-100%] pointer-events-none z-50 rounded-full`}
      />
    </div>
  );
};
