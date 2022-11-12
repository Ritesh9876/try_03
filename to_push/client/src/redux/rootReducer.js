import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { loginReducer } from "./login/loginReducer";
import { registerReducer } from "./register/registerReducer";
export const rootReducer = combineReducers({
    loginReducer,
    registerReducer,
  });


  