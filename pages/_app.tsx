import type { AppProps } from 'next/app';
import { IHeaderFields } from '@/shared/types/contentful';
import { EntrySkeletonType } from 'contentful';
import { BaseSeoProps, SeoProps } from '@/shared/types/seo.type';
import { Locales } from '@/shared/constants/locales';

import { App } from '@/app/App';

import 'nprogress/nprogress.css'; //styles of nprogress
import '@shared/styles/globals.css';
import 'react-toastify/dist/ReactToastify.css';

export default function Application({
  Component,
  pageProps,
}: AppProps & { headerContent: EntrySkeletonType<IHeaderFields> } & SeoProps) {
  const logoUrl = pageProps?.headerContent?.fields?.logo?.fields?.file?.url;
  const socials = pageProps?.headerContent?.fields?.socials;

  const seo = pageProps?.seo?.fields;
  const seoTitle = seo?.title;
  const seoDescription = seo?.description;
  const seoPreviewImage = seo?.previewImage?.fields?.file?.url;

  const headerConfiguration = {
    logoUrl,
    socials,
  };

  const seoConfiguration: BaseSeoProps = {
    title: seoTitle,
    description: seoDescription,
    previewImage: seoPreviewImage,
    isIndexablePage: true,
    locale: Locales.EN,
  };

  return (
    <App
      seoConfiguration={seoConfiguration}
      headerConfiguration={headerConfiguration}
    >
      <Component {...pageProps} />
    </App>
  );
}
