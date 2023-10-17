import { motion } from 'framer-motion';
import { transition1 } from '@/shared/constants/transitions';
import { useCursor } from '@/shared/hooks';
import { GetStaticProps } from 'next';
import client from '../../../contentful/index';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import { BLOCKS } from '@contentful/rich-text-types';
import { SendContactForm } from '@/features';

const Contact = ({ contactPageContent }: any) => {
  const { mouseEnterHandle, mouseLeaveHandle } = useCursor();

  const title = contactPageContent.fields?.title || 'Name has been changed :C';

  const subtitle = documentToHtmlString(contactPageContent.fields?.subtitle, {
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, next) => next(node.content),
    },
  });

  const personImg = contactPageContent.fields?.image.fields.file.url || '';

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={transition1}
      className="section bg-white overflow-y-scroll pt-[150px]"
    >
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row h-full items-center justify-start gap-x-8 text-center lg:text-left overflow-x-hidden">
          <div className="hidden lg:flex bg-[#eef7f9] absolute bottom-0 left-0 right-0 top-72 pointer-events-none" />

          {/* text & form */}
          <motion.div
            initial={{ opacity: 0, x: '-50%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '-50%' }}
            onMouseEnter={mouseEnterHandle}
            onMouseLeave={mouseLeaveHandle}
            transition={transition1}
            className="lg:flex-1 lg:pt-32 px-4"
          >
            <h1 className="h1">{title}</h1>

            <p className="mb-12">{subtitle}</p>

            <SendContactForm />

            {/* for fix caching */}
            {/* <form className="flex flex-col gap-y-4">
              <div className="flex gap-10">
                <input
                  type="text"
                  placeholder="Your message"
                  className={
                    'outline-none border-b border-b-rose-300 h-[60px] bg-transparent font-secondary w-full pl-3 placeholder:text-[#757879] transition-all'
                  }
                />
              </div>
            </form> */}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onMouseEnter={mouseEnterHandle}
            onMouseLeave={mouseLeaveHandle}
            transition={transition1}
            className="lg:flex-1 z-10"
          >
            <img src={personImg ?? 'img/contact/woman.png'} alt="" />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;

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
      headerContent,
      contactPageContent,
    },
    revalidate: 10,
  };
};
