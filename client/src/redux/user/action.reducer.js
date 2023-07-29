import { SIGN_IN, SIGN_UP, SIGN_OUT, ERROR } from "./action.type";

const initialstate = {};

const userReducer = (state = initialstate, action) => {
  switch (action.type) {
    case SIGN_IN:
      return {
        ...state,
        ...action.payload,
      };

    case SIGN_UP:
      return {
        ...state,
        ...action.payload,
      };

    case SIGN_OUT:
      return {};

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

export default userReducer;
