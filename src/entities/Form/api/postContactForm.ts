import axios from 'axios';

export const postContactForm = async (values: any) => {
  try {
    const response = await axios.post(
      'http://localhost:3000/api/send-email',
      values,
    );

    return response.data;
  } catch (error) {
    return null;
  }
};
