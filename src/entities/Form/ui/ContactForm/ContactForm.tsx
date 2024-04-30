/* eslint-disable react/display-name */
import { Input } from '@/shared/ui/Input/Input';
import { useState } from 'react';
import { Button, Spinner } from '@/shared/ui';
import { useForm } from '@/shared/hooks/form';
import { initialFormValues } from '../../constants/initialFormValues';
import { formSchema } from '../../constants/formSchema';

interface ContactFormProps {
  handleSubmit?: (values: Record<string, unknown>) => Promise<any>;
  buttonSubmitText?: string;
}

export const ContactForm = ({
  buttonSubmitText,
  handleSubmit,
}: ContactFormProps) => {
  const [isLoading, setLoading] = useState(false);

  const {
    values,
    handleSubmit: onSubmit,
    handleBlur,
    handleChange,
    errors,
    clearValues,
  } = useForm({
    callback: async (values: any) => {
      setLoading(true);

      await handleSubmit?.(values);

      setLoading(false);

      clearValues(initialFormValues);
    },
    schema: formSchema,
    initialValues: initialFormValues,
  }) as any;

  const submitText = isLoading ? 'Sending...' : buttonSubmitText ?? 'Send it';

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-y-4">
      <div className="flex gap-10">
        <div>
          <Input
            name="name"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.name}
            type="text"
            placeholder="Your name"
            isError={!!errors?.['name']}
          />
          {errors?.['name'] && (
            <p className="text-red-500 text-xs mt-2">{errors?.['name']}</p>
          )}
        </div>
        <div>
          <Input
            name="email"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
            type="text"
            placeholder="Your email address"
            isError={!!errors?.['email']}
          />
          {errors?.['email'] && (
            <p className="text-red-500 text-xs mt-2">{errors?.['email']}</p>
          )}
        </div>
      </div>
      <div>
        <Input
          name="message"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.message}
          type="text"
          placeholder="Your message"
          isError={!!errors?.['message']}
        />
        {errors?.['message'] && (
          <p className="text-red-500 text-xs mt-2">{errors?.['message']}</p>
        )}
      </div>
      <Button
        type="submit"
        disabled={isLoading}
        className="btn mt-[30px] mx-auto lg:max-0 self-start hover:rounded-bl-lg hover:tracking-widest disabled:bg-white:pointer-events-none"
      >
        {submitText}
        {isLoading && <Spinner size="sm" />}
      </Button>
    </form>
  );
};
