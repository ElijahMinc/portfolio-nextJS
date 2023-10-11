import {
  ImFacebook,
  ImTwitter,
  ImPinterest,
  ImInstagram,
  ImYoutube,
} from 'react-icons/im';

export const getSocialIconByNames = (socialLink: string) => {
  const socialsNames = {
    instagram: 'instagram',
    youtube: 'youtube',
    twitter: 'twitter',
    pinterest: 'pinterest',
    facebook: 'facebook',
  };

  const linkName = socialLink.split('.')?.[1] as keyof typeof socialsNames;

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
    default:
      return {
        name: '',
        path: null,
        icon: null,
      };
  }
};
