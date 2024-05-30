import Link, { LinkProps } from 'next/link';
import cn from 'classnames';

interface HeaderMobileItemProps extends LinkProps {
  name: string;
  isCurrentPage: boolean;
  className?: string;
}

export const HeaderNavigationItem = ({
  name,
  isCurrentPage,
  className,
  ...rest
}: HeaderMobileItemProps) => {
  return (
    <Link
      style={isCurrentPage ? { color: '#3ca8cb' } : undefined}
      className={cn(className, 'text-whiter hover:text-primary transition')}
      {...rest}
    >
      {name}
    </Link>
  );
};
