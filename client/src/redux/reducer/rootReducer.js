import { combineReducers } from "redux";

import user from "../user/action.reducer";
import notes from "../notes/notes.reducer";

const rootReducer = combineReducers({
  user,
  notes,
});

export default rootReducer;
