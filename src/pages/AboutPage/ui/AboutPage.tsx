import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { transition1 } from '@/shared/constants/transitions';
import { ROUTES } from '@/shared/constants/routes';
import { getDocumentToHtmlString } from '@/shared/lib/documentToHtmlString/getDocumentToHtmlString';
import { AboutPageProps } from '../types/props';
import Image from 'next/image';
import { imageQuality } from '@/shared/constants/images';
import { useCursor } from '@/entities/Cursor';
import { useTextAnimation } from '@/shared/hooks';
import { withParticles } from '@/entities/Particles';
import { motionImageWrapperAnimationConfig } from '../config/motion-animation';

import cn from 'classnames';
import './about-page.styles.css';

const About = ({ aboutPage }: AboutPageProps) => {
  const titleRef = useRef(null);

  const { mouseEnterHandle, mouseLeaveHandle } = useCursor();

  const title = aboutPage?.fields?.title;

  const subtitle = getDocumentToHtmlString(aboutPage?.fields?.description);

  const personImg = aboutPage?.fields?.image?.fields?.file?.url || '';

  useTextAnimation(titleRef.current, title);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={transition1}
      className="aboutpage section"
    >
      <div className="aboutpage__cover" />

      <div className="aboutpage__container">
        {/* text and img wrapepr */}

        <div className="aboutpage__body">
          {personImg && (
            <motion.div
              {...motionImageWrapperAnimationConfig}
              onMouseEnter={mouseEnterHandle}
              onMouseLeave={mouseLeaveHandle}
              transition={transition1}
              className="aboutpage__image-wrapper"
            >
              <Image
                quality={imageQuality}
                className="object-cover"
                fill
                src={`https:${personImg}`}
                alt="Ilya_Prtosenko_Frontend"
              />
            </motion.div>
          )}

          {/* text */}
          <div
            onMouseEnter={mouseEnterHandle}
            onMouseLeave={mouseLeaveHandle}
            className="aboutpage__content"
          >
            {title && (
              <h1 className="h1" ref={titleRef}>
                {title}
              </h1>
            )}

            {subtitle && (
              <div
                className="aboutpage__subtitle"
                dangerouslySetInnerHTML={{ __html: subtitle }}
              />
            )}

            <Link
              className={cn('aboutpage__btn', 'btn-fancy')}
              href={ROUTES.PORTFOLIO}
            >
              View my work
            </Link>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default withParticles(About);
