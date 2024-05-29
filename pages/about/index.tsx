import { GetStaticProps } from 'next';
import client from '../../contentful';
import { EntrySkeletonType } from 'contentful';
import {
  IAboutPageFields,
  IHeaderFields,
  ISeoFields,
} from '@/shared/types/contentful';
import { AboutPage, type AboutPageProps } from '@/pages/AboutPage';
import { oneHourOfRevalidationPage } from '@/shared/constants/revalidateTimes';

export const About = ({ aboutPage, headerContent }: AboutPageProps) => {
  return <AboutPage aboutPage={aboutPage} headerContent={headerContent} />;
};

export default About;

export const getStaticProps: GetStaticProps = async () => {
  const seo = await client.getEntries<EntrySkeletonType<ISeoFields>>({
    content_type: 'seo',
    limit: 1,
  });

  const aboutPage = await client.getEntries<
    EntrySkeletonType<IAboutPageFields>
  >({
    content_type: 'aboutPage',
  });

  const header = await client.getEntries<EntrySkeletonType<IHeaderFields>>({
    content_type: 'header',
    limit: 2,
  });

  const [aboutPageContent] = aboutPage.items;

  const [headerContent] = header.items;

  const [seoContent] = seo.items;

  return {
    props: {
      aboutPage: aboutPageContent ?? null,
      headerContent: headerContent ?? null,
      seo: seoContent ?? null,
    },
    revalidate: oneHourOfRevalidationPage,
  };
};
