import React, { useState, useEffect, createContext } from 'react';

export const CursorContext = createContext();

export const CursorProvider = ({ children }) => {
  const [cursorPos, setCursorPos] = useState({
    x: 0,
    y: 0,
  });
  const [cursorBg, setCursorBg] = useState('default');

  useEffect(() => {
    const mobileViewportIsActive = window.innerWidth < 768;

    if (mobileViewportIsActive) {
      setCursorBg('none');

      return;
    }

    const move = (e) =>
      setCursorPos({
        x: e.clientX,
        y: e.clientY,
      });

    window.addEventListener('mousemove', move);

    return () => {
      window.removeEventListener('mousemove', move);
    };
  }, []);

  const cursorVariants = {
    default: {
      width: '50px',
      height: '50px',
      x: cursorPos.x - 25,
      y: cursorPos.y - 25,
      backgroundColor: '#0e1112',
      mixBlendMode: 'normal',
      transition: {
        ease: 'linear',
        duration: 0,
        width: {
          ease: 'linear',
          duration: 0.1,
        },
        height: {
          ease: 'linear',
          duration: 0.1,
        },
      },
    },
    text: {
      width: '150px',
      height: '150px',
      x: cursorPos.x - 75,
      y: cursorPos.y - 75,
      backgroundColor: '#fff',
      mixBlendMode: 'difference',
      transition: {
        ease: 'linear',
        duration: 0,
        width: {
          ease: 'linear',
          duration: 0.1,
        },
        height: {
          ease: 'linear',
          duration: 0.1,
        },
      },
    },
    none: {
      width: '0px',
      height: '0px',
      x: 0,
      y: 0,
      backgroundColor: 'rgba(255,255,255, 1)',
      mixBlendMode: 'normal',
    },
  };

  const mouseEnterHandle = () =>
    !(window.innerWidth < 768) && setCursorBg('text');
  const mouseLeaveHandle = () =>
    !(window.innerWidth < 768) && setCursorBg('default');

  const setCursorNone = () => setCursorBg('none');
  const setCursorDefault = () => setCursorBg('default');

  return (
    <CursorContext.Provider
      value={{
        cursorVariants,
        cursorBg,
        mouseEnterHandle,
        mouseLeaveHandle,
        setCursorDefault,
        setCursorNone,
      }}
    >
      {children}
      {/* <motion.div
        variants={cursorVariants}
        animate={cursorBg}
        className={`${
          cursorBg === 'none' && 'hidden'
        } w-[32px] h-[32px] bg-primary fixed top-0 left-0 pointer-events-none z-50 rounded-full`}
      /> */}
    </CursorContext.Provider>
  );
};
