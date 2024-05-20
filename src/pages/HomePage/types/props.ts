import { IHeaderFields, IHomePageFields } from '@/shared/types/contentful';
import { EntrySkeletonType } from 'contentful';

export interface HomePageProps extends Record<string, unknown> {
  homePage: EntrySkeletonType<IHomePageFields>;

  headerContent: EntrySkeletonType<IHeaderFields>;
}
