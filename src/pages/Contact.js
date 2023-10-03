'use client'

import React from 'react';

import { motion } from 'framer-motion'
import {ContactForm} from '@/components/ContactForm'
import { transition1 } from '@/shared/constants/transitions';
import { useCursor } from '@/shared/hooks';

export const Contact = () => {
  const { mouseEnterHandle, mouseLeaveHandle } = useCursor()

  return <motion.section initial={{opacity: 0}} animate={{opacity: 1 }} exit={{opacity: 0}} transition={transition1} className='section bg-white overflow-y-scroll pt-[150px]'>
    <div className="container mx-auto">
        <div className='flex flex-col lg:flex-row h-full items-center justify-start gap-x-8 text-center lg:text-left overflow-x-hidden'>
          <div className='hidden lg:flex bg-[#eef7f9] absolute bottom-0 left-0 right-0 top-72 pointer-events-none' />

          {/* text & form */}
          <motion.div  initial={{opacity: 0, x: '-50%'}} animate={{opacity: 1, x: 0 }} exit={{opacity: 0, x: '-50%'}} onMouseEnter={mouseEnterHandle} onMouseLeave={mouseLeaveHandle} transition={transition1} className='lg:flex-1 lg:pt-32 px-4'>
            <h1 className='h1' >
              Contact me
            </h1>

            <p className='mb-12'>
              I would love to get suggestions from you.
            </p>

           <ContactForm />
          </motion.div>

          <motion.div  initial={{opacity: 0}} animate={{opacity: 1 }} exit={{opacity: 0}} onMouseEnter={mouseEnterHandle} onMouseLeave={mouseLeaveHandle} transition={transition1} className='lg:flex-1 z-10'>
            <img  src='img/contact/woman.png' alt=''/>
          </motion.div>
        </div>

     
    </div>
  </motion.section>;

};

