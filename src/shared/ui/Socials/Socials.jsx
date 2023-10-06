import React from 'react';

import {
  ImFacebook,
  ImTwitter,
  ImPinterest,
  ImInstagram,
  ImYoutube,
} from 'react-icons/im';
import { getSocialIconByNames } from './lib/getSocialIconByNames';

export const Socials = ({ handleMouseEnter, handleMouseLeave, socials }) => {
  return (
    <>
      <ul
        className="flex gap-x-4"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {!!socials.length &&
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
        {/* <li>
        <a href='#' target='_blank'><ImFacebook /></a>
      </li>
      <li>
      <a href='#' target='_blank'><ImTwitter /></a>

      </li>
      <li>
      <a href='#' target='_blank'><ImPinterest /></a>
      </li>
      <li>
        <a href='#' target='_blank'><ImInstagram /></a>
      </li>
      <li>
        <a href='#' target='_blank'><ImYoutube /></a>
      </li> */}
      </ul>
    </>
  );
};
