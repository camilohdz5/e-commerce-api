import mongoose, { ConnectionOptions } from 'mongoose';

const connectDB = async () => {
  try {
    const mongooseOptions: ConnectionOptions = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    };
    const conn = await mongoose.connect(`${process.env.MONGODB_URL}`, mongooseOptions);

    console.log(`MongoDB Connected: ${conn.connection.host}`);
    console.log(`MongoDB Db Name: ${conn.connection.name}`);
  } catch (err) {
    console.error(`error: ${err.message}`);
    process.exit(1);
  }
};

export default connectDB;
