/* eslint-disable react/display-name */
import { useInput } from '@/shared/hooks';
import { isValidEmail } from '@/shared/lib/validate/isValidaEmail';
import { Input } from '@/shared/ui/Input/Input';
import { useState } from 'react';
import { Button, Spinner } from '@/shared/ui';

interface ContactFormProps {
  handleSubmit?: (values: any) => Promise<any>;
  buttonSubmitText?: string;

  isResetFormAfterSuccessfulRequest?: boolean;
}

export const ContactForm = ({
  buttonSubmitText,
  handleSubmit,
  isResetFormAfterSuccessfulRequest = true,
}: ContactFormProps) => {
  const [isLoading, setLoading] = useState(false);

  const nameInputProvider = useInput('', {
    minLength: 1,
  });

  const emailInputProvider = useInput('', {
    minLength: 1,
    validate: (value: string) => isValidEmail(value),
  });

  const messageInputProvider = useInput('', {
    minLength: 1,
  });

  const onSubmit = async (e: any) => {
    e.preventDefault();

    const values = {
      name: nameInputProvider.inputInfo.value,
      email: emailInputProvider.inputInfo.value,
      message: messageInputProvider.inputInfo.value,
    };

    let isValid =
      nameInputProvider.validInput &&
      emailInputProvider.validInput &&
      messageInputProvider.validInput;

    if (!isValid) return;

    setLoading(true);
    await handleSubmit?.(values);
    setLoading(false);

    if (!isResetFormAfterSuccessfulRequest) return;

    nameInputProvider.reset();
    emailInputProvider.reset();
    messageInputProvider.reset();
  };

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-y-4">
      <div className="flex gap-10">
        <Input
          name="name"
          onChange={nameInputProvider.inputInfo.onChange}
          onBlur={nameInputProvider.inputInfo.onBlur}
          value={nameInputProvider.inputInfo.value}
          type="text"
          placeholder="Your name"
          isError={!nameInputProvider.validInput && !!nameInputProvider.isDirty}
        />
        <Input
          name="email"
          onChange={emailInputProvider.inputInfo.onChange}
          onBlur={emailInputProvider.inputInfo.onBlur}
          value={emailInputProvider.inputInfo.value}
          type="text"
          placeholder="Your email address"
          isError={
            !emailInputProvider.validInput && !!emailInputProvider.isDirty
          }
        />
      </div>
      <Input
        name="message"
        onChange={messageInputProvider.inputInfo.onChange}
        onBlur={messageInputProvider.inputInfo.onBlur}
        value={messageInputProvider.inputInfo.value}
        type="text"
        placeholder="Your message"
        isError={
          !messageInputProvider.validInput && !!messageInputProvider.isDirty
        }
      />
      <Button
        type="submit"
        disabled={isLoading}
        className="btn mt-[30px] mx-auto lg:max-0 self-start hover:rounded-bl-lg hover:tracking-widest disabled:bg-white:pointer-events-none"
      >
        {isLoading ? 'Sending...' : buttonSubmitText ?? 'Send it'}
        {isLoading && <Spinner size="sm" />}
      </Button>
    </form>
  );
};
