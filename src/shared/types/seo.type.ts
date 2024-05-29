import { EntrySkeletonType } from 'contentful';
import { ISeoFields } from './contentful';

export interface SpecificSeoParams extends Omit<ISeoFields, 'previewImage'> {
  locale: string;
  imageURL: string;
}

export interface SeoProps {
  seo: EntrySkeletonType<ISeoFields>;
}

export interface BaseSeoProps extends ISeoFields {
  isIndexablePage: boolean;
  locale: string;
}
