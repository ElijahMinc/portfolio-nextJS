import { GetStaticProps } from 'next';
import client from '../contentful';
import { EntrySkeletonType } from 'contentful';
import {
  IHeaderFields,
  IHomePageFields,
  ISeoFields,
} from '@/shared/types/contentful';
import { HomePage, type HomePageProps } from '@/pages/HomePage';
import { oneHourOfRevalidationPage } from '@/shared/constants/revalidateTimes';

const Home = ({ headerContent, homePage }: HomePageProps) => {
  return <HomePage homePage={homePage} headerContent={headerContent} />;
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const seo = await client.getEntries<EntrySkeletonType<ISeoFields>>({
    content_type: 'seo',
    limit: 1,
  });

  const homePage = await client.getEntries<EntrySkeletonType<IHomePageFields>>({
    content_type: 'homePage',
    limit: 1,
  });

  const header = await client.getEntries<EntrySkeletonType<IHeaderFields>>({
    content_type: 'header',
    limit: 2,
  });

  const [homePageContent] = homePage.items;

  const [headerContent] = header.items;

  const [seoContent] = seo.items;

  return {
    props: {
      homePage: homePageContent ?? null,
      headerContent: headerContent ?? null,
      seo: seoContent ?? null,
    },
    revalidate: oneHourOfRevalidationPage,
  };
};
