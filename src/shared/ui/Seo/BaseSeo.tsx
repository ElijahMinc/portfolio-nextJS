import { BaseSeoProps } from '@/shared/types/seo.type';
import Head from 'next/head';

export const BaseSeo = ({
  title,
  description,
  locale = 'en',
  isIndexablePage = true,
}: BaseSeoProps) => {
  return (
    <>
      {!isIndexablePage && <meta name="robots" content="noindex" />}
      <title>{title}</title>
      <meta http-equiv="content-language" content={locale} />
      <meta name="description" content={description} />
    </>
  );
};
