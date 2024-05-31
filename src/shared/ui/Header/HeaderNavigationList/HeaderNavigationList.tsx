'use client';

import { HeaderNavigationListData } from '@/shared/constants/headerNavigationList';
import { useCursor } from '@/shared/hooks';
// import { useRouter } from 'next/router';
import { HeaderNavigationItem } from './HeadeNavigationItem';
import { usePathname } from 'next/navigation';

interface HeaderListProps {
  data: HeaderNavigationListData[];
}

export const HeaderNavigationList = ({ data }: HeaderListProps) => {
  const { mouseEnterHandle, mouseLeaveHandle } = useCursor();

  const pathname = usePathname();

  return (
    <nav
      className="hidden xl:flex gap-x-12 font-semibold"
      onMouseEnter={mouseEnterHandle}
      onMouseLeave={mouseLeaveHandle}
    >
      {data.map(({ name, path }) => (
        <HeaderNavigationItem
          key={path}
          name={name}
          href={path}
          isCurrentPage={path === pathname}
        />
      ))}
    </nav>
  );
};
