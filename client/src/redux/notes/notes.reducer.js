import {
  GET_NOTES,
  ADD_NOTE,
  DELETE_NOTE,
  UPDATE_NOTE,
  ERROR,
} from "./notes.type";

const initialstate = {};

const notes = (state = initialstate, action) => {
  switch (action.type) {
    case GET_NOTES:
      return {
        ...state,
        ...action.payload,
      };
    case ADD_NOTE:
      return {
        ...state,
        ...action.payload,
      };
    case UPDATE_NOTE:
      return {
        ...state,
        ...action.payload,
      };
    case DELETE_NOTE:
      return {
        ...state,
        ...action.payload,
      };
    case ERROR:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};

export default notes;
