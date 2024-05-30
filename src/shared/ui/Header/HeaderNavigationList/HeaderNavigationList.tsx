import { HeaderNavigationListData } from '@/shared/constants/headerNavigationList';
import { useCursor } from '@/shared/hooks';
import { useRouter } from 'next/router';
import { HeaderNavigationItem } from './HeadeNavigationItem';

interface HeaderListProps {
  data: HeaderNavigationListData[];
}

export const HeaderNavigationList = ({ data }: HeaderListProps) => {
  const router = useRouter();
  const { mouseEnterHandle, mouseLeaveHandle } = useCursor();

  const currentPathName = router.pathname;

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
          isCurrentPage={path === currentPathName}
        />
      ))}
    </nav>
  );
};
