import type { AppProps } from 'next/app';
import Head from 'next/head';

import '../../styles/index.css';
import 'react-toastify/dist/ReactToastify.css';

export default function App({ Component, pageProps }: AppProps & any) {
  return (
    <>
      <Head>
        <title>Portfolio Ilya Protsenko</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}
