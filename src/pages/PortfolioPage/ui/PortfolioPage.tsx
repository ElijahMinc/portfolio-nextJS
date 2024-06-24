import { motion } from 'framer-motion';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import { BLOCKS } from '@contentful/rich-text-types';
import { useState } from 'react';
import { getDocumentToHtmlString } from '@/shared/lib/documentToHtmlString/getDocumentToHtmlString';
import { PortfolioPageProps } from '../types/props';
import Image from 'next/image';
import { useCursor } from '@/entities/Cursor';
import { withParticles } from '@/entities/Particles';

import cn from 'classnames';
import {
  motionPreviewWorkAnimationConfig,
  motionSectionAnimationConfig,
  motionTitleWrapperAnimationConfig,
} from '../config/motion-animation';
import {
  ICurrentWork,
  IPreviewWorkLinks,
  PreviewPortfolioWorksList,
} from '@/entities/PreviewPortfolioWorks/ui/PreviewPortfolioWorksList';
import { getMappedCurrentWork } from '@/entities/PreviewPortfolioWorks/utils/mappedCurrentWork';

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

  const workLinks = (portfolioPage?.fields?.workLinks ?? []) as string[];

  const handleChangeCurrentWork = (currentWork: ICurrentWork) =>
    setCurrentWork(currentWork);

  return (
    <motion.section
      {...motionSectionAnimationConfig}
      className="section porfolio-page"
    >
      <div className="porfolio-page__container">
        <div className="porfolio-page__body">
          <motion.div
            key={currentWork?.title}
            {...motionTitleWrapperAnimationConfig}
            onMouseEnter={mouseEnterHandle}
            onMouseLeave={mouseLeaveHandle}
            className="porfolio-page__title-wrapper"
          >
            {currentWork?.title && <h1 className="h1">{currentWork.title}</h1>}
            {currentWork?.description && (
              <div
                className="porfolio-page__description"
                dangerouslySetInnerHTML={{
                  __html: currentWork.description,
                }}
              />
            )}
            {!!currentWork.link && (
              <a
                className="btn-fancy porfolio-page__link"
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
              {...motionPreviewWorkAnimationConfig}
              onMouseEnter={mouseEnterHandle}
              onMouseLeave={setCursorDefault}
              className="porfolio-page__preview-wrapper"
            >
              <PreviewPortfolioWorksList
                currentWork={getMappedCurrentWork(currentWork)}
                workLinks={workLinks}
                handleChangeCurrentWork={handleChangeCurrentWork}
                works={previewPortfolioWorks as any[]}
              />
            </motion.div>
          )}
        </div>

        {!!videos && (
          <div className="porfolio-page__videos">
            {videos.map((item, idx) => (
              <div key={idx} className="mb-5 lg:mb-0">
                <div
                  onMouseEnter={mouseEnterHandle}
                  onMouseLeave={mouseLeaveHandle}
                  className="porfolio-page__videos-title"
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
