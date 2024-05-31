'use client';

import React, { useState, Children } from 'react';
import { IoMdClose } from 'react-icons/io';
import { CgMenuRight } from 'react-icons/cg';
import { motion } from 'framer-motion';
import { menuAnimationVariant } from '../constants/menuAnimationVartiants';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { HeaderMobileList } from './HeaderMobileList';

interface HeaderMobileProps {
  navigationData: any[];
  socials?: any[];
}

export const HeaderMobile = ({
  navigationData,
  socials,
}: HeaderMobileProps) => {
  const [openMenu, setOpenMenu] = useState(false);

  const handleClose = () => setOpenMenu(false);

  return (
    <nav className="text-primary xl:hidden z-0">
      <div
        onClick={() => setOpenMenu(true)}
        className="text-3xl cursor-pointer"
      >
        <CgMenuRight className="text-primary" />
      </div>

      <motion.div
        variants={menuAnimationVariant}
        initial="hidden"
        animate={openMenu ? 'show' : 'hidden'}
        className="bg-white shadow-2xl w-full absolute top-0 right-0 max-w-xs h-screen z-50 "
      >
        <div
          onClick={handleClose}
          className="cursor-pointer text-4xl absolute z-30 left-4 top-14 text-primary "
        >
          <IoMdClose />
        </div>

        <div className="inline-block w-full h-full">
          <HeaderMobileList
            navigationData={navigationData}
            onClickItem={handleClose}
          />
        </div>
      </motion.div>

      {openMenu && (
        <div
          className="absolute top-0 left-0 w-screen h-screen z-40"
          onClick={handleClose}
        />
      )}
    </nav>
  );
};
