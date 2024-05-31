'use client';
import { useEffect } from 'react';

export const useTextAnimation = (titleWrapperRef, titleContent) => {
  useEffect(() => {
    if (!window) return;
    if (!titleWrapperRef || !titleContent?.length) return;

    titleWrapperRef.innerHTML = '';

    for (let index = 0; index < titleContent.length; index++) {
      const char = titleContent.charAt(index);

      const span = document.createElement('span');
      span.textContent = char;
      titleWrapperRef.appendChild(span);
      span.classList.add('span-animation');

      setTimeout(() => {
        span.classList.add('animate');
      }, 50 * index);
    }
  }, [titleWrapperRef]);
};
