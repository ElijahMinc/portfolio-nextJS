import type { AppProps } from 'next/app';
import { IHeaderFields } from '@/shared/types/contentful';
import { EntrySkeletonType } from 'contentful';
import { ProgressLayout } from '@/widgets/ProgressLayout';
import { CursorProvider } from '@/shared/lib/context/CursorContext';
import { ThemeProvider } from '@/shared/lib/context/ThemeContext';
import { AppLayout, Header, Seo } from '@/widgets';
import { SeoProps } from '@/shared/types/seo.type';
import { Locales } from '@/shared/constants/locales';

import 'nprogress/nprogress.css'; //styles of nprogress
import '@shared/styles/globals.css';
import 'react-toastify/dist/ReactToastify.css';

export default function Application({
  Component,
  pageProps,
}: AppProps & { headerContent: EntrySkeletonType<IHeaderFields> } & SeoProps) {
  const logoUrl = pageProps?.headerContent?.fields?.logo?.fields?.file?.url;
  const socials = pageProps?.headerContent?.fields?.socials;
  const { title, description, previewImage } = pageProps.seo?.fields;
  const seoPreviewImage = previewImage?.fields?.file?.url;

  return (
    <ProgressLayout>
      <CursorProvider>
        <ThemeProvider>
          <AppLayout
            Seo={
              <Seo
                title={title}
                description={description}
                previewImage={seoPreviewImage}
                locale={Locales.EN}
                isIndexablePage
              />
            }
            Header={<Header logoUrl={logoUrl} socials={socials || []} />}
          >
            <Component {...pageProps} />
          </AppLayout>
        </ThemeProvider>
      </CursorProvider>
    </ProgressLayout>
  );
}
