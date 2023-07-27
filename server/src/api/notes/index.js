import express from "express";
const router = express.Router();

router.get("/*", (req, res) => {
  return res.status(404).send("Page Not Found!");
});
module.exports = router;
