import { HomePage } from '@/pages/HomePage';
import client from '../../contentful';
import {
  IHeaderFields,
  IHomePageFields,
  ISeoFields,
} from '@/shared/types/contentful';
import { EntrySkeletonType } from 'contentful';
import { notFound } from 'next/navigation';
import { withParticles } from '@/shared/hoc/withParticles';

const Index = async () => {
  const homePage = await client.getEntries<EntrySkeletonType<IHomePageFields>>({
    content_type: 'homePage',
    limit: 1,
  });

  const [homePageContent] = homePage.items;

  // return {
  //   props: {
  //     homePage: homePageContent ?? null,
  //     headerContent: headerContent ?? null,
  //     seo: seoContent ?? null,
  //   },
  //   revalidate: oneHourOfRevalidationPage,
  // };

  // return null;
  if (!homePageContent) {
    return notFound();
  }

  return <HomePage homePage={homePageContent as any} />;
};

export default Index;
