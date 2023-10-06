import { motion } from 'framer-motion';
import Link from 'next/link';
import { transition1 } from '@/shared/constants/transitions';
import { useCursor } from '@/shared/hooks';
import { GetStaticProps } from 'next';
import client from '../../../contentful/index';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import { BLOCKS } from '@contentful/rich-text-types';

const Portfolio = ({ portfolioPageContent, videosContent }: any) => {
  const {
    mouseEnterHandle,
    mouseLeaveHandle,
    setCursorNone,
    setCursorDefault,
  } = useCursor();

  const buttonText = portfolioPageContent.fields?.buttonText;

  const title =
    portfolioPageContent.fields?.title || 'Name has been changed :C';

  const subtitle = documentToHtmlString(portfolioPageContent.fields?.subtitle, {
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, next) => next(node.content),
    },
  });

  const images = portfolioPageContent.fields.images?.map(
    (image: any) => image.fields.file.url,
  );

  const videos = videosContent.items as any[];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={transition1}
      className="section overflow-y-scroll lg:pt-[150px]"
    >
      <div className="container mx-auto relative pr-1 pl-1">
        <div className="flex flex-col lg:flex-row h-full items-center justify-center gap-x-24 text-center lg:text-left pt-24 lg:pt-36 pb-8">
          <motion.div
            initial={{ opacity: 0, x: '-50%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '-50%' }}
            transition={transition1}
            onMouseEnter={mouseEnterHandle}
            onMouseLeave={mouseLeaveHandle}
            className="flex flex-col lg:items-start"
          >
            {title && <h1 className="h1">{title}</h1>}
            {subtitle && <p className="mb-12 max-w-sm">{subtitle}</p>}
            {buttonText && (
              <Link
                className="btn mb-[30px] mr-auto lg:mr-0 w-full lg:w-auto block hover:rounded-tr-lg hover:rounded-bl-lg hover:tracking-widest"
                href="/contact"
              >
                {buttonText}
              </Link>
            )}
          </motion.div>
          {/* Image grid */}

          {!!images?.length && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={transition1}
              onMouseEnter={mouseEnterHandle}
              onMouseLeave={setCursorDefault}
              className="grid grid-cols-2 lg:gap-2"
            >
              {images.map((imageUrl: string) => (
                <div
                  key={imageUrl}
                  className="max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden"
                >
                  <img
                    className="object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500"
                    src={imageUrl}
                    alt=""
                  />
                </div>
              ))}
            </motion.div>
          )}
        </div>

        {!!videos && (
          <div className="block lg:grid grid-cols-2 lg:gap-4 pb-5">
            {videos.map((item, idx) => (
              <div key={idx} className="mb-5 lg:mb-0">
                <div
                  onMouseEnter={mouseEnterHandle}
                  onMouseLeave={mouseLeaveHandle}
                  className="text-[26px] lg:text-[36px] font-primary mb-2 lg:mb-4"
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

export default Portfolio;

export const getStaticProps: GetStaticProps = async () => {
  const portfolioPage = await client.getEntries<any>({
    content_type: 'portfolioPage',
  });

  const videosContent = await client.getEntries<any>({
    content_type: 'videos',
  });

  const header = await client.getEntries<any>({
    content_type: 'header',
  });

  const [headerContent] = header.items;
  const [portfolioPageContent] = portfolioPage.items;

  return {
    props: {
      headerContent,
      portfolioPageContent,
      videosContent,
    },
    revalidate: 3600,
  };
};
