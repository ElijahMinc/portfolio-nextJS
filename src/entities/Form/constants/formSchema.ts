export const formSchema = {
  name: {
    validation: ['isRequired', 'isLengthRequired'],
  },
  email: {
    validation: ['email'],
  },
  message: {
    validation: ['isRequired', 'isLengthRequired'],
  },
};
