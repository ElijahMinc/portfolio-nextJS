import { useRef } from 'react';
import { motion } from 'framer-motion';
import { BLOCKS } from '@contentful/rich-text-types';
import { SendContactForm } from '@/features';
import { getDocumentToHtmlString } from '@/shared/lib/documentToHtmlString/getDocumentToHtmlString';
import { ContactPageProps } from '../types/props';
import { useCursor } from '@/entities/Cursor';
import { useTextAnimation } from '@/shared/hooks';
import { withParticles } from '@/entities/Particles';
import {
  motionImageAnimationConfig,
  motionSectionAnimationConfig,
} from '../config/motion-animation';

import cn from 'classnames';

const Contact = ({ contactPage }: ContactPageProps) => {
  const { mouseEnterHandle, mouseLeaveHandle } = useCursor();
  const titleRef = useRef(null);

  const title = contactPage?.fields?.title;

  const subtitle = getDocumentToHtmlString(contactPage.fields?.subtitle, {
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, next) => next(node.content),
    },
  });

  const personImg = contactPage?.fields?.image?.fields?.file?.url;

  useTextAnimation(titleRef.current, title);

  return (
    <motion.section
      {...motionSectionAnimationConfig}
      className="contact-page section"
    >
      <div className="contact-page__container">
        <div
          className={cn('contact-page__body', {
            ['justify-start']: !!personImg,
            ['justify-center']: !personImg,
          })}
        >
          <div className="contact-page__cover" />

          {/* text & form */}
          <div
            onMouseEnter={mouseEnterHandle}
            onMouseLeave={mouseLeaveHandle}
            className={cn('contact-page__form-wrapper', {
              'lg:flex-[1_1_0]': !!personImg,
              'lg:flex-[0_1_50%]': !personImg,
            })}
          >
            <h1 className="h1" ref={titleRef}>
              {title}
            </h1>

            <p className="contact-page__p">{subtitle}</p>

            <SendContactForm />
          </div>

          {personImg && (
            <motion.div
              {...motionImageAnimationConfig}
              onMouseEnter={mouseEnterHandle}
              onMouseLeave={mouseLeaveHandle}
              className="contact-page__img"
            >
              <img src={personImg as string} alt="Person Img" />
            </motion.div>
          )}
        </div>
      </div>
    </motion.section>
  );
};

export default withParticles(Contact);
