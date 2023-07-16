import mongoose from "mongoose";
const { Schema } = mongoose;

const UserSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true, min: 5, max: 20 },
    password: { type: String, required: true, min: 8, max: 15 },
  },
  {
    timestamps: true,
  }
);

export const UserModel = mongoose.model("users", UserSchema);
