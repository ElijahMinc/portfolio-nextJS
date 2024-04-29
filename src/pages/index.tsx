import { motion } from 'framer-motion';
import Link from 'next/link';
import { useCursor, useTextAnimation } from '@/shared/hooks';
import { transition1 } from '@/shared/constants/transitions';
import { GetStaticProps } from 'next';
import client from '../../contentful/index';
import { BLOCKS } from '@contentful/rich-text-types';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import { useRef } from 'react';
import { ImFilePdf } from 'react-icons/im';
import { ROUTES } from '@/shared/constants/routes';

const Home = ({ homePage }: { homePage: any }) => {
  const titleRef = useRef(null);
  const { mouseEnterHandle, mouseLeaveHandle } = useCursor();
  const title = homePage?.fields?.title || 'Name has been changed :C';

  const subtitle = documentToHtmlString(homePage?.fields?.description);

  const personUrl = homePage?.fields?.person?.fields?.file?.url || '';

  const CV = homePage?.fields?.cv?.fields?.file;

  const buttonText = documentToHtmlString(homePage?.fields?.homeButton, {
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, next) => next(node.content),
    },
  });

  useTextAnimation(titleRef.current, title);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={transition1}
      className="section overflow-y-scroll overflow-x-hidden"
    >
      <div className="container mx-auto h-full relative ">
        <div className="flex flex-col justify-center pt-[80px]">
          <div
            onMouseEnter={mouseEnterHandle}
            onMouseLeave={mouseLeaveHandle}
            className="w-full lg:max-w-[70%] lg:w-[70%] pt-36 pb-14 lg:pt-0 lg:pb-0 lg:absolute flex flex-col justify-center items-center lg:items-center lg:basis-1/2 relative z-20"
          >
            {title && (
              <h1 className="h1 text-center" ref={titleRef}>
                {title}
              </h1>
            )}

            {subtitle && (
              <div
                className="text-[26px] lg:text-[36px] font-primary mb-4 lg:mb-12 flex flex-col gap-2"
                dangerouslySetInnerHTML={{ __html: subtitle }}
              />
            )}

            <div>
              {buttonText && (
                <Link
                  href={ROUTES.CONTACT}
                  className="btn flex justify-center items-center mb-[30px]"
                >
                  {buttonText}
                </Link>
              )}
            </div>
            {CV && (
              <a
                className="btn btn-primary flex justify-center items-center gap-1 bg-blue-200"
                href={CV.url}
                target="_blank"
              >
                Check CV <ImFilePdf />
              </a>
            )}
          </div>
          <div className="flex justify-end max-h-full ">
            <motion.div
              onMouseEnter={mouseEnterHandle}
              onMouseLeave={mouseLeaveHandle}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              transition={transition1}
              className="relative lg:-right-40 overflow-hidden w-[700px] h-[700px] "
            >
              <motion.img
                className=" absolute top-0 left-0 w-full h-full z-10 object-cover "
                whileHover={{ scale: 1.1 }}
                transition={transition1}
                src={personUrl}
                alt="Me"
              />
              <div className="absolute top-0 left-0 w-full h-full pointer-events-none bg-blue-100 z-0" />
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const homePage = await client.getEntries<any>({
    content_type: 'homePage',
    limit: 1,
  });

  const header = await client.getEntries<any>({
    content_type: 'header',
    limit: 2,
  });

  const [headerContent] = header.items;

  const [homePageContent] = homePage.items;
  return {
    props: {
      homePage: homePageContent ?? null,
      headerContent: headerContent ?? null,
    },
    revalidate: 10,
  };
};

export default Home;
