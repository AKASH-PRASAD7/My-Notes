import { combineReducers } from "redux";

import user from "../user/action.reducer";

const rootReducer = combineReducers({
  user,
});

export default rootReducer;
