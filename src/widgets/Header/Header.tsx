import {
  HeaderMobile,
  HeaderNavigationList,
  Header as HeaderWrapper,
} from '@shared/ui/Header';
import React from 'react';
import {
  HeaderNavigationListData,
  headerNavigationList,
} from '@shared/constants/headerNavigationList';
import { Socials } from '@shared/ui';
import { Logo } from '@/shared/ui/Logo';
import { ROUTES } from '@/shared/constants/routes';
import { useCursor } from '@/entities/Cursor/lib/useCursor';

export const Header = ({
  logoUrl,
  socials,
}: {
  logoUrl: string;
  socials: HeaderNavigationListData[];
}) => {
  const { mouseEnterHandle, mouseLeaveHandle } = useCursor();

  return (
    <HeaderWrapper
      logo={
        <Logo
          href={ROUTES.HOME}
          logoUrl={logoUrl}
          onMouseEnter={mouseEnterHandle}
          onMouseLeave={mouseLeaveHandle}
        />
      }
      rightContent={
        <Socials
          socials={socials || []}
          handleMouseEnter={mouseEnterHandle}
          handleMouseLeave={mouseLeaveHandle}
        />
      }
      mobile={
        <HeaderMobile
          navigationData={headerNavigationList}
          // socials={socials || []}
        />
      }
    >
      <HeaderNavigationList
        data={headerNavigationList}
        onMouseEnter={mouseEnterHandle}
        onMouseLeave={mouseLeaveHandle}
      />
    </HeaderWrapper>
  );
};
