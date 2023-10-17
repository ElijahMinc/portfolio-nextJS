import { useInput } from '@/shared/hooks';
import { isValidEmail } from '@/shared/lib/validate/isValidaEmail';
import { Button } from '@/shared/ui';
import { Input } from '@/shared/ui/Input/Input';

interface ContactFormProps {
  handleSubmit: any;
}

export const ContactForm = ({ handleSubmit }: ContactFormProps) => {
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

  const submit = (e: any) => {
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

    handleSubmit(values);

    nameInputProvider.reset();
    emailInputProvider.reset();
    messageInputProvider.reset();
  };

  return (
    <form onSubmit={submit} className="flex flex-col gap-y-4">
      <div className="flex gap-10">
        {/* <input className="outline-none border-b border-b-rose-300 h-[60px] bg-transparent font-secondary w-full pl-3 placeholder:text-[#757879]" /> */}
        <Input
          onChange={nameInputProvider.inputInfo.onChange}
          onBlur={nameInputProvider.inputInfo.onBlur}
          value={nameInputProvider.inputInfo.value}
          type="text"
          placeholder="Your name"
          isError={!nameInputProvider.validInput && !!nameInputProvider.isDirty}
        />
        <Input
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
        onClick={() => {
          nameInputProvider.trigger();
          emailInputProvider.trigger();
          messageInputProvider.trigger();
        }}
        className="btn mt-[30px] mx-auto lg:max-0 self-start hover:rounded-bl-lg hover:tracking-widest"
      >
        Send it
      </Button>
    </form>
  );
};
