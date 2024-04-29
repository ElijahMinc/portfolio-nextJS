import { useState } from 'react';
import { useValidate } from './useValidate';

export const useInput = (initialValue, configValidate) => {
  const [isDirty, setDirty] = useState(false);
  const [value, setValue] = useState(initialValue);

  const errorsHandler = useValidate(value, configValidate);

  const onChange = (event) => setValue(event.target.value);
  const onBlur = () => setDirty(true);

  const trigger = () => setDirty(true);
  const reset = () => {
    setDirty(false);
    setValue('');
  };

  return {
    inputInfo: {
      value,
      onChange,
      onBlur,
    },
    reset,
    trigger,
    isDirty,
    ...errorsHandler,
  };
};
