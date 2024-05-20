import { IAboutPageFields, IHeaderFields } from '@/shared/types/contentful';
import { EntrySkeletonType } from 'contentful';

export interface AboutPageProps extends Record<string, unknown> {
  aboutPage: EntrySkeletonType<IAboutPageFields>;

  headerContent: EntrySkeletonType<IHeaderFields>;
}
