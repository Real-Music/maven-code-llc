import { combineReducers } from "@reduxjs/toolkit";
import userReducer from "./user-slice/user-slice";
import loadingReducer from "./loading/loading-slice";

export default combineReducers({
	user: userReducer,
	loading: loadingReducer
});