import { ContactPage, ContactPageProps } from '@/pages/ContactPage';
import { GetStaticProps } from 'next';
import client from '../../contentful';
import { EntrySkeletonType } from 'contentful';
import {
  IContactPageFields,
  IHeaderFields,
  ISeoFields,
} from '@/shared/types/contentful';
import { oneHourOfRevalidationPage } from '@/shared/constants/revalidateTimes';

const Contact = ({ contactPage, headerContent }: ContactPageProps) => {
  return (
    <ContactPage contactPage={contactPage} headerContent={headerContent} />
  );
};

export default Contact;

export const getStaticProps: GetStaticProps = async () => {
  const seo = await client.getEntries<EntrySkeletonType<ISeoFields>>({
    content_type: 'seo',
    limit: 1,
  });

  const contactPage = await client.getEntries<
    EntrySkeletonType<IContactPageFields>
  >({
    content_type: 'contactPage',
  });
  const header = await client.getEntries<EntrySkeletonType<IHeaderFields>>({
    content_type: 'header',
  });

  const [contactPageContent] = contactPage.items;

  const [headerContent] = header.items;

  const [seoContent] = seo.items;

  return {
    props: {
      contactPage: contactPageContent ?? null,
      headerContent: headerContent ?? null,
      seo: seoContent ?? null,
    },
    revalidate: oneHourOfRevalidationPage,
  };
};
