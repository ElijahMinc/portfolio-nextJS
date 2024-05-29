import { GetStaticProps } from 'next';
import client from '../../contentful';
import { EntrySkeletonType } from 'contentful';
import {
  IHeaderFields,
  IPortfolioPageFields,
  ISeoFields,
  IVideosFields,
} from '@/shared/types/contentful';
import { PortfolioPageProps } from '@/pages/PortfolioPage/types/props';
import { PortfolioPage } from '@/pages/PortfolioPage';
import { oneHourOfRevalidationPage } from '@/shared/constants/revalidateTimes';

const Portfolio = ({
  headerContent,
  portfolioPage,
  videosContent,
}: PortfolioPageProps) => {
  return (
    <PortfolioPage
      headerContent={headerContent}
      portfolioPage={portfolioPage}
      videosContent={videosContent}
    />
  );
};

export default Portfolio;

export const getStaticProps: GetStaticProps = async () => {
  const seo = await client.getEntries<EntrySkeletonType<ISeoFields>>({
    content_type: 'seo',
    limit: 1,
  });

  const portfolioPage = await client.getEntries<
    EntrySkeletonType<IPortfolioPageFields>
  >({
    content_type: 'portfolioPage',
  });

  const videosContent = await client.getEntries<
    EntrySkeletonType<IVideosFields>
  >({
    content_type: 'videos',
  });

  const header = await client.getEntries<EntrySkeletonType<IHeaderFields>>({
    content_type: 'header',
  });

  const [headerContent] = header.items;

  const [portfolioPageContent] = portfolioPage.items;
  const [seoContent] = seo.items;

  return {
    props: {
      portfolioPage: portfolioPageContent ?? null,
      videosContent: videosContent ?? null,
      headerContent: headerContent ?? null,
      seo: seoContent ?? null,
    },
    revalidate: oneHourOfRevalidationPage,
  };
};
