import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import NoteCard from "./NoteCard";
import Loader from "./Loader";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllNotes,
  addNote,
  updateNote,
  deleteNote,
} from "../redux/notes/notes.action";
import { IoMdClose } from "react-icons/io";

const newstyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  boxShadow: 10,
  p: 1,
};

const NoteCardContainer = () => {
  const [noteData, setNoteData] = useState({
    _id: "",
    title: "",
    type: "",
    description: "",
  });
  const navigate = useNavigate();
  const state = useSelector((gloabalstae) => gloabalstae.notes);
  const { loading, allNotes, name, success, error, notes } = state;

  const dispatch = useDispatch();

  const [open, setOpen] = useState(false);
  const [type1, setType] = useState("add");
  const handleOpen = (text = "add") => {
    setOpen(true);
    setType(text);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { title, type, description, _id } = noteData;
    const notedata = { title, type, description };

    switch (type1) {
      case "add":
        dispatch(addNote(notedata, _id));
        break;
      case "update":
        dispatch(updateNote(notedata, _id));
        break;
      case "delete":
        dispatch(deleteNote(_id));
        break;
      default:
        dispatch(getAllNotes());
    }
    handleClose();

    dispatch(getAllNotes());
  };

  useEffect(() => {
    dispatch(getAllNotes());
    if (error) {
      navigate("/");
    }
  }, [notes]);

  //updates

  const handleUpdate = (id) => {
    setNoteData({ ...noteData, _id: id });

    handleOpen("update");
  };
  //delete
  const handleDelete = (id) => {
    setNoteData({ ...noteData, _id: id });

    handleOpen("delete");
  };

  return (
    <>
      <section className="text-white flex flex-col gap-5 items-center">
        <div className="m-6 flex justify-between gap-5 items-center">
          {name && (
            <p className="text-2xl font-semibold">Welcome back {name} 👋 </p>
          )}
          <Button
            onClick={() => handleOpen("add")}
            variant="contained"
            color="success"
          >
            + Add Note
          </Button>
          <Modal
            type={type1}
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box className="w-96" sx={newstyle}>
              <div
                style={{ backgroundColor: "#0f1014" }}
                className=" text-white rounded-lg  h-full pb-6  mb-4 flex justify-between"
              >
                <div className=" h-full m-auto w-5/6   p-4">
                  <p className="text-xl text-center font-semibold">
                    {type1 === "update"
                      ? `Update Note`
                      : type1 === "add"
                      ? `Add Note`
                      : `Confirm Delete`}
                  </p>
                  <form className="flex flex-col pb-4 " onSubmit={handleSubmit}>
                    <label
                      className={`${type1 === "delete" ? `hidden` : `block`}`}
                      htmlFor="Title"
                    >
                      Title
                    </label>
                    <input
                      className={`outline text-black ${
                        type1 === "delete" ? `hidden` : `block`
                      } rounded-lg h-8 pl-2 pr-2`}
                      type="text"
                      id="Title"
                      onChange={(event) =>
                        setNoteData({ ...noteData, title: event.target.value })
                      }
                      name="Title"
                      placeholder="Title for note"
                    />
                    <br />
                    <label
                      className={`${type1 === "delete" ? `hidden` : `block`}`}
                      htmlFor="type"
                    >
                      Type
                    </label>
                    <input
                      className={`outline text-black ${
                        type1 === "delete" ? `hidden` : `block`
                      } rounded-lg h-8 pl-2 pr-2`}
                      type="text"
                      onChange={(event) =>
                        setNoteData({ ...noteData, type: event.target.value })
                      }
                      name="type"
                      id="type"
                      placeholder="Type of note"
                    />
                    <br />
                    <label
                      className={`${type1 === "delete" ? `hidden` : `block`}`}
                      htmlFor="description"
                    >
                      Decription
                    </label>
                    <textarea
                      className={`outline text-black ${
                        type1 === "delete" ? `hidden` : `block`
                      } rounded-lg pl-2 pr-2`}
                      name="description"
                      id="description"
                      onChange={(event) =>
                        setNoteData({
                          ...noteData,
                          description: event.target.value,
                        })
                      }
                      placeholder="Elaborate Note"
                      cols="20"
                      rows="5"
                    />
                    <br />
                    <button
                      className={` ${
                        type1 === "delete"
                          ? `bg-red-600 hover:bg-red-700`
                          : `bg-lime-700 hover:bg-lime-700`
                      }bg-lime-600 h-10 text-xl font-semibold rounded-lg  `}
                      type="submit"
                    >
                      {type1 === "update"
                        ? `Update Note`
                        : type1 === "add"
                        ? `Add Note`
                        : `Delete`}
                    </button>
                  </form>
                </div>
                <button className="  h-10 text-3xl" onClick={handleClose}>
                  <IoMdClose />
                </button>
              </div>
            </Box>
          </Modal>
        </div>
        {loading ? (
          <Loader />
        ) : (
          <div className="flex flex-wrap justify-around gap-5  w-4/5 ">
            {allNotes ? (
              allNotes.map((element) => {
                return (
                  <NoteCard
                    update={handleUpdate}
                    Delete={handleDelete}
                    key={element._id}
                    id={element._id}
                    title={element.title}
                    type={element.type}
                    description={element.description}
                    createdAt={element.createdAt}
                  />
                );
              })
            ) : (
              <p>Please add Notes!</p>
            )}
          </div>
        )}
      </section>
    </>
  );
};

export default NoteCardContainer;
