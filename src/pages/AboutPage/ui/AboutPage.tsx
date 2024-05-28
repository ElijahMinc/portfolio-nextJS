import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { transition1 } from '@/shared/constants/transitions';
import { useCursor, useTextAnimation } from '@/shared/hooks';
import { ROUTES } from '@/shared/constants/routes';
import { withParticles } from '@/shared/hoc/withParticles';
import { getDocumentToHtmlString } from '@/shared/lib/documentToHtmlString/getDocumentToHtmlString';
import { AboutPageProps } from '../types/props';
import Image from 'next/image';
import { imageQuality } from '@/shared/constants/images';

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
      className="section overflow-y-scroll lg:pt-[150px] pt-0 "
    >
      <div className="dark:bg-black bg-white absolute top-0 left-0 w-full h-full pointer-events-none opacity-50 block lg:hidden z-10" />

      <div className="container mx-auto relative ">
        {/* text and img wrapepr */}

        <div className="flex flex-col lg:flex-row h-full items-center justify-center gap-x-24 text-center lg:text-left lg:pt-16 ">
          {personImg && (
            <motion.div
              initial={{ opacity: 0, x: '-50%' }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: '-50%' }}
              onMouseEnter={mouseEnterHandle}
              onMouseLeave={mouseLeaveHandle}
              transition={transition1}
              className="absolute flex-1 max-h-96 lg:max-h-full order-2 lg:order-none overflow-hidden lg:relative lg:blur-none top-0  left-50% lg:left-0 w-[500px] h-[500px] blur-sm pointer-events-none lg:pointer-events-auto"
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
            className="flex-1 pt-36 pb-14 lg:pt-0 lg:w-auto z-10 flex flex-col justify-center items-center lg:items-start"
          >
            {title && (
              <h1 className="h1" ref={titleRef}>
                {title}
              </h1>
            )}

            {subtitle && (
              <div
                className="mb-12 max-w-sm flex flex-col gap-2 dark:text-white text-black"
                dangerouslySetInnerHTML={{ __html: subtitle }}
              />
            )}

            <Link
              className="btn mb-[30px] hover:rounded-tr-lg hover:rounded-bl-lg hover:tracking-widest"
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