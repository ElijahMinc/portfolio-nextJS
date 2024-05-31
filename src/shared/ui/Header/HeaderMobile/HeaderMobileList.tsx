import { usePathname } from 'next/navigation';
import { HeaderMobileItem } from './HeaderMobileItem';

interface HeaderMobileListProps {
  navigationData: any[];
  onClickItem: () => void;
}

export const HeaderMobileList = ({
  navigationData,
  onClickItem,
}: HeaderMobileListProps) => {
  const currentPathName = usePathname();
  return (
    <ul className="h-full flex flex-col justify-center items-center gap-y-8 text-primary font-bold text-3xl font-primary">
      {navigationData.length &&
        navigationData.map(({ name, path }) => (
          <HeaderMobileItem
            key={`${path}-${name}`}
            name={name}
            path={path}
            isCurrentPage={path === currentPathName}
            onClick={onClickItem}
          />
        ))}
    </ul>
  );
};
