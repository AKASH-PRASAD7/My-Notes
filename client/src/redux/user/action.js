import axios from "axios";
import { SIGN_IN, SIGN_UP, SIGN_OUT, ERROR } from "./action.type";

export const signUp = (userdata) => async (dispatch) => {
  try {
    const response = await axios.post("http://localhost:8000/auth/signup", {
      credentials: userdata,
    });
    return dispatch({
      type: SIGN_UP,
      payload: response,
    });
  } catch (error) {
    return dispatch({
      type: ERROR,
      payload: error,
    });
  }
};

export const signIn = (userdata) => async (dispatch) => {
  try {
    const response = await axios.post(
      "http://localhost:8000/auth/signin",
      {
        credentials: userdata,
      },
      {
        withCredentials: true,
      }
    );
    return dispatch({
      type: SIGN_IN,
      payload: response,
    });
  } catch (error) {
    return dispatch({
      type: ERROR,
      payload: error,
    });
  }
};

export const signOut = async () => async (dispatch) => {
  try {
    const response = await axios.post("http://localhost:8000/auth/signout");
    return dispatch({
      type: SIGN_OUT,
      payload: response,
    });
  } catch (error) {
    return dispatch({
      type: ERROR,
      payload: error,
    });
  }
};
