import axios from "axios";
import {
  SIGN_IN,
  SIGN_UP,
  SIGN_OUT,
  ERROR,
  GET_USER_DETAILS,
} from "./action.type";

export const signUp = (userdata) => async (dispatch) => {
  try {
    const response = await axios.post(
      "http://localhost:8000/auth/signup",
      {
        credentials: userdata,
      },
      {
        withCredentials: true,
      }
    );
    return dispatch({
      type: SIGN_UP,
      payload: response.data,
    });
  } catch (error) {
    return dispatch({
      type: ERROR,
      payload: error.response.data,
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
      payload: error.response.data,
    });
  }
};

export const signOut = () => async (dispatch) => {
  try {
    const response = await axios.post("http://localhost:8000/auth/signout");
    return dispatch(
      {
        type: SIGN_OUT,
        payload: response,
      },
      {
        withCredentials: true,
      }
    );
  } catch (error) {
    return dispatch({
      type: ERROR,
      payload: error.response.data,
    });
  }
};

export const getUserDetails = () => async (dispatch) => {
  try {
    const response = await axios.post("http://localhost:8000/user");
    return dispatch(
      {
        type: GET_USER_DETAILS,
        payload: response.data,
      },
      {
        withCredentials: true,
      }
    );
  } catch (error) {
    return dispatch({
      type: ERROR,
      payload: error.response.data,
    });
  }
};
