import { ContactForm, postContactForm } from '@/entities';
import {
  errorNotification,
  successNotification,
} from '@/shared/lib/notificications/createNotification';
import React, { useCallback, useEffect, useState } from 'react';
import ReactConfetti from 'react-confetti';
import useWindowSize from 'react-use/lib/useWindowSize';

export const SendContactForm = () => {
  const [isSended, setIsSended] = useState(false);
  const { width, height } = useWindowSize();

  const handleSubmit = async (values: any) => {
    try {
      await postContactForm(values);

      successNotification('🦄 The message was successfully sent');
      setIsSended(true);
    } catch (error) {
      errorNotification('Something went wrong with sending email');
    }
  };

  // const interval = {
  //   animation:  setInterval(() => {
  //     setPieces((prev) => prev - 2);
  //   }, 100);
  // }

  // const anim = setInterval(() => {
  //   setPieces((prev) => prev - 2);
  // }, 100);

  // const interval = useCallback((cb: any) => setInterval(cb, 1000), []);

  // useEffect(() => {
  //   if (!isSended) return;

  //   const updatePiecies = () => {
  //     setPieces((prev) => {
  //       // if (prev <= 0) return 0;

  //       return prev - 10;
  //     });
  //   };

  //   const intervalId = interval(updatePiecies);

  //   console.log('intervalId', intervalId);

  //   if (pieaces <= 0) {
  //     setIsSended(false);
  //     setPieces(200);
  //   }

  //   return () => {
  //     console.log('pieaces', pieaces);
  //     console.log('isSended', isSended);

  //     if (pieaces >= 0) return;
  //     console.log('we are here', pieaces, isSended);
  //     clearInterval(intervalId);
  //     // setState(true);
  //   };
  // }, [pieaces, isSended]);

  return (
    <>
      <button onClick={() => setIsSended((prev) => !prev)}>Toggle</button>
      <ContactForm handleSubmit={handleSubmit} />
      {/* {isSended && <ReactConfetti width={width} height={height} />} */}
      {isSended && (
        <ReactConfetti
          width={width}
          height={height}
          numberOfPieces={100}
          tweenDuration={2000}
          // run={isSended}
          // opacity={isSended ? 1 : 0}
          // className={`${isSended ? 'show' : 'hide'}`}
        />
      )}
    </>
  );
};
