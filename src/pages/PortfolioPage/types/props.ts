import { IHeaderFields, IPortfolioPageFields } from '@/shared/types/contentful';
import { EntrySkeletonType } from 'contentful';

export interface PortfolioPageProps extends Record<string, unknown> {
  portfolioPage: EntrySkeletonType<IPortfolioPageFields>;
  videosContent: any;

  headerContent: EntrySkeletonType<IHeaderFields>;
}
