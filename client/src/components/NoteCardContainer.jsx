import React, { useEffect, useState } from "react";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import NoteCard from "./NoteCard";
import { useDispatch, useSelector } from "react-redux";
import { getAllNotes } from "../redux/notes/notes.action";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const NoteCardContainer = ({ data }) => {
  const state = useSelector((gloabalstae) => gloabalstae.notes);
  const dispatch = useDispatch();
  const [notes, setNotes] = useState({});
  const getNotes = () => {
    dispatch(getAllNotes());
    setNotes(state.data || {});
  };

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  useEffect(() => {
    getNotes();
  }, [notes]);
  return (
    <>
      <section className="text-white flex flex-col gap-5 items-center">
        <div className="m-6 flex justify-between gap-5 items-center">
          {data && (
            <p className="text-2xl font-semibold">
              Welcome back {data.name} 👋{" "}
            </p>
          )}
          <Button onClick={handleOpen} variant="contained" color="success">
            + Add Note
          </Button>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Text in a modal
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
              </Typography>
            </Box>
          </Modal>
        </div>
        <div className="flex flex-wrap justify-around gap-5  w-4/5 ">
          {notes.allNotes ? (
            notes.allNotes.map((element) => {
              return (
                <NoteCard
                  key={element._id}
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
      </section>
    </>
  );
};

export default NoteCardContainer;
