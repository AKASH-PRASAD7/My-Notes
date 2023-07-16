import express from "express";
const router = express.Router();
import { ValidateSignup } from "../../validation/Auth.validation";
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
    if (!newUser) {
      return res.status(500).json({
        status: "failed",
        message: "failed to create",
      });
    }
    return res.status(200).json({
      status: "success",
      message: newUser,
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
router.post("/signin", (req, res) => {
  try {
    return res.status(200).json({
      success: true,
      message: "Working!",
    });
  } catch (error) {
    console.log("Server error at auth/signin: ", error);
  }
});

export default router;
