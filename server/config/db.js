import mongoose from 'mongoose';

const connectDB = () => {
  mongoose.connect(
    'mongodb://127.0.0.1:27017/ecom',
    {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true
    },
    () => console.log(`DB CONNECT....`)
  );
};

export default connectDB;
