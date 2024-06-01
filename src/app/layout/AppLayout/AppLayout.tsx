import { AnimatePresence } from 'framer-motion';
import { Mulish } from 'next/font/google';
import { mergeClassNames } from '@/shared/lib/classNames/mergeClassNames';
import { useRouter } from 'next/router';
import { ToastContainer } from 'react-toastify';
import { ThemeSwitcher } from '@/features';

const MulishFont = Mulish({
  subsets: ['latin'],
  weight: ['400', '500', '600', '800'],
});

export const AppLayout = ({
  children,
  Header,
  Seo,
}: React.PropsWithChildren & {
  Header?: React.ReactNode;
  Seo?: React.ReactNode;
}) => {
  const router = useRouter();

  return (
    <>
      {Seo}
      <div className={mergeClassNames([MulishFont.className])}>
        <ThemeSwitcher />
        {Header}
        <AnimatePresence initial={true} mode="wait">
          <main key={router.route}>{children}</main>
        </AnimatePresence>
        <ToastContainer />
      </div>
    </>
  );
};
