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
import { withParticles } from '@/shared/hoc/withParticles';

const Home = ({ homePage }: { homePage: any }) => {
  const titleRef = useRef(null);
  const { mouseEnterHandle, mouseLeaveHandle } = useCursor();
  const title = homePage?.fields?.title;

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
      className="section lg:overflow-y-scroll lg:overflow-x-hidden "
    >
      <div className="container mx-auto h-full relative ">
        <div className="flex flex-col justify-center lg:pt-[80px] pt-[100px]">
          <div
            onMouseEnter={mouseEnterHandle}
            onMouseLeave={mouseLeaveHandle}
            className="w-full lg:max-w-[70%] lg:w-[70%] pt-36 pb-14 lg:pt-0 lg:pb-0 lg:absolute flex flex-col justify-center items-center lg:items-center lg:basis-1/2 relative z-20"
          >
            {title && (
              <h1
                className="h1 text-center max-w-72 lg:max-w-none"
                ref={titleRef}
              >
                {title}
              </h1>
            )}

            {subtitle && (
              <div
                className="text-[26px] lg:text-[36px] font-primary mb-10 lg:mb-12 flex flex-col gap-2 text-white "
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
                className="btn flex justify-center items-center gap-1 "
                href={CV.url}
                target="_blank"
              >
                Check CV <ImFilePdf />
              </a>
            )}
          </div>
          {personUrl && (
            <div className="flex justify-end lg:max-h-full lg:static lg:blur-none absolute top-0 left-0 w-full h-full blur-[1px] pointer-events-none lg:pointer-events-auto overflow-hidden">
              <motion.div
                onMouseEnter={mouseEnterHandle}
                onMouseLeave={mouseLeaveHandle}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0 }}
                transition={transition1}
                className="relative right-0 w-[700px] h-[700px] z-30"
              >
                <motion.img
                  className=" absolute lg:top-0 lg:left-0 top-[-30px] left-[50px] w-[95%] h-[95%] z-10 object-cover "
                  whileHover={{ scale: 1.1 }}
                  transition={transition1}
                  src={personUrl}
                  alt="Me"
                />
              </motion.div>
            </div>
          )}
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

export default withParticles(Home);
