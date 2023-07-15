import mongoose from "mongoose";
const URI = process.env.MONGODB_URI;
console.log(process.env.MONGODB_URI);

const connectToMongoDb = async () => {
  try {
    await mongoose.connect(URI);
    console.log("DB Connected");
  } catch (error) {
    console.log("Error at MongoDB Connection: ", error);
  }
};
export default connectToMongoDb;
