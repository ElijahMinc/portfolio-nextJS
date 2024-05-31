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

export const Header = ({
  logoUrl,
  socials,
}: {
  logoUrl: string;
  socials: HeaderNavigationListData[];
}) => {
  return (
    <HeaderWrapper
      logo={<Logo href={ROUTES.HOME} logoUrl={logoUrl} />}
      rightContent={<Socials socials={socials || []} />}
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
