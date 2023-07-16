import express from "express";
const router = express.Router();

/**
 * Route     /signin
 * Des       Create new account
 * Params    none
 * Access    Public
 * Method    POST
 */
router.post("/", (req, res) => {
  try {
    return res.status(200).json({
      success: true,
      message: "Working!",
    });
  } catch (error) {
    console.log("Server error at auth/: ", error);
  }
});

export default router;
