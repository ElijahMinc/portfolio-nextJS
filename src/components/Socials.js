import React, { useContext } from 'react';

import { ImFacebook, ImTwitter, ImPinterest, ImInstagram, ImYoutube } from 'react-icons/im'
import { useCursor } from '@/shared/hooks';

const Socials = () => {
  const { mouseEnterHandle, mouseLeaveHandle } = useCursor()

  return <>
    <ul className='flex gap-x-4' onMouseEnter={mouseEnterHandle} onMouseLeave={mouseLeaveHandle}>
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

export default Socials;
