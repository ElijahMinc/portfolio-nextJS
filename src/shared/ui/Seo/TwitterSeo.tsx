import { SpecificSeoParams } from '@/shared/types/seo.type';

export const TwitterSeo = ({
  title = '',
  description = '',
  imageURL,
}: SpecificSeoParams) => {
  return (
    <>
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageURL} />
    </>
  );
};
