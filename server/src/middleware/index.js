import UserModel from "../model/user/User.Model";
import jwt from "jsonwebtoken";

const verifyCookie = async (req, res, next) => {
  try {
    const { jwtToken } = req.cookies;
    const token = jwt.verify(jwtToken, process.env.SECRET_KEY);
    const user = await UserModel.findOne({ _id: token.user });
    if (user) {
      req.body = { userid: user._id, ...req.body };
      next();
    } else {
      return res
        .status(404)
        .json({ success: false, error: "User does not exist" });
    }
  } catch (error) {
    return res.status(401).json({ success: false, error: error.message });
    next();
  }
};
module.exports = verifyCookie;
