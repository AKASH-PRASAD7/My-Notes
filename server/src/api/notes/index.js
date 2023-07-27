import express from "express";
const router = express.Router();
import verifyCookie from "../../middleware";
import NotesModel from "../../model/notes/index";

/**
 * Route     /notes
 * Des       add new note
 * Params    none
 * Cookies   requrired
 * Access    Private
 * Method    POST
 */

router.post("/", verifyCookie, async (req, res) => {
  try {
    const notes = req.body;
    const UserNote = await NotesModel.create(notes);
    if (UserNote) {
      return res.status(200).json({ success: true, notes });
    }
    return res
      .status(500)
      .json({ success: false, error: "failed to add notes" });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

/**
 * Route     /notes
 * Des       get all user notes
 * Params    none
 * Cookies   requrired
 * Access    Private
 * Method    GEt
 */

router.get("/", verifyCookie, async (req, res) => {
  try {
    const { userid } = req.body;
    const allNotes = await NotesModel.find({ userid: userid.toString() });
    if (allNotes.length !== 0) {
      return res.status(200).json({ success: true, allNotes });
    }
    return res
      .status(404)
      .json({ success: true, message: "Please add notes!" });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

router.get("/*", (req, res) => {
  return res.status(404).send("Page Not Found!");
});
module.exports = router;
