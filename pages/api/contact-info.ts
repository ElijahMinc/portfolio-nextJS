import User from '@server/models/User';
import { mailService } from '@server/services/EmailService';

import connectDB from '@server/connectDb';
import { NextApiRequest, NextApiResponse } from 'next';

type ResponseData = {
  message: string;
  status: number;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>,
) {
  if (req.method !== 'POST') {
    return res.status(400).json({
      message: 'Incorrect request method',
      status: res.statusCode,
    });
  }

  await connectDB();

  const { name, email, message } = req.body;

  const user = await new User({
    name,
    email,
    message,
  });

  await user.save();

  try {
    await mailService.sendMessage({ email, message, name });
  } catch (error) {
    console.log('ERROR', error);
  }

  res.status(200).json({
    message: `Thank you for applying, ${name}!`,
    status: res.statusCode,
  });
}
