import { SpecificSeoParams } from '@/shared/types/seo.type';

export const OgSeo = ({
  title = '',
  description = '',
  imageURL,
  locale = 'en',
}: SpecificSeoParams) => {
  return (
    <>
      <link rel="canonical" href={imageURL} />

      <meta property="og:image" content={imageURL} />
      <meta property="og:image:secure_url" content={imageURL} />
      <meta property="og:image:width" content="256" />
      <meta property="og:image:height" content="256" />
      <meta property="og:image:alt" content="bot-256" />
      <meta property="og:image:type" content="image/jpg" />
      <meta property="og:url" content={imageURL} />
      <meta property="og:locale" content={locale} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:site_name" content="Wannacook.ai" />
    </>
  );
};
