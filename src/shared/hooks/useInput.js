'use client';

import  { useState } from "react";
import {useValidate} from './useValidate'

export const useInput = (initialValue, configValidate) => {
   const [isDirty, setDirty] = useState(false)
   const [value, setValue ] = useState(initialValue)

   const errorsHandler = useValidate(value, configValidate)

   const onChange = (event) => setValue(event.target.value)
   const onBlur = () =>  setDirty(true)

   return {
      inputInfo: {
         value,
         onChange,
         onBlur,
      },
      isDirty,
      ...errorsHandler
   }
}