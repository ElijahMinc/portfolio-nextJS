import Image from 'next/image';
import NextLink, { LinkProps } from 'next/link';
import { HTMLProps } from 'react';

interface LogoProps {
  logoUrl: string;
}

export const Logo = ({
  logoUrl,
  href,
  ...props
}: LogoProps & LinkProps & HTMLProps<HTMLAnchorElement>) => {
  return logoUrl ? (
    <NextLink href={href}>
      <a {...props}>
        <Image
          width={200}
          height={50}
          src={logoUrl ?? '/img/header/logo.svg'}
          alt="Logo"
        />
      </a>
    </NextLink>
  ) : null;
};
