import { NextApiRequest, NextApiResponse } from 'next';

import mailService from './services/EmailService';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'POST') {
    res.status(404).json({
      message: 'Oops, somthing went wrong',
    });
  }

  const { email, message, name } = req.body as {
    name: string;
    email: string;
    message: string;
  };

  try {
    await mailService.sendMessage({ email, message, name });
  } catch (error) {
    console.log('error', error);
    res.status(500).json({
      message: 'Oops, something went wrong',
    });
  }

  res.status(200).json({
    message: 'The email was succesfully sended',
  });
}
