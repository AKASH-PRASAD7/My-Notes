import mongoose from "mongoose";
const { Schema } = mongoose;

const NotesSchema = new Schema(
  {
    userid: { type: mongoose.Types.ObjectId, ref: "user", required: true },
    title: { type: String, required: true },
    type: { type: String, default: "Tech" },
    description: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

export const NotesModel = mongoose.model("notes", NotesSchema);
