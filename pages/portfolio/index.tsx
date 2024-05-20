import { GetStaticProps } from 'next';
import client from '../../contentful';
import { EntrySkeletonType } from 'contentful';
import {
  IHeaderFields,
  IPortfolioPageFields,
  IVideosFields,
} from '@/shared/types/contentful';
import { PortfolioPageProps } from '@/pages/PortfolioPage/types/props';
import { PortfolioPage } from '@/pages/PortfolioPage';

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

  return {
    props: {
      portfolioPage: portfolioPageContent ?? null,
      videosContent: videosContent ?? null,
      headerContent: headerContent ?? null,
    },
    revalidate: 3600,
  };
};
