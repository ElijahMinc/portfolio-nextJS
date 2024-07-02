import { motion } from 'framer-motion';
import Link from 'next/link';
import { BLOCKS } from '@contentful/rich-text-types';
import { useRef } from 'react';
import { ImFilePdf } from 'react-icons/im';
import { ROUTES } from '@/shared/constants/routes';
import { AssetFile } from 'contentful';
import { getDocumentToHtmlString } from '@/shared/lib/documentToHtmlString/getDocumentToHtmlString';
import { HomePageProps } from '../types/props';
import Image from 'next/image';
import { imageQuality } from '@/shared/constants/images';
import { useCursor } from '@/entities/Cursor';
import { useTextAnimation } from '@/shared/hooks';
import { withParticles } from '@/entities/Particles';
import { motionSectionAnimationConfig } from '../config/motion-animation';
import { transition1 } from '@/shared/constants/transitions';
import { SmoothMovementWrapper } from '@/entities/Animation/SmoothMovementByMouse';

import cn from 'classnames';

const HomePage = ({ homePage }: HomePageProps) => {
  const titleRef = useRef(null);
  const { mouseEnterHandle, mouseLeaveHandle } = useCursor();
  const title = homePage?.fields?.title;

  const subtitle = getDocumentToHtmlString(homePage?.fields?.description);

  const personUrl = homePage?.fields?.person?.fields?.file?.url as string;

  const CV = homePage?.fields?.cv?.fields?.file as AssetFile;

  const buttonText = getDocumentToHtmlString(homePage?.fields?.homeButton, {
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, next) => next(node.content),
    },
  });

  useTextAnimation(titleRef.current, title);

  return (
    <motion.section
      {...motionSectionAnimationConfig}
      transition={transition1}
      className="homepage section"
    >
      <div className="homepage__container">
        <div className="homepage__content">
          <div
            onMouseEnter={mouseEnterHandle}
            onMouseLeave={mouseLeaveHandle}
            className="homepage__body"
          >
            {title && (
              <h1 className="homepage__title h1" ref={titleRef}>
                {title}
              </h1>
            )}

            {subtitle && (
              <div
                className="homepage__subtitle h1"
                dangerouslySetInnerHTML={{ __html: subtitle }}
              />
            )}

            <div>
              {buttonText && (
                <Link
                  href={ROUTES.CONTACT}
                  className={cn('homepage__button-contact', 'btn-fancy')}
                >
                  {buttonText}
                </Link>
              )}
            </div>
            {CV && (
              <a
                className={cn('homepage__button-cv', 'btn-fancy')}
                href={CV.url}
                target="_blank"
              >
                Check CV <ImFilePdf />
              </a>
            )}
          </div>
          {personUrl && (
            <div className={cn('homepage__personal-url')}>
              <div className="homepage__image-wrapper">
                <SmoothMovementWrapper className="w-full h-full">
                  <div className="homepage__image-container">
                    <Image
                      quality={imageQuality}
                      className="object-cover"
                      onMouseEnter={mouseEnterHandle}
                      onMouseLeave={mouseLeaveHandle}
                      fill
                      src={`https:${personUrl}`}
                      alt="Ilya_Prtosenko_Frontend"
                    />
                  </div>
                </SmoothMovementWrapper>
              </div>
            </div>
          )}
        </div>
      </div>
    </motion.section>
  );
};

export default withParticles(HomePage);
