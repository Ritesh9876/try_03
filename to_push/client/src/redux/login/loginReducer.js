import {
  LOGIN_FAILURE,
  LOGIN_SUCCESS,
  LOGOUT,
} from "./loginActionTypes";
//console.log("here",global.config.secureStorage.getItem("logged"))
const initalState = {
  loading: false,
  username:   global.config.secureStorage.getItem("username"),
  loggedIn:global.config.secureStorage.getItem("logged") !== null,
   user: ""
};

export const loginReducer = (state = initalState, action) => {
  switch (action.type) {
  
    case LOGIN_SUCCESS:
      // 
      return {
        ...state,
        loading: false,
        loggedIn: true,
        username: action.username,
        user: action.user
      };
    case LOGIN_FAILURE:
      // 
      return {
        ...state,
        loading: false,
        error: action.error
      };
    case LOGOUT:
      // 
      return {
        ...state,
        loggedIn: false
      };
    default:
      // 
      return state;
  }
};
export default loginReducer;
