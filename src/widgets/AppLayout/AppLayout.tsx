'use client';
import { AnimatePresence } from '@shared/lib/animation';
import { Mulish } from 'next/font/google';
import { mergeClassNames } from '@/shared/lib/classNames/mergeClassNames';
import { ToastContainer } from 'react-toastify';
import { usePathname } from 'next/navigation';
import { ThemeSwitcher } from '@/features';
// import { ThemeSwitcher } from '@/features';

const MulishFont = Mulish({
  subsets: ['latin'],
  weight: ['400', '500', '600', '800'],
});

export const AppLayout = ({
  children,
  Header,
}: React.PropsWithChildren & {
  Header?: React.ReactNode;
}) => {
  const pathname = usePathname();

  return (
    <>
      <div className={mergeClassNames([MulishFont.className])}>
        <ThemeSwitcher />
        {Header}
        <AnimatePresence initial={true} mode="wait">
          <main key={pathname}>{children}</main>
        </AnimatePresence>
        <ToastContainer />
      </div>
    </>
  );
};
