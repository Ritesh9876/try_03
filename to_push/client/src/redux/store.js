import { legacy_createStore as createStore, applyMiddleware } from "redux";
import {configureStore} from '@reduxjs/toolkit'
import { rootReducer } from "./rootReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import thunkMiddleware from "redux-thunk";

export const store = createStore(
 rootReducer,
  composeWithDevTools(applyMiddleware(thunkMiddleware))
);
