import React, { useState, Children } from 'react';
import { IoMdClose } from 'react-icons/io';
import { CgMenuRight } from 'react-icons/cg';
import { motion } from 'framer-motion';
import { menuAnimationVariant } from '../constants/menuAnimationVartiants';
import { useRouter } from 'next/router';

export const HeaderMobile = ({ children }) => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <nav className="text-primary xl:hidden">
      <div
        onClick={() => setOpenMenu(true)}
        className="text-3xl cursor-pointer"
      >
        <CgMenuRight />
      </div>

      <motion.div
        variants={menuAnimationVariant}
        initial="hidden"
        animate={openMenu ? 'show' : 'hidden'}
        className="bg-white shadow-2xl w-full absolute top-0 right-0 max-w-xs h-screen z-20"
      >
        <div
          onClick={() => setOpenMenu(false)}
          className="cursor-pointer text-4xl absolute z-30 left-4 top-14 text-primary "
        >
          <IoMdClose />
        </div>

        {Children.map(children, (child, index) => (
          <span onClick={() => setOpenMenu(false)}>
            {React.cloneElement(child)}
          </span>
        ))}
      </motion.div>
    </nav>
  );
};
