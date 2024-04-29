import mongoose from 'mongoose';

declare global {
  interface MongooseTypes {
    connection: Awaited<MongooseTypes['promise']> | null;
    promise: ReturnType<typeof mongoose.connect> | null;
  }

  var Mongoose: MongooseTypes;
}

const DATABASE_URL = process.env.NEXT_DATABASE_URL;

if (!DATABASE_URL) {
  console.error('Error connection');

  throw new Error(
    'Please define the DATABASE_URL environment variable inside .env.local',
  );
}

let cached = global.Mongoose;

if (!cached) {
  cached = global.Mongoose = { connection: null, promise: null };
}

async function connectDB() {
  if (cached.connection) {
    return cached.connection;
  }

  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
    };

    cached.promise = mongoose.connect(DATABASE_URL!, opts).then((mongoose) => {
      return mongoose;
    });
  }
  cached.connection = await cached.promise;
  return cached.connection;
}

export default connectDB;
