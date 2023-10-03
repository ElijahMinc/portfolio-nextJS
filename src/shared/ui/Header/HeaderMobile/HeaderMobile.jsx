'use client';

import React, { useState } from 'react';

import {IoMdClose} from 'react-icons/io'
import {CgMenuRight} from 'react-icons/cg'

import {motion } from 'framer-motion'
import Link from 'next/link';
import { menuAnimationVariant } from '../constants/menuAnimationVartiants';
import { headerNavigationList } from '../constants/headerNavigationList';

export const HeaderMobile = ({ children }) => {
  const [ openMenu, setOpenMenu ] = useState(false);

  return <nav className='text-primary xl:hidden'>
    <div onClick={() => setOpenMenu(true)} className='text-3xl cursor-pointer'>
      <CgMenuRight />
    </div>

    <motion.div variants={menuAnimationVariant} initial='hidden' animate={openMenu ? 'show' : 'hidden'} className='bg-white shadow-2xl w-full absolute top-0 right-0 max-w-xs h-screen z-20'>
      <div onClick={() => setOpenMenu(false)} className='cursor-pointer text-4xl absolute z-30 left-4 top-14 text-primary '><IoMdClose /></div>

      {children}
      {/* <ul className='h-full flex flex-col justify-center items-center gap-y-8 text-primary font-bold text-3xl font-primary'>
        {headerNavigationList.map(({ path, name }) => (
          <li key={path}>
            <Link href={path}>{name}</Link>
          </li>
        ))}
      </ul> */}

    </motion.div>
  </nav>;
};
