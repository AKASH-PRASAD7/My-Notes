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
 * Method    GET
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

/**
 * Route     /notes/:notesId
 * Des       Update a note
 * Params    notesId
 * Cookies   requrired
 * Access    Private
 * Method    PATCH
 */

router.patch("/:notesId", verifyCookie, async (req, res) => {
  try {
    const { notesId } = req.params;
    const { tittle, type, description, userid } = req.body;
    const updateNote = await NotesModel.findOneAndUpdate(
      { _id: notesId, userid: userid.toString() },
      { tittle, type, description },
      {
        new: true,
      }
    );
    if (!updateNote) {
      return res
        .status(403)
        .json({ success: false, error: "Not Authorized Note not found" });
    }
    return res.status(200).json({ success: true, updateNote });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

/**
 * Route     /notes/:notesId
 * Des       Delete a note
 * Params    notesId
 * Cookies   requrired
 * Access    Private
 * Method    Delete
 */

router.delete("/:notesId", verifyCookie, async (req, res) => {
  try {
    const { notesId } = req.params;
    const { userid } = req.body;
    const deleteNote = await NotesModel.findOneAndDelete({
      _id: notesId,
      userid: userid.toString(),
    });
    if (!deleteNote) {
      return res
        .status(403)
        .json({ success: false, error: "Not Authorized Note not found" });
    }
    return res.status(200).json({ success: true, deleteNote });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

router.get("/*", (req, res) => {
  return res.status(404).send("Page Not Found!");
});
module.exports = router;
