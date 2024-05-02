import { useRef } from 'react';
import { motion } from 'framer-motion';
import { transition1 } from '@/shared/constants/transitions';
import { useCursor, useTextAnimation } from '@/shared/hooks';
import { GetStaticProps } from 'next';
import client from '../../../contentful/index';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import { BLOCKS } from '@contentful/rich-text-types';
import { SendContactForm } from '@/features';
import { withParticles } from '@/shared/hoc/withParticles';

const Contact = ({ contactPageContent }: any) => {
  const { mouseEnterHandle, mouseLeaveHandle } = useCursor();
  const titleRef = useRef(null);

  const title = contactPageContent.fields?.title || 'Name has been changed :C';

  const subtitle = documentToHtmlString(contactPageContent.fields?.subtitle, {
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, next) => next(node.content),
    },
  });

  const personImg = contactPageContent.fields?.image?.fields?.file?.url || null;

  useTextAnimation(titleRef.current, title);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={transition1}
      className="section bg-black overflow-y-scroll pt-[100px] pb-[100px]"
    >
      <div className="bg-black absolute top-0 left-0 w-full h-full pointer-events-none opacity-90 block lg:hidden z-10" />

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

            <p className="mb-12 text-white">{subtitle}</p>

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
              <img src={personImg} alt="Person Img" />
            </motion.div>
          )}
        </div>
      </div>
    </motion.section>
  );
};

export default withParticles(Contact);

export const getStaticProps: GetStaticProps = async () => {
  const contactPage = await client.getEntries<any>({
    content_type: 'contactPage',
  });
  const header = await client.getEntries<any>({
    content_type: 'header',
  });

  const [headerContent] = header.items;
  const [contactPageContent] = contactPage.items;

  return {
    props: {
      headerContent: headerContent ?? null,
      contactPageContent: contactPageContent ?? null,
    },
    revalidate: 10,
  };
};
