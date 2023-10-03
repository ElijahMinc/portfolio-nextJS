'use client'
import React, { useContext } from 'react';

import Socials from './Socials'
// import Logo from '../img/header/logo.svg'
import MobileNav from './MobileNav'
import { useCursor } from '@/shared/hooks';
import Link from 'next/link';

const Header = () => {
  const { mouseEnterHandle, mouseLeaveHandle } = useCursor();



  return <header className=' fixed w-full px-[30px] lg:px-[100px] z-30 h-[100px] lg:h-[140px] flex items-center backdrop-blur-xl'>
    <div className='w-full flex lg:flex-row justify-between items-center'>
      {/* Logo */}
      <Link href='/' onMouseEnter={mouseEnterHandle} onMouseLeave={mouseLeaveHandle} className='max-w-[200px]'>
        <img  src='/img/header/logo.svg' alt='' />
      </Link>

      <nav onMouseEnter={mouseEnterHandle} onMouseLeave={mouseLeaveHandle} className='hidden xl:flex gap-x-12 font-semibold'>
        <Link href='/' className='text-[#696c6d] hover:text-primary transition'>Home</Link>
        <Link href='/about' className='text-[#696c6d] hover:text-primary transition'>About</Link>
        <Link href='/portfolio' className='text-[#696c6d] hover:text-primary transition'>Portfolio</Link>
        <Link href='/contact' className='text-[#696c6d] hover:text-primary transition'>Contact</Link>
      </nav>

      <Socials />
      <MobileNav />
    </div>
  </header>;
};

export default Header;
