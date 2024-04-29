import { Header as HeaderWrapper } from '@shared/ui/Header';
import Link from 'next/link';
import React from 'react';
import { headerNavigationList } from '@shared/constants/headerNavigationList';
import { Socials } from '@shared/ui';
import { HeaderMobile } from '@/shared/ui/Header/HeaderMobile';
import { useCursor } from '@/shared/hooks';
import { useRouter } from 'next/router';
import Image from 'next/image';

export const Header = ({ logoUrl, socials }: any) => {
  const router = useRouter();
  const { mouseEnterHandle, mouseLeaveHandle } = useCursor();
  const currentPathName = router.pathname;

  const logo = logoUrl ? (
    <Link
      href="/"
      onMouseEnter={mouseEnterHandle}
      onMouseLeave={mouseLeaveHandle}
    >
      <Image
        width={200}
        height={50}
        src={logoUrl ?? '/img/header/logo.svg'}
        alt="Logo"
      />
    </Link>
  ) : null;

  const mobileNav = (
    <HeaderMobile>
      <ul className="h-full flex flex-col justify-center items-center gap-y-8 text-primary font-bold text-3xl font-primary">
        {headerNavigationList.map(({ path, name }) => (
          <li key={path}>
            <Link
              href={path}
              style={
                path === currentPathName ? { color: '#3ca8cb' } : undefined
              }
            >
              {name}
            </Link>
          </li>
        ))}
      </ul>
    </HeaderMobile>
  );

  return (
    <HeaderWrapper
      logo={logo}
      rightHeaderContent={
        <Socials
          socials={socials || []}
          handleMouseEnter={mouseEnterHandle}
          handleMouseLeave={mouseLeaveHandle}
        />
      }
      mobile={mobileNav}
    >
      <nav
        className="hidden xl:flex gap-x-12 font-semibold"
        onMouseEnter={mouseEnterHandle}
        onMouseLeave={mouseLeaveHandle}
      >
        {headerNavigationList.map(({ name, path }) => (
          <Link
            key={path}
            href={path}
            style={path === currentPathName ? { color: '#3ca8cb' } : undefined}
            className="text-whiter hover:text-primary transition"
          >
            {name}
          </Link>
        ))}
      </nav>
    </HeaderWrapper>
  );
};
