import { combineReducers } from "redux";
import authReducer from "./authReducers";
import dataUsersReducer from "./dataUsersReducers";
import galleryReducers from "./galleryReducers";
import postReducers from "./postReducers";
import userReducer from "./userReducers";

const rootReducers = combineReducers({
  post: postReducers,
  auth: authReducer,
  user: userReducer,
  dataUsers: dataUsersReducer,
  gallery: galleryReducers,
});

export default rootReducers;
