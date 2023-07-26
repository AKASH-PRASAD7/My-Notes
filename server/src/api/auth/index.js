import express from "express";
const router = express.Router();
import {
  ValidateSignup,
  ValidateSignin,
} from "../../validation/Auth.validation";
import UserModel from "../../model/user/User.Model";

/**
 * Route     /user/signup
 * Des       Create new user
 * Params    none
 * Access    Public
 * Method    POST
 */

router.post("/signup", async (req, res) => {
  try {
    await ValidateSignup(req.body.credentials);
    const newUser = await UserModel.create(req.body.credentials);
    const token = await newUser.genrateJwtToken();
    res.cookie("jwtToken", token, {
      httpOnly: true,
      expires: new Date(Date.now() + 600000),
    });
    return res.status(201).json({ success: true, token });
  } catch (e) {
    return res.status(403).json({ message: "Failed to signup :", error: e });
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
  res.send("signin");
});

export default router;
