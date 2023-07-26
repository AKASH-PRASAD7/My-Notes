import mongoose from "mongoose";

const connectToMongoDb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("DB Connected");
  } catch (error) {
    console.log("Error at MongoDB Connection: ", error);
  }
};
export default connectToMongoDb;
