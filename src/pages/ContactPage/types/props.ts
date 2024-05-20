import { IContactPageFields, IHeaderFields } from '@/shared/types/contentful';
import { EntrySkeletonType } from 'contentful';

export interface ContactPageProps extends Record<string, unknown> {
  contactPage: EntrySkeletonType<IContactPageFields>;

  headerContent: EntrySkeletonType<IHeaderFields>;
}
