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
import { useCursor, useTheme } from '@/shared/hooks';
import { Logo } from '@/shared/ui/Logo';
import { ROUTES } from '@/shared/constants/routes';
import { ThemeSwitcher } from '@/features';

export const Header = ({
  logoUrl,
  socials,
}: {
  logoUrl: string;
  socials: HeaderNavigationListData[];
}) => {
  const { mouseEnterHandle, mouseLeaveHandle } = useCursor();
  const { toggleTheme, theme } = useTheme();

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
        <>
          <Socials
            socials={socials || []}
            handleMouseEnter={mouseEnterHandle}
            handleMouseLeave={mouseLeaveHandle}
          />
          {/* <ThemeSwitcher /> */}
        </>
      }
      mobile={
        <HeaderMobile
          navigationData={headerNavigationList}
          // socials={socials || []}
        />
      }
    >
      <HeaderNavigationList data={headerNavigationList} />
    </HeaderWrapper>
  );
};
