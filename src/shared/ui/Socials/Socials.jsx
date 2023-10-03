import React from 'react';

import { ImFacebook, ImTwitter, ImPinterest, ImInstagram, ImYoutube } from 'react-icons/im'

export const Socials = ({ handleMouseEnter, handleMouseLeave }) => {

  return <>
    <ul className='flex gap-x-4' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <li>
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
      </li>
    </ul>
  </>;
};

