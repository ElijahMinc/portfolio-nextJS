import axios from 'axios';

export const postContactForm = async (values: any) => {
  try {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/api/send-contact-info`,
      values,
    );

    return response.data;
  } catch (error) {
    return null;
  }
};
