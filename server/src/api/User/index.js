import express from "express";
import res from "express/lib/response";
const router = express.Router();
import UserModel from "../../model/user/User.Model";
import verifyUser from "../../middleware/index";
/**
 * Route     /user
 * Des       Get all users
 * Params    none
 * Access    Public
 * Method    GET
 */

router.get("/", verifyUser, async (req, res) => {
  try {
    const { user } = req.body;
    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "No Users found" });
    }
    return res.status(200).json({ success: true, user });
  } catch (e) {
    res.status(500).json({ success: false, message: e.message });
  }
});

/**
 * Route     /user/:id
 * Des       Get user by id
 * Params    id
 * Access    Public
 * Method    GET
 */

router.get("/", async (req, res) => {
  try {
    const _id = req.params.id;
    const user = await UserModel.findById({ _id });
    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "Inavlid user id" });
    }
    return res.status(200).json({ success: true, user });
  } catch (e) {
    res.status(500).json({ success: false, message: e.message });
  }
});

router.get("*", (req, res) => {
  return res.status(404).send("Page Not Found!");
});

module.exports = router;
