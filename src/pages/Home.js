'use client';

import {motion} from 'framer-motion'
import Link from 'next/link';
import { useCursor } from '@/shared/hooks';
import { transition1 } from '@/shared/constants/transitions';

export const Home = () => {

  const { mouseEnterHandle, mouseLeaveHandle } = useCursor()

  return <motion.section initial={{opacity: 0}} animate={{opacity: 1 }} exit={{opacity: 0}} transition={transition1} className='section overflow-y-scroll overflow-x-hidden'>
    <div className='container mx-auto h-full relative'>
      <div className="flex flex-col justify-center">
        <motion.div onMouseEnter={mouseEnterHandle} onMouseLeave={mouseLeaveHandle} initial={{opacity: 0, y: '-50%'}} animate={{opacity: 1, y: 0 }} exit={{opacity: 0, y: '-50%'}} transition={transition1} className='w-full pt-36 pb-14 lg:pt-0 lg:pb-0 lg:w-auto z-10 lg:absolute flex flex-col justify-center items-center lg:items-center'>
          <h1 className='h1'>Photographer  <br />
         & film maker</h1>
         <p className='text-[26px] lg:text-[36px] font-primary mb-4 lg:mb-12'>Ukraine</p>
         <Link href="/contact" className='btn block mb-[30px] hover:rounded-tr-lg hover:rounded-bl-lg hover:tracking-widest'>Hire me</Link>
        </motion.div>
        <div className='flex justify-end max-h-full '>
          <motion.div onMouseEnter={mouseEnterHandle} onMouseLeave={mouseLeaveHandle} initial={{scale: 0 }} animate={{scale: 1,}} exit={{scale: 0, }} transition={transition1}  className='relative lg:-right-40 overflow-hidden'>
            <motion.img whileHover={{scale: 1.1}} transition={transition1} src='/img/home/woman.png' alt=''/>
          </motion.div>
        </div>
      </div>
    </div>
  </motion.section>;
};

