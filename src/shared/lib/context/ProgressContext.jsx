//Route Events.
// Router.events.on('routeChangeStart', () => NProgress.start());
// Router.events.on('routeChangeComplete', () => NProgress.done());
// Router.events.on('routeChangeError', () => NProgress.done());

import React, { useState, useEffect, createContext } from 'react';

export const ProgressContext = createContext();

export const CursorProvider = ({ children }) => {
  const [cursorPos, setCursorPos] = useState();

  useEffect(() => {}, []);

  return (
    <ProgressContext.Provider
    // value={}
    >
      <div>{children}</div>
    </ProgressContext.Provider>
  );
};
