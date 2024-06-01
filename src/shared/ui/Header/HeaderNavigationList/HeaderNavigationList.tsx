import { HeaderNavigationListData } from '@/shared/constants/headerNavigationList';
import { useRouter } from 'next/router';
import { HeaderNavigationItem } from './HeadeNavigationItem';

interface HeaderListProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLElement>,
    HTMLElement
  > {
  data: HeaderNavigationListData[];
}

export const HeaderNavigationList = ({ data, ...props }: HeaderListProps) => {
  const router = useRouter();

  const currentPathName = router.pathname;

  return (
    <nav className="hidden xl:flex gap-x-12 font-semibold" {...props}>
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
