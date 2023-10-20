import { Header as UiHeader } from '@shared/ui/Header';
import Link from 'next/link';
import React from 'react';
import { headerNavigationList } from '@shared/constants/headerNavigationList';
import { Socials } from '@shared/ui';
import { HeaderMobile } from '@/shared/ui/Header/HeaderMobile';
import { useCursor } from '@/shared/hooks';

export const Header = ({ logoImg, socials }: any) => {
  const { mouseEnterHandle, mouseLeaveHandle } = useCursor();

  const logo = logoImg ? (
    <Link
      href="/"
      onMouseEnter={mouseEnterHandle}
      onMouseLeave={mouseLeaveHandle}
    >
      <img
        width={200}
        height={50}
        src={logoImg ?? '/img/header/logo.svg'}
        alt=""
      />
    </Link>
  ) : (
    <></>
  );

  const mobileNav = (
    <HeaderMobile>
      <ul className="h-full flex flex-col justify-center items-center gap-y-8 text-primary font-bold text-3xl font-primary">
        {headerNavigationList.map(({ path, name }) => (
          <li key={path}>
            <Link href={path}>{name}</Link>
          </li>
        ))}
      </ul>
    </HeaderMobile>
  );

  return (
    <UiHeader
      logo={logo}
      rightHeaderContent={
        <Socials
          socials={socials ?? []}
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
            className="text-whiter hover:text-primary transition"
          >
            {name}
          </Link>
        ))}
      </nav>
    </UiHeader>
  );
};
