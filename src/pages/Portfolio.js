'use client'

import React from 'react';


import { motion } from 'framer-motion'
import Link from 'next/link';
import { transition1 } from '@/shared/constants/transitions';
import { useCursor } from '@/shared/hooks';

export const Portfolio = () => {
  const { mouseEnterHandle, mouseLeaveHandle } = useCursor()

  return <motion.section initial={{opacity: 0}} animate={{opacity: 1 }} exit={{opacity: 0}} transition={transition1} className='section overflow-y-scroll lg:pt-[150px]'>
      <div className="container mx-auto relative pr-1 pl-1">
        <div className='flex flex-col lg:flex-row h-full items-center justify-center gap-x-24 text-center lg:text-left pt-24 lg:pt-36 pb-8'>
          <motion.div  initial={{opacity: 0, x: '-50%'}} animate={{opacity: 1, x: 0 }} exit={{opacity: 0, x: '-50%'}} transition={transition1} onMouseEnter={mouseEnterHandle} onMouseLeave={mouseLeaveHandle} className='flex flex-col lg:items-start'>
            <h1 className='h1'>
              Portfolio
            </h1>

            <p className='mb-12 max-w-sm'>
             Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat modi nulla recusandae facilis quae numquam? Nisi in, expedita, officiis quam vitae quidem dolores dignissimos sint asperiores error sit recusandae odio.
             Consequuntur animi, minima.
             
             <br/>
             <br/>
              aut ab quam consequatur adipisci dolore alias, sed iure fuga suscipit! Distinctio odit magnam laborum dolor facilis tempore totam, ut cupiditate obcaecati cumque recusandae quos voluptas reprehenderit.
            </p>
            <Link className='btn mb-[30px] mr-auto lg:mr-0 w-full lg:w-auto block hover:rounded-tr-lg hover:rounded-bl-lg hover:tracking-widest' href='/contact'>Hire me </Link>

          </motion.div>
          {/* Image grid */}
          <motion.div  initial={{opacity: 0}} animate={{opacity: 1 }} exit={{opacity: 0}} transition={transition1} onMouseEnter={mouseEnterHandle} onMouseLeave={mouseLeaveHandle} className='grid grid-cols-2 lg:gap-2'>
            <div className='max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden'>
              <img className='object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500' src='/img/portfolio/1.png' alt="" />
            </div>
            <div className='max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden'>
              <img className='object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500' src='/img/portfolio/2.png' alt="" />
            </div>
            <div className='max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden'>
              <img className='object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500' src='/img/portfolio/3.png' alt="" />
            </div>
            <div className='max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden'>
              <img className='object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500' src='/img/portfolio/4.png' alt="" />
            </div>
          </motion.div>
        </div>
      </div>
  </motion.section>;
};

