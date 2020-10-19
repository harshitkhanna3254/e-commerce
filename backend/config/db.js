import mongoose from "mongoose";
import colors from "colors";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
    });
    console.log(
      `Connection created at host: ${conn.connection.host}`.cyan.underline
    );
  } catch (error) {
    console.log(`Error \n ${error.message}`.red.bold);
    process.exit(1);
  }
};

export default connectDB;
