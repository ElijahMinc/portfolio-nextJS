import { GetStaticProps } from 'next';
import client from '../../contentful';
import { EntrySkeletonType } from 'contentful';
import { IAboutPageFields, IHeaderFields } from '@/shared/types/contentful';
import { AboutPage, type AboutPageProps } from '@/pages/AboutPage';
import { oneHourOfRevalidationPage } from '@/shared/constants/revalidateTimes';

export const About = ({ aboutPage, headerContent }: AboutPageProps) => {
  return <AboutPage aboutPage={aboutPage} headerContent={headerContent} />;
};

export default About;

export const getStaticProps: GetStaticProps = async () => {
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

  return {
    props: {
      aboutPage: aboutPageContent ?? null,
      headerContent: headerContent ?? null,
    },
    revalidate: oneHourOfRevalidationPage,
  };
};
