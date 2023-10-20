import { motion } from 'framer-motion';
import Link from 'next/link';
import { useCursor } from '@/shared/hooks';
import { transition1 } from '@/shared/constants/transitions';
import { GetStaticProps } from 'next';
import client from '../../contentful/index';
import { BLOCKS } from '@contentful/rich-text-types';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';

const Home = ({ homePage }: { homePage: any }) => {
  const { mouseEnterHandle, mouseLeaveHandle } = useCursor();
  const title = homePage.fields?.title || 'Name has been changed :C';

  const subtitle = documentToHtmlString(homePage.fields?.description, {
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, next) => next(node.content),
    },
  });

  const personImg = homePage.fields?.person?.fields.file.url || '';

  const buttonText = documentToHtmlString(homePage.fields?.homeButton, {
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, next) => next(node.content),
    },
  });

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={transition1}
      className="section overflow-y-scroll overflow-x-hidden bg-slate-200"
    >
      <div className="container mx-auto h-full relative">
        <div className="flex flex-col justify-center">
          <motion.div
            onMouseEnter={mouseEnterHandle}
            onMouseLeave={mouseLeaveHandle}
            initial={{ opacity: 0, y: '-50%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-50%' }}
            transition={transition1}
            className="w-full lg:max-w-[650px] pt-36 pb-14 lg:pt-0 lg:pb-0 lg:w-auto z-10 lg:absolute flex flex-col justify-center items-center lg:items-center lg:basis-1/2"
          >
            <h1 className="h1 text-center">{title}</h1>
            <p className="text-[26px] lg:text-[36px] font-primary mb-4 lg:mb-12">
              {subtitle}
            </p>
            <Link
              href="/contact"
              className="btn block mb-[30px] hover:rounded-tr-lg hover:rounded-bl-lg hover:tracking-widest"
            >
              {buttonText}
            </Link>
          </motion.div>
          <div className="flex justify-end max-h-full ">
            <motion.div
              onMouseEnter={mouseEnterHandle}
              onMouseLeave={mouseLeaveHandle}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              transition={transition1}
              className="relative lg:-right-40 overflow-hidden"
            >
              <motion.img
                whileHover={{ scale: 1.1 }}
                transition={transition1}
                src={personImg}
                alt=""
              />
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
      homePage: homePageContent,
      headerContent,
    },
    revalidate: 10,
  };
};

export default Home;
