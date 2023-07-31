import {
  GET_NOTES,
  ADD_NOTE,
  DELETE_NOTE,
  UPDATE_NOTE,
  ERROR,
} from "./notes.type";
import axios from "axios";

export const getAllNotes = () => async (dispatch) => {
  try {
    const notes = await axios.get("http://localhost:8000/notes", {
      withCredentials: true,
    });
    return dispatch({
      type: GET_NOTES,
      payload: notes.data,
    });
  } catch (error) {
    return dispatch({
      type: ERROR,
      payload: error.response.data,
    });
  }
};

export const addNote = (note) => async (dispatch) => {
  try {
    const notes = await axios.post(
      "http://localhost:8000/notes",
      {
        ...note,
      },
      {
        withCredentials: true,
      }
    );
    return dispatch({
      type: ADD_NOTE,
      payload: notes.data,
    });
  } catch (error) {
    return dispatch({
      type: ERROR,
      payload: error.response.data,
    });
  }
};

export const updateNote = (note, noteId) => async (dispatch) => {
  try {
    const notes = await axios.patch(
      `http://localhost:8000/notes/${noteId}`,
      {
        ...note,
      },
      {
        withCredentials: true,
      }
    );
    return dispatch({
      type: UPDATE_NOTE,
      payload: notes.data,
    });
  } catch (error) {
    return dispatch({
      type: ERROR,
      payload: error.response.data,
    });
  }
};

export const deleteNote = (noteId) => async (dispatch) => {
  try {
    const notes = await axios.delete(`http://localhost:8000/notes/${noteId}`, {
      withCredentials: true,
    });
    return dispatch({
      type: DELETE_NOTE,
      payload: notes.data,
    });
  } catch (error) {
    return dispatch({
      type: ERROR,
      payload: error.response.data,
    });
  }
};
