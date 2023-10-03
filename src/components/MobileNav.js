import React, { useState } from 'react';

import {IoMdClose} from 'react-icons/io'
import {CgMenuRight} from 'react-icons/cg'


import {motion } from 'framer-motion'
import Link from 'next/link';


const menuVariant = {
  hidden: {
    x: '100%',
  },
  show: {
    x: 0,
    transition: {
      ease: [-0.5, 0.01, -0.05, 0.9]
      // ease: [ 0.1, 0.01, -0.05,  -0.05]

    }
  }
}

const MobileNav = () => {
  const [ openMenu, setOpenMenu ] = useState(false)
  return <nav className='text-primary xl:hidden'>
    <div onClick={() => setOpenMenu(true)} className='text-3xl cursor-pointer'>
      <CgMenuRight />

    </div>

    <motion.div variants={menuVariant} initial='hidden' animate={openMenu ? 'show' : 'hidden'} className='bg-white shadow-2xl w-full absolute top-0 right-0 max-w-xs h-screen z-20'>
      <div onClick={() => setOpenMenu(false)} className='cursor-pointer text-4xl absolute z-30 left-4 top-14 text-primary '><IoMdClose /></div>


      <ul className='h-full flex flex-col justify-center items-center gap-y-8 text-primary font-bold text-3xl font-primary'>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
        <li>
          <Link href="/portfolio">Portfolio</Link>
        </li>
      </ul>
    </motion.div>
  </nav>;
};

export default MobileNav;
