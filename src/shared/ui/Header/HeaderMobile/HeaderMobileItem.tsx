import Link from 'next/link';

interface HeaderMobileItemProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLLIElement>,
    HTMLLIElement
  > {
  name: string;
  path: string;
  isCurrentPage: boolean;
}

export const HeaderMobileItem = ({
  path,
  name,
  isCurrentPage,
  ...rest
}: HeaderMobileItemProps) => {
  return (
    <li {...rest}>
      <Link
        href={path}
        style={isCurrentPage ? { color: '#3ca8cb' } : undefined}
      >
        {name}
      </Link>
    </li>
  );
};
