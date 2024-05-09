import {
  documentToHtmlString,
  Options,
} from '@contentful/rich-text-html-renderer';
import { Document } from '@contentful/rich-text-types';

export const getDocumentToHtmlString = (
  document?: Document,
  options?: Options,
) => {
  if (!document) return null;

  return documentToHtmlString(document, options);
};
