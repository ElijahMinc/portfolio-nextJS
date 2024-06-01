import { useRef } from 'react';
import { motion } from 'framer-motion';
import { transition1 } from '@/shared/constants/transitions';
import { BLOCKS } from '@contentful/rich-text-types';
import { SendContactForm } from '@/features';
import { getDocumentToHtmlString } from '@/shared/lib/documentToHtmlString/getDocumentToHtmlString';
import { ContactPageProps } from '../types/props';
import { useCursor } from '@/entities/Cursor';
import { useTextAnimation } from '@/shared/hooks';
import { withParticles } from '@/entities/Particles';

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
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={transition1}
      className="section overflow-y-scroll pt-[100px] pb-[100px]"
    >
      <div className="container mx-auto">
        <div
          className={`flex flex-col lg:flex-row h-full items-center  gap-x-8 text-center lg:text-left overflow-x-hidden ${
            personImg ? 'justify-start' : 'justify-center'
          }`}
        >
          <div className="hidden lg:flex bg-[#eef7f959] absolute bottom-0 left-0 right-0 top-72 pointer-events-none " />

          {/* text & form */}
          <div
            onMouseEnter={mouseEnterHandle}
            onMouseLeave={mouseLeaveHandle}
            className={`lg:flex-${
              personImg ? '[1_1_0]' : '[0_1_50%]'
            }   lg:pt-32 px-1 lg:px-4 z-20`}
          >
            <h1 className="h1" ref={titleRef}>
              {title}
            </h1>

            <p className="mb-12 dark:text-white text-black">{subtitle}</p>

            <SendContactForm />
          </div>

          {personImg && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onMouseEnter={mouseEnterHandle}
              onMouseLeave={mouseLeaveHandle}
              transition={transition1}
              className="lg:flex-1 z-10"
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
