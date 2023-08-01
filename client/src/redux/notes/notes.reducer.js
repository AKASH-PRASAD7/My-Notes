import {
  GET_NOTES,
  ADD_NOTE,
  DELETE_NOTE,
  UPDATE_NOTE,
  ERROR,
  LOADING,
} from "./notes.type";

const initialstate = {
  loading: false,
  allNotes: [],
};

const notes = (state = initialstate, action) => {
  switch (action.type) {
    case GET_NOTES:
      return {
        ...state,
        ...action.payload,
        loading: false,
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
    case LOADING:
      return {
        ...state,
        loading: action.payload,
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
