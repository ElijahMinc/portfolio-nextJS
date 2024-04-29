import mongoose from 'mongoose';

const User = new mongoose.Schema(
  {
    name: String,
    email: String,
    message: String,
  },
  {
    timestamps: true,
  },
);

export default mongoose.models.User || mongoose.model('User', User);
