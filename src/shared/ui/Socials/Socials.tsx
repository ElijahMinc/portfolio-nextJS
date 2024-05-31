'use client';

import { useCursor } from '@/shared/hooks';
import { getSocialIconByNames } from './lib/getSocialIconByNames';

interface SocialsProps extends React.DOMAttributes<HTMLUListElement> {
  handleMouseEnter?: React.MouseEventHandler<HTMLUListElement>;
  handleMouseLeave?: React.MouseEventHandler<HTMLUListElement>;
  socials: any[];
}

export const Socials = ({
  handleMouseEnter,
  handleMouseLeave,
  socials,
}: SocialsProps) => {
  const { mouseEnterHandle, mouseLeaveHandle } = useCursor();

  return (
    <ul
      className="flex gap-10"
      onMouseEnter={mouseEnterHandle}
      onMouseLeave={mouseLeaveHandle}
    >
      {!!socials?.length &&
        socials.map((socialLink) => {
          const socialData = getSocialIconByNames(socialLink);

          if (!socialData.path) {
            return null;
          }

          return (
            <li key={socialData.path}>
              <a href={socialData.path} target="_blank">
                {socialData.icon}
              </a>
            </li>
          );
        })}
    </ul>
  );
};
