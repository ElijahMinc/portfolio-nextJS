import { ContactForm, postContactForm } from '@/entities';
import {
  errorNotification,
  successNotification,
} from '@/shared/lib/notificications/createNotification';
import React from 'react';

export const SendContactForm = () => {
  const handleSubmit = async (values: any) => {
    try {
      await postContactForm(values);

      successNotification('🦄 The message was successfully sent');
    } catch (error) {
      errorNotification('Something went wrong with sending email');
    }
  };

  return <ContactForm handleSubmit={handleSubmit} />;
};
