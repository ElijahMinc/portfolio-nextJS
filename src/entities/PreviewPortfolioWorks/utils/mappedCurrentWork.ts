import { NullableArray } from '@/shared/types/nullable.type';
import { IPreviewWorkLinks } from '../ui/PreviewPortfolioWorksList';

export const getMappepWorks = (
  works: {
    title: string | null;
    description: string | null;
    link: string;
  }[],
) =>
  works.map((w) => ({
    title: w?.title || '',
    description: w?.description || '',
    link: w?.link || '',
  }));

export const getMappedCurrentWork = (work: {
  title: string | null;
  description: string | null;
  link: string;
}) => ({
  title: work?.title || '',
  description: work?.description || '',
  link: work?.link || '',
});
