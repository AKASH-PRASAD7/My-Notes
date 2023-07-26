import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
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

//attachments
UserSchema.methods.genrateJwtToken = function () {
  try {
    return jwt.sign({ user: this._id.toString() }, process.env.SECRET_KEY);
  } catch (error) {
    return error;
  }
};

//helper functions
UserSchema.pre("save", async function (next) {
  try {
    if (this.isModified("password")) {
      this.password = await bcrypt.hash(this.password, 10);
    } else {
      next();
    }
  } catch (e) {
    return e;
  }
});

module.exports = mongoose.model("users", UserSchema);
