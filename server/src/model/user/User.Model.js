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
UserSchema.methods.genrateJwtToken = () => {
  try {
    return jwt.sign({ user: this._id.toString() }, "akash");
  } catch (error) {
    return error;
  }
};

//helper functions
UserSchema.pre("save", function (next) {
  const user = this;

  //pass is modified
  if (!user.isModified("password")) return next();

  //salting pass
  bcrypt.genSalt(2, (error, salt) => {
    if (error) return next(error);

    //hashing
    bcrypt.hash(user.password, salt, (error, hash) => {
      if (error) {
        return next(error);
      }
      user.password = hash;
      return next();
    });
  });
});

export const UserModel = mongoose.model("users", UserSchema);
