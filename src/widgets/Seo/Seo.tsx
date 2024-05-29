import { BaseSeoProps } from '@/shared/types/seo.type';
import { BaseSeo, OgSeo, TwitterSeo } from '@/shared/ui';
import Head from 'next/head';

export const Seo = ({
  title,
  description,
  previewImage,
  isIndexablePage,
  locale,
}: BaseSeoProps) => {
  return (
    <Head>
      <BaseSeo
        title={title}
        description={description}
        isIndexablePage={isIndexablePage}
        locale={locale}
      />
      <TwitterSeo
        title={title}
        description={description}
        imageURL={`https:${previewImage}`}
        locale={locale}
      />
      <OgSeo
        title={title}
        description={description}
        imageURL={`https:${previewImage}`}
        locale={locale}
      />
    </Head>
  );
};
