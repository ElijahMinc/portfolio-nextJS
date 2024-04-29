import {
  ImFacebook,
  ImTwitter,
  ImPinterest,
  ImInstagram,
  ImYoutube,
  ImLinkedin,
  ImGithub,
} from 'react-icons/im';

export const getSocialIconByNames = (socialLink: string) => {
  const socialsNames = {
    instagram: 'instagram',
    youtube: 'youtube',
    twitter: 'twitter',
    pinterest: 'pinterest',
    facebook: 'facebook',
    linkedin: 'linkedin',
    github: 'github',
  };

  const linkName = socialLink
    .split('/')?.[2]
    ?.replace(/www\.|\.com/g, '') as keyof typeof socialsNames;

  if (!socialsNames?.[linkName]) {
    return {
      name: '',
      path: null,
      icon: null,
    };
  }

  switch (linkName) {
    case 'instagram':
      return {
        name: socialsNames[linkName],
        path: socialLink,
        icon: <ImInstagram />,
      };

    case 'facebook':
      return {
        name: socialsNames[linkName],
        path: socialLink,
        icon: <ImFacebook />,
      };

    case 'twitter':
      return {
        name: socialsNames[linkName],
        path: socialLink,
        icon: <ImTwitter />,
      };

    case 'pinterest':
      return {
        name: socialsNames[linkName],
        path: socialLink,
        icon: <ImPinterest />,
      };

    case 'youtube':
      return {
        name: socialsNames[linkName],
        path: socialLink,
        icon: <ImYoutube />,
      };

    case 'linkedin':
      return {
        name: socialsNames[linkName],
        path: socialLink,
        icon: <ImLinkedin />,
      };

    case 'github':
      return {
        name: socialsNames[linkName],
        path: socialLink,
        icon: <ImGithub />,
      };

    default:
      return {
        name: '',
        path: null,
        icon: null,
      };
  }
};
