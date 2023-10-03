import { Header as UiHeader } from '@shared/ui/Header';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { headerNavigationList } from '@shared/constants/headerNavigationList';
import { Socials } from '@shared/ui';
import { useCursor } from '@shared/hooks';
import { HeaderMobile } from '@/shared/ui/Header/HeaderMobile';

export const Header = () => {
  const { mouseEnterHandle, mouseLeaveHandle } = useCursor();

  return (
    <UiHeader
      logo={
        <Link
          href="/"
          onMouseEnter={mouseEnterHandle}
          onMouseLeave={mouseLeaveHandle}
        >
          <Image width={200} height={50} src="/img/header/logo.svg" alt="" />
        </Link>
      }
      rightHeaderContent={
        <Socials
          handleMouseEnter={mouseEnterHandle}
          handleMouseLeave={mouseLeaveHandle}
        />
      }
      mobile={
        <HeaderMobile>
          <ul className="h-full flex flex-col justify-center items-center gap-y-8 text-primary font-bold text-3xl font-primary">
            {headerNavigationList.map(({ path, name }) => (
              <li key={path}>
                <Link href={path}>{name}</Link>
              </li>
            ))}
          </ul>
        </HeaderMobile>
      }
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
            className="text-[#696c6d] hover:text-primary transition"
          >
            {name}
          </Link>
        ))}
      </nav>
    </UiHeader>
  );
};
