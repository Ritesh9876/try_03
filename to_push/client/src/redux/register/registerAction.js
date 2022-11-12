import {
  REGISTER_FAILURE,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  USERNAME_EXISTS,
} from "./registerActionTypes";
import axios from "axios";


export const registerRequest = () => {
  return {
    type: REGISTER_REQUEST,
  };
};
export const usernameExists = error => {
  return {
    type: USERNAME_EXISTS,
    error: error,
  };
};
export const registerSuccess = () => {
  return {
    type: REGISTER_SUCCESS,
  };
};

export const registerFailure = error => {
  return {
    type: REGISTER_FAILURE,
    error: error,
  };
};

export const register = () => {
  
  return async function (dispatch) {
    dispatch(registerRequest());
    try {
      
      dispatch(registerSuccess());
    } catch (err) {
      dispatch(registerFailure(err));
    }
  };
};
