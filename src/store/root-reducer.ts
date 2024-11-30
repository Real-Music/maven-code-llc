import { combineReducers } from "@reduxjs/toolkit";
import userReducer from "./user/user-slice";
import loadingReducer from "./loading/loading-slice";
import homeReducer from "./home/home-slice";

export default combineReducers({
	user: userReducer,
	home: homeReducer,
	loading: loadingReducer,
});