import React from 'react';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { transition1 } from '@/shared/constants/transitions';
import { useCursor } from '@/shared/hooks';
import { GetStaticProps } from 'next';
import client from '../../../contentful/index';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import { BLOCKS } from '@contentful/rich-text-types';

const About = ({ aboutPageContent }: any) => {
  const { mouseEnterHandle, mouseLeaveHandle } = useCursor();
  const title = aboutPageContent?.fields?.title || 'Name has been changed :C';

  const subtitle = documentToHtmlString(aboutPageContent?.fields?.description, {
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, next) => next(node.content),
    },
  });

  const personImg = aboutPageContent?.fields?.image?.fields?.file?.url || '';

  // const buttonText = documentToHtmlString(homePage.fields?.homeButton, {
  //   renderNode: {
  //     [BLOCKS.PARAGRAPH]: (node, next) => next(node.content),
  //   },
  // });

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={transition1}
      className="section overflow-y-scroll lg:pt-[150px] pt-0 "
    >
      <div className="container mx-auto relative ">
        {/* text and img wrapepr */}
        <div className="flex flex-col lg:flex-row h-full items-center justify-center gap-x-24 text-center lg:text-left lg:pt-16">
          <motion.div
            initial={{ opacity: 0, x: '-50%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '-50%' }}
            onMouseEnter={mouseEnterHandle}
            onMouseLeave={mouseLeaveHandle}
            transition={transition1}
            className="flex-1 max-h-96 lg:max-h-full order-2 lg:order-none overflow-hidden "
          >
            <img src={personImg} alt="" />
          </motion.div>
          {/* text */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={transition1}
            onMouseEnter={mouseEnterHandle}
            onMouseLeave={mouseLeaveHandle}
            className="flex-1 pt-36 pb-14 lg:pt-0 lg:w-auto z-10 flex flex-col justify-center items-center lg:items-start"
          >
            <h1 className="h1">{title}</h1>
            <p className="mb-12 max-w-sm">{subtitle}</p>

            <Link
              className="btn  block mb-[30px] hover:rounded-tr-lg hover:rounded-bl-lg hover:tracking-widest"
              href="/profile"
            >
              View my work
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;

export const getStaticProps: GetStaticProps = async () => {
  const aboutPage = await client.getEntries<any>({
    content_type: 'aboutPage',
  });

  const header = await client.getEntries<any>({
    content_type: 'header',
    limit: 2,
  });

  const [headerContent] = header.items;
  const [aboutPageContent] = aboutPage.items;

  return {
    props: {
      aboutPageContent: aboutPageContent ?? null,
      headerContent: headerContent ?? null,
    },
    revalidate: 10,
  };
};
