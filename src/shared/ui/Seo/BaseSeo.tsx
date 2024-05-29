import { BaseSeoProps } from '@/shared/types/seo.type';

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
      <meta httpEquiv="content-language" content={locale} />
      <meta name="description" content={description} />
    </>
  );
};
