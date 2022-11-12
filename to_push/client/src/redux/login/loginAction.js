import {
  LOGIN_FAILURE,
  LOGIN_SUCCESS,
  LOGOUT,
} from "./loginActionTypes";
import axios from "axios";

import Notifications from "react-notification-system-redux";
const notificationOpts = {
  title: "Error",
  message: "Invalid Username or Password",
  position: "tr",
  autoDismiss: 2,
};


export const loginSuccess = (username, user) => {
  return {
    type: LOGIN_SUCCESS,
    username: username,
    user: user,
  };
};

export const loginFailure = error => {
  return {
    type: LOGIN_FAILURE,
    error: error,
  };
};

export const logoutRequest = () => {
  return {
    type: LOGOUT,
  };
};

export const logout = () => {
  return async function (dispatch) {
   
    global.config.secureStorage.clear();
    
    dispatch(logoutRequest());
  };
};

export const login = (username, password) => {
  console.log("user her",username)

  return async function (dispatch) {
 console.log("user her",username)
      dispatch(loginSuccess(username));
    
  };
};
