import axios from 'axios';

export const postContactForm = async (values: any) => {
  try {
    const response = await axios.post(
      `${window.location.origin}/api/contact-info`,
      values,
    );

    return response.data;
  } catch (error) {
    return null;
  }
};
