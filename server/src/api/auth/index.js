import express from "express";
const router = express.Router();
import {
  ValidateSignup,
  ValidateSignin,
} from "../../validation/Auth.validation";
import { UserModel } from "../../model/user/User.Model";

/**
 * Route     /auth/signup
 * Des       Create new user
 * Params    none
 * Access    Public
 * Method    POST
 */

router.post("/signup", async (req, res) => {
  try {
    await ValidateSignup(req.body.credentials);
    await UserModel.find({ email: req.body.credentials.email });
    const newUser = await UserModel.create(req.body.credentials);
    const token = newUser.genrateJwtToken();
    console.log(token);
    if (!newUser) {
      return res.status(500).json({
        status: "failed",
        message: "failed to create",
      });
    }
    return res.status(200).json({
      status: "success",
      message: newUser,
      token: token,
    });
  } catch (error) {
    return res.status(500).json({ status: "failed", message: error.message });
  }
});

/**
 * Route     /auth/signin
 * Des       sign in to existing account
 * Params    none
 * Access    Public
 * Method    POST
 */
router.post("/signin", async (req, res) => {
  try {
    await ValidateSignin(req.body.credentials);
    const user = await UserModel.findOne({ email: req.body.credentials.email });
    if (!user) {
      return res
        .status(404)
        .json({ status: "failed", message: "Invalid Credentials" });
    }
    return res.status(200).json({ status: "success", message: user });
  } catch (error) {
    return res.status(500).json({ status: "failed", message: error.message });
  }
});

export default router;
