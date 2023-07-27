import express from "express";
const router = express.Router();
import {
  ValidateSignup,
  ValidateSignin,
} from "../../validation/Auth.validation";
import UserModel from "../../model/user/User.Model";

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
    await UserModel.findEmail(req.body.credentials.email);
    const newUser = await UserModel.create(req.body.credentials);
    const token = await newUser.genrateJwtToken();
    res.cookie("jwtToken", token, {
      httpOnly: true,
      expires: new Date(Date.now() + 600000),
    });
    return res.status(201).json({ success: true, token });
  } catch (e) {
    return res
      .status(403)
      .json({ message: "Failed to signup :", error: e.message });
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
    const token = await UserModel.signInUser(req.body.credentials);
    if (token) {
      res.cookie("jwtToken", token, {
        httpOnly: true,
        expires: new Date(Date.now() + 600000),
      });
      return res.status(200).json({ success: true, token: token });
    }
    return res
      .status(500)
      .json({ success: false, message: "Failed to sign in" });
  } catch (e) {
    res.status(404).json({ success: false, error: e.message });
  }
});
router.get("*", (req, res) => {
  return res.status(404).send("Page Not Found!");
});
export default router;
