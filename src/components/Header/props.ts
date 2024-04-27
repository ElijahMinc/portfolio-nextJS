import { SocialLink } from '@/helpers/getSocialIconByNames';
import { ReactNode } from 'react';

export interface HeaderProps {
  logoImg: ReactNode | null;
  socials: SocialLink[];
}
