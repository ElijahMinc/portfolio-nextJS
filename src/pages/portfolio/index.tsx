import { motion } from 'framer-motion';
import { transition1 } from '@/shared/constants/transitions';
import { useCursor } from '@/shared/hooks';
import { GetStaticProps } from 'next';
import client from '../../../contentful/index';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import { BLOCKS } from '@contentful/rich-text-types';
import { useState } from 'react';
import { withParticles } from '@/shared/hoc/withParticles';

const Portfolio = ({ portfolioPageContent, videosContent }: any) => {
  const title = portfolioPageContent.fields?.title || null;
  const description = !!portfolioPageContent.fields?.subtitle
    ? documentToHtmlString(portfolioPageContent.fields?.subtitle, {
        renderNode: {
          [BLOCKS.PARAGRAPH]: (node, next) => next(node.content),
        },
      })
    : null;

  const [currentWork, setCurrentWork] = useState({
    title,
    description,
    link: '',
  });

  const {
    mouseEnterHandle,
    mouseLeaveHandle,
    setCursorNone,
    setCursorDefault,
  } = useCursor();

  const buttonText = portfolioPageContent.fields?.buttonText;

  const previewPortfolioWorks = portfolioPageContent.fields?.images || [];

  const videos = videosContent.items as any[];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={transition1}
      className="section bg-black overflow-y-scroll lg:pt-[80px]"
    >
      <div className="bg-black absolute top-0 left-0 w-full h-full pointer-events-none opacity-90 block lg:hidden z-10" />

      <div className="container mx-auto relative pr-1 pl-1">
        <div className="flex flex-col lg:flex-row h-full items-center justify-center gap-x-24 text-center lg:text-left pt-24 lg:pt-36 pb-8">
          <motion.div
            key={currentWork?.title}
            initial={{ opacity: 0, x: '-50%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '-50%' }}
            transition={transition1}
            onMouseEnter={mouseEnterHandle}
            onMouseLeave={mouseLeaveHandle}
            className="flex flex-col lg:items-start  lg:flex-[0_0_40%]  lg:w-[40%] relative z-10"
          >
            {currentWork?.title && <h1 className="h1">{currentWork.title}</h1>}
            {currentWork?.description && (
              <div
                className="mb-12 max-w-sm text-white "
                dangerouslySetInnerHTML={{
                  __html: currentWork.description,
                }}
              />
            )}
            {!!currentWork.link && (
              <a
                className="btn mb-[30px] mr-auto lg:mr-0 w-full lg:w-auto"
                href={currentWork.link}
                target="_blank"
              >
                Go to Prod
              </a>
            )}
          </motion.div>
          {/* Image grid */}

          {!!previewPortfolioWorks?.length && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={transition1}
              onMouseEnter={mouseEnterHandle}
              onMouseLeave={setCursorDefault}
              className="grid lg:grid-cols-2 gap-2 lg:flex-[0_0_60%] relative z-10"
            >
              {previewPortfolioWorks.map((portfolioWork: any) => (
                <div
                  key={portfolioWork.fields.file.url}
                  className="max-w-full lg:max-w-full h-[187px] lg:h-[220px] bg-accent overflow-hidden"
                  onClick={() => {
                    const work =
                      portfolioPageContent.fields.workLinks[
                        portfolioWork.fields.title
                      ];

                    setCurrentWork({
                      title: work.title,
                      description: work.description,
                      link: work.link,
                    });
                  }}
                >
                  <img
                    className={`object-cover w-full h-full lg:h-[220px] hover:scale-95 transition-all duration-500 cursor-pointer
                    ${
                      portfolioWork.fields.title.toLowerCase() ===
                      currentWork.title.toLowerCase()
                        ? 'scale-75'
                        : ''
                    }
                    `}
                    src={portfolioWork.fields.file.url}
                    alt={
                      portfolioWork.fields.title +
                      portfolioWork.fields.description
                    }
                  />
                </div>
              ))}
            </motion.div>
          )}
        </div>

        {!!videos && (
          <div className="block lg:grid grid-cols-2 lg:gap-4 pb-6">
            {videos.map((item, idx) => (
              <div key={idx} className="mb-5 lg:mb-0">
                <div
                  onMouseEnter={mouseEnterHandle}
                  onMouseLeave={mouseLeaveHandle}
                  className="text-[26px] lg:text-[36px] font-primary mb-2 lg:mb-4"
                  dangerouslySetInnerHTML={{
                    __html: documentToHtmlString(item.fields?.videoTitle),
                  }}
                />
                <div
                  onMouseEnter={setCursorNone}
                  onMouseLeave={mouseLeaveHandle}
                  className="aspect-video"
                  dangerouslySetInnerHTML={{
                    __html: item.fields.video,
                  }}
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </motion.section>
  );
};

export default withParticles(Portfolio);

export const getStaticProps: GetStaticProps = async () => {
  const portfolioPage = await client.getEntries<any>({
    content_type: 'portfolioPage',
  });

  const videosContent = await client.getEntries<any>({
    content_type: 'videos',
  });

  const header = await client.getEntries<any>({
    content_type: 'header',
  });

  const [headerContent] = header.items;
  const [portfolioPageContent] = portfolioPage.items;

  return {
    props: {
      headerContent: headerContent ?? null,
      portfolioPageContent: portfolioPageContent ?? null,
      videosContent: videosContent ?? null,
    },
    revalidate: 3600,
  };
};
