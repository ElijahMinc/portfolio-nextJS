import { ContactPage, ContactPageProps } from '@/pages/ContactPage';
import { GetStaticProps } from 'next';
import client from '../../contentful';
import { EntrySkeletonType } from 'contentful';
import { IContactPageFields, IHeaderFields } from '@/shared/types/contentful';

const Contact = ({ contactPage, headerContent }: ContactPageProps) => {
  return (
    <ContactPage contactPage={contactPage} headerContent={headerContent} />
  );
};

export default Contact;

export const getStaticProps: GetStaticProps = async () => {
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

  return {
    props: {
      contactPage: contactPageContent ?? null,
      headerContent: headerContent ?? null,
    },
    revalidate: 10,
  };
};
