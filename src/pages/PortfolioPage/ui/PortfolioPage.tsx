import { motion } from 'framer-motion';
import { transition1 } from '@/shared/constants/transitions';
import { useCursor } from '@/shared/hooks';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import { BLOCKS } from '@contentful/rich-text-types';
import { useState } from 'react';
import { withParticles } from '@/shared/hoc/withParticles';
import { getDocumentToHtmlString } from '@/shared/lib/documentToHtmlString/getDocumentToHtmlString';
import { PortfolioPageProps } from '../types/props';

const Portfolio = ({ portfolioPage, videosContent }: PortfolioPageProps) => {
  const title = portfolioPage.fields?.title || null;
  const description = getDocumentToHtmlString(portfolioPage.fields?.subtitle, {
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, next) => next(node.content),
    },
  });

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

  const buttonText = portfolioPage?.fields?.buttonText;

  const previewPortfolioWorks = portfolioPage?.fields?.images || [];

  const videos = (videosContent?.items || []) as any[];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={transition1}
      className="section dark:bg-black overflow-y-scroll lg:pt-[80px]"
    >
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
                className="mb-12 max-w-sm dark:text-white text-black"
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
              {previewPortfolioWorks.map((portfolioWork, idx) => {
                const titleOfCurrentPortfolioWork = portfolioWork?.fields
                  ?.title as string;

                const descriptionOfCurrentPortfolioWork = portfolioWork?.fields
                  ?.description as string;

                const linkOfCurrentPortfolioWork = portfolioWork?.fields?.file
                  ?.url as string;

                const isChoosenLink =
                  titleOfCurrentPortfolioWork?.toLowerCase() ===
                  currentWork?.title?.toLowerCase();

                const seoDescription =
                  titleOfCurrentPortfolioWork +
                  descriptionOfCurrentPortfolioWork;

                return (
                  <div
                    key={idx}
                    className="max-w-full lg:max-w-full h-[187px] lg:h-[220px] bg-accent overflow-hidden"
                    onClick={() => {
                      if (!portfolioPage) return;
                      if (!portfolioWork?.fields?.title) return;

                      const work =
                        portfolioPage.fields?.workLinks?.[
                          portfolioWork?.fields?.title as string
                        ];

                      if (!work) return;

                      setCurrentWork({
                        title: work.title,
                        description: work.description,
                        link: work.link,
                      });
                    }}
                  >
                    <img
                      className={`object-cover w-full h-full lg:h-[220px] hover:scale-95 transition-all duration-500 cursor-pointer
                    ${isChoosenLink ? 'scale-75' : ''}
                    `}
                      src={linkOfCurrentPortfolioWork}
                      alt={seoDescription}
                    />
                  </div>
                );
              })}
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
