import { HeaderNavigationListData } from '@/shared/constants/headerNavigationList';
import { useCursor } from '@/shared/hooks';
import Link from 'next/link';
import { useRouter } from 'next/router';

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
  );
};
