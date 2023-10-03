'use client'

export const Header = ({ logo, children, rightHeaderContent, mobile }) => {

  return <header className=' fixed w-full px-[30px] lg:px-[100px] z-30 h-[100px] lg:h-[140px] flex items-center backdrop-blur-xl'>
    <div className='w-full flex lg:flex-row justify-between items-center' >
      {/* Logo */}
      <div className='max-w-[200px]'>
          {logo}
      </div>
      {/* <Link href='/' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className='max-w-[200px]'>
        <Image width={200} height={50}  src='/img/header/logo.svg' alt='' />
      </Link> */}

      {/* <nav className='hidden xl:flex gap-x-12 font-semibold'> */}
          {children}
        {/* {headerNavigationList.map(({ name, path }) => (
            <Link key={path} href={path} className='text-[#696c6d] hover:text-primary transition'>{name}</Link>
        ))} */}
      {/* </nav> */}

      <div className='hidden xl:flex ml-24'>
          {rightHeaderContent}
      </div>

      {mobile}
    </div>
  </header>;
};

