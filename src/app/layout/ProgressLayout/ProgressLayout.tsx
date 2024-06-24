import Router, { useRouter } from 'next/router';
import NProgress from 'nprogress'; //nprogress module
import { useCallback, useEffect, useState } from 'react';
import { motion } from 'framer-motion';

import 'nprogress/nprogress.css'; //styles of nprogress

export const ProgressLayout = ({ children }: React.PropsWithChildren) => {
  const router = useRouter();
  const [isLoading, setLoading] = useState(false);

  const start = useCallback(() => {
    NProgress.start();
    setLoading((prevState) => !prevState);
  }, []);

  const done = useCallback(() => {
    NProgress.done();

    setLoading((prevState) => !prevState);
  }, []);

  useEffect(() => {
    //Route Events.
    Router.events.on('routeChangeStart', start);
    Router.events.on('routeChangeComplete', done);
    Router.events.on('routeChangeError', done);

    return () => {
      Router.events.off('routeChangeStart', start);
      Router.events.off('routeChangeComplete', done);
      Router.events.off('routeChangeError', done);
    };
  }, [router.pathname]);

  return (
    <div>
      {isLoading && (
        <motion.div
          initial={{ transform: 'scale(1)' }}
          animate={{ transform: 'scale(1)' }}
          exit={{ transform: 'scale(0)' }}
          className="fixed w-screen h-screen top-0 left-0 z-50 flex justify-center items-center dark:bg-[color:var(--white-color-30)] bg-[color:var(--black-color-30)]"
        >
          <div className="loader" />
        </motion.div>
      )}

      {children}
    </div>
  );
};
