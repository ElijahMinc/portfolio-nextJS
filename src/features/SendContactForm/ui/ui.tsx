import { ContactForm, postContactForm } from '@/entities';
import {
  errorNotification,
  successNotification,
} from '@/shared/lib/notificications/createNotification';
import React, { useState } from 'react';
import ReactConfetti from 'react-confetti';
import { useWindowSize } from 'react-use';

export const SendContactForm = () => {
  const { width, height } = useWindowSize();
  const [isSendStatus, setSendStatus] = useState(false);

  const onSubmit = async (values: any) => {
    const res = await postContactForm(values);

    if (!res) {
      errorNotification('Something went wrong with sending email');

      return;
    }

    successNotification(`🦄 ${res.message}`);
    setSendStatus(true);

    setTimeout(() => {
      setSendStatus(false);
    }, 5000);
  };

  return (
    <>
      <ContactForm buttonSubmitText="Send it" handleSubmit={onSubmit} />
      {isSendStatus && (
        <ReactConfetti
          width={width}
          height={height}
          numberOfPieces={100}
          tweenDuration={2000}
          run={isSendStatus}
          opacity={isSendStatus ? 1 : 0}
        />
      )}
    </>
  );
};
