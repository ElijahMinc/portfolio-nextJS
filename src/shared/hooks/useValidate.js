'use client'
import { useCallback, useEffect, useState } from "react";


export const useValidate = (value, config) => {
   const [isEmpty, setEmpty] = useState(false)
   const [maxLength] = useState(config.maxLength)
   const [maxLengthError, setMaxLengthError] = useState(false)
   const [minLength] = useState(config.minLength)
   const [minLengthError, setMinLengthError] = useState(false)

   const [validInput, setValidInput] = useState(false)

   const handleEmpty = useCallback(() => setEmpty(!value.length), [value.length])

   useEffect(() => {
      handleEmpty()

      Object.keys(config).forEach(currentConfig => {
         switch (currentConfig) {
            case 'maxLength':
               setMaxLengthError(value.length > maxLength)
               break;
            case 'minLength':
               setMinLengthError(value.length < minLength)
               break;
            default:
               return
         }
      })
   }, [value, handleEmpty, config, maxLength, minLength])

   useEffect(() => {
      if(minLengthError || maxLengthError || isEmpty){
         setValidInput(false)
      }else{
         setValidInput(true)
      }
      
   }, [maxLengthError,minLengthError, isEmpty])

   return { 
      isEmpty,
      maxLength,
      minLength,
      maxLengthError,
      minLengthError,
      validInput
   }
}