import { useEffect } from 'react';

export const useTextAnimation = (titleWrapperRef, titleContent) => {
  useEffect(() => {
    console.log('titleWrapperRef', titleWrapperRef);
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
      }, 100 * index);
    }
  }, [titleWrapperRef]);
};
